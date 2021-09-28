export default function ProjectProposalSection() {
	return (
		<div className="py-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl my-2">
				Project Proposal
			</h2>
			<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
				Due Date
			</span>
			<p className="text-xl leading-7 text-gray-500 mb-4">
				Now that you all have your teams, it's time to write the proposal for your project. Your proposal will be due on September 30th, 2021 at 11:59 PM EST. Once the course staff has had time to review your proposal, we will assign a mentor to your team.
			</p>
			<p className="text-xl leading-7 text-gray-500 mb-4">
				Below, we've enumerated several items that your proposal must include. Your submission must follow the&nbsp;
				<a href="https://nips.cc/Conferences/2020/PaperInformation/StyleFiles" className="text-indigo-600">
					NeurIPS 2020 style template&nbsp;
				</a>
				and not be longer than two pages. Your team's proposal should be submitted as a PDF using Canvas. Each group only needs to submit one copy of the proposal. You can submit your proposal as many times as you need before the deadline. Please name your PDF "proposal-{"{group number}"}.pdf".
			</p>
			<ul className="list-disc text-xl leading-7 text-gray-500 mb-4 pl-12">
				<li>
					Title
				</li>
				<li>
					Team member names
				</li>
				<li>
					Research problem statement
				</li>
				<li>
					Literature research
				</li>
				<li>
					Method or proposed solution
				</li>
				<li>
					Datasets that your project will use
				</li>
				<li>
					Evaluation metrics that will gauge how your solution compares to others
				</li>
				<li>
					Timeline which shows when each part of your project will be completed
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