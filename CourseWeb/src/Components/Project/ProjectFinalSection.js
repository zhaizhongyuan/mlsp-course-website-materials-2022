export default function ProjectFinalSection() {
	return (
		<div className="py-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl my-2">
				Project Final Report
			</h2>
			<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
				Due Date
			</span>
			<p className="text-xl leading-7 text-gray-500 mb-4">
			Wow, we're already at the end of the semester. We can't wait to read what you've accomplished with your projects. The final report will be due on December 13th, 2020 at 11:59 PM EST. 
			</p>
			<p className="text-xl leading-7 text-gray-500 mb-4">
			Below, we've enumerated several items that your midterm report must include. Your submission must follow the&nbsp;
				<a href="/" className="text-indigo-600">
					NeurIPS 2020 style template&nbsp;
				</a>
				and not be longer than two pages. References do not count towards your two-page limit. Your team's midterm report should be submitted as a PDF using Canvas. Each group only needs to submit one copy of the report. You can submit your report as many times as you need before the deadline. Please name your PDF "final-{"{group number}"}.pdf". Your report will be graded with the following things in mind:
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
					Results. Your experimental results. Describe how the current results in each of the experiments align with your expectations. What metrics did you use for evaluation? How do your results compare to prior work?
				</li>
				<li>
					Discussion and Analysis. Analyze your model and results. Highlight a few of the limitations of your approach (e.g., strong assumptions you had to make, constraints, when your method didn't work in practice, etc.). Do the results and the explanation provide insights into the ML models or the dataset you were dealing with? Comment on whether you think there is a way to further improve your method to eliminate these limitations.
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