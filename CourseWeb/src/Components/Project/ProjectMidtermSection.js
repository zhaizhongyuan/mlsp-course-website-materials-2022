export default function ProjectMidtermSection() {
	return (
		<div className="py-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl my-2">
				Project Midterm Report
			</h2>
			<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
				Due Date
			</span>
			<p className="text-xl leading-7 text-gray-500 mb-4">
			We hope the first part of the semester has been good! We want to check in with your team about how your project has been going. The midterm report is due on November 10th, 2021 at 11:59 PM EST. 
			</p>
			<p className="text-xl leading-7 text-gray-500 mb-4">
			Below, we've enumerated several items that your midterm report must include. Your submission must follow the&nbsp;
				<a href="https://nips.cc/Conferences/2020/PaperInformation/StyleFiles" className="text-indigo-600">
					NeurIPS 2020 style template&nbsp;
				</a>
				and not be longer than two pages. References do not count towards your two-page limit. Your team's midterm report should be submitted as a PDF using Canvas. Each group only needs to submit one copy of the report. You can submit your report as many times as you need before the deadline. Please name your PDF "midterm-{"{group number}"}.pdf". Your report will be graded with the following things in mind:
			</p>
			<ul className="list-disc text-xl leading-7 text-gray-500 mb-4 pl-12">
				<li>
					Is it submitted on time?
				</li>
				<li>
					Does it follow the restriction on the format?
				</li>
				<li>
					Clarity of writing
				</li>
				<li>
					Introduction: What are you trying to do? Why is it important?
				</li>
				<li>
					Related Work: Previous work done related to your topic that may serve as the baseline.
				</li>
				<li>
					Dataset: Description of dataset. It is important to explain this at least briefly so we can accurately  evaluate the methods applied to your problem. What is your dataset? What are you inputs from this dataset? What is your output? Is your dataset complete (e.g., was pre-processing necessary)?
				</li>
				<li>
					Working Experiment. Describe at least one experiment that you have run that works. This could be a  baseline system or sample code applied to your dataset and problem. Please describe the experiment  and its results. For example, if your working experiment is simply the baseline of your project, does the baseline you've ran yield results that are similar to published results?
				</li>
				<li>
					Not-Working Experiment. Describe at least one experiment that you have run that is not currently working.  Here, we would like you to describe the part of your project that you are currently working on. For example, if you're applying ICA to source separation, perhaps the results are not what you were hoping for. Please describe the steps you will take to get your results where you want them to be.
				</li>
				<li>
					Evaluation metric. Please briefly specify how you are measuring your method's performance.
				</li>
				<li>
					Timeline: show what you have accomplished relative to the timeline submitted in your proposal and what you have left to do.
				</li>
				<li>
					Division of work among team members
				</li>
				<li>
					References
				</li>
			</ul>
			<p className="text-xl leading-7 text-gray-500 mb-4">
			As always, if you have any questions, please reach out to the course staff over Piazza!
			</p>
		</div>
	)
}