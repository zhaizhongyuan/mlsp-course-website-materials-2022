import pandas as pd
import numpy as np


def main():
    filename = "./peer_ratings.tsv"

    data = pd.read_csv(filename, sep="\t")

    name_key = "Your Andrew ID"
    names = data[name_key]
    data[name_key] = [name.lower() for name in names]

    data_np = data.to_numpy()

    names = np.unique(data_np[:, 2])

    means = {}
    stds = {}

    # Compute stats
    for name in names:
        mask = data_np[:, 2] == name
        scores_name = np.asarray((data_np[mask])[:, 4:9], dtype=np.float64)
        means[name] = np.mean(scores_name, axis=0)
        stds[name] = np.std(scores_name, axis=0)

    # Z-norm on Peers
    for name in names:
        means_name, stds_name = means[name], stds[name]
        mask = data_np[:, 2] == name
        data_np[mask, 4:9] = (data_np[mask, 4:9] - means_name) / (stds_name + 1e-16)

    # Collect scores for each team
    team_scores = list(zip(data_np[:, 3], np.sum(data_np[:, 4:9], axis=1)))
    team_names = np.unique([name for name, score in team_scores])
    team_scores_collected = {name: [] for name in team_names}
    for team_name, team_score in team_scores:
        team_scores_collected[team_name].append(team_score)

    # Find outliers
    team_scores_min = {
        name: np.min(scores) for name, scores in team_scores_collected.items()
    }
    team_scores_max = {
        name: np.max(scores) for name, scores in team_scores_collected.items()
    }

    # Aggregate project scores for each group
    total_team_scores = {}

    for team_name, team_scores in team_scores_collected.items():
        total_team_scores[team_name] = (
            np.sum(team_scores)
            - team_scores_min[team_name]
            - team_scores_max[team_name]
        )

    min = np.min([value for value in total_team_scores.values()])
    max = np.max([value for value in total_team_scores.values()])

    total_team_scores_shifted = {}

    for key, value in total_team_scores.items():
        total_team_scores_shifted[key] = 5 * (value - min) / (max - min) + 5

    for key, value in total_team_scores_shifted.items():
        print(f"{key}: {value}")

    with open("./peer_video_normalized_grades.tsv", "w") as file:
        for key, value in total_team_scores_shifted.items():
            file.write(f"{key}\t{value}\n")


if __name__ == "__main__":
    main()
