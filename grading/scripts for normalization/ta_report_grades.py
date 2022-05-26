import pandas as pd
import numpy as np


def main():
    filename = "./report_ratings.tsv"

    data = pd.read_csv(filename, sep="\t")

    name_key = "Andrew ID"
    names = data[name_key]
    data[name_key] = [name.lower() for name in names]

    data_np = data.to_numpy()

    names = np.unique(data_np[:, 2])

    means = {}
    stds = {}

    # Compute stats
    for name in names:
        mask = data_np[:, 2] == name
        scores_name = np.asarray((data_np[mask])[:, 5:24:2], dtype=np.float64)
        means[name] = np.mean(scores_name, axis=0)
        stds[name] = np.std(scores_name, axis=0)

    # Z-norm on TAs
    for name in names:
        means_name, stds_name = means[name], stds[name]
        mask = data_np[:, 2] == name
        data_np[mask, 5:24:2] = (data_np[mask, 5:24:2] - means_name) / (
            stds_name + 1e-16
        )

    # Aggregate project scores for each group
    team_scores = list(zip(data_np[:, 3], np.sum(data_np[:, 5:24:2], axis=1)))
    team_names = np.unique([name for name, score in team_scores])

    total_team_scores = {name: 0 for name in team_names}
    for team_name, team_score in team_scores:
        total_team_scores[team_name] += team_score

    min = np.min([value for value in total_team_scores.values()])
    max = np.max([value for value in total_team_scores.values()])

    total_team_scores_shifted = {}

    for key, value in total_team_scores.items():
        total_team_scores_shifted[key] = 5 * (value - min) / (max - min) + 5

    for key, value in total_team_scores_shifted.items():
        print(f"{key}: {value}")

    with open("./ta_report_normalized_grades.tsv", "w") as file:
        for key, value in total_team_scores_shifted.items():
            file.write(f"{key}\t{value}\n")


if __name__ == "__main__":
    main()
