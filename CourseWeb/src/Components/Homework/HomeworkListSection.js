import { PaperClipIcon } from '@heroicons/react/solid'

const assignments = [
	{
		title: 'First Assignment',
		description: 'Introduction, Linear Algebra, Optimization',
		dueDate: '09/21/2021 at 11:59 PM EST/EDT',
		attachments: [
			{
				title: 'Writeup',
				link: '/hw/hw1writeup.pdf'
			},
			{
				title: 'Data',
				link: '/hw/hw1materials.rar'
			}
		]
	},{
		title: 'Second Assignment',
		description: 'Data-Driven Representations, Boosting, Face Detection',
		dueDate: '10/12/2021 at 11:59 PM EST/EDT',
		attachments: [
			{
				title: 'Writeup',
				link: '/hw/hw2_handout (1).pdf'
			},
			{
				title: 'Data',
				link: '/hw/hw2_materials_f21.rar'
			}
		]
	},{
		title: 'Third Assignment',
		description: 'NMF, Clustering, Sparse Optimization, SVMs',
		dueDate: '11/04/2021 at 11:59 PM EST/EDT',
		attachments: [
			{
				title: 'Writeup',
				link: '/hw/hw3_handout.pdf'
			},
			{
				title: 'Data',
				link: '/hw/hw3_materials_f21.zip'
			}
		]
	},{
		title: 'Fourth Assignment',
		description: 'Maximum Likelihood Estimation, Expectation Maximization',
		dueDate: '11/23/2021 at 11:59 PM EST/EDT',
		attachments: [
			{
				title: 'Writeup',
				link: '/hw/hw4_handout.pdf'
			},
			{
				title: 'Data',
				link: '/hw/hw4materials_f21.zip'
			}
		]
	},{
		title: 'Fifth Assignment',
		description: 'TBA',
		dueDate: 'TBA',
		attachments: [
			{
				title: 'Writeup',
				link: '#'
			},
			{
				title: 'Data',
				link: '#'
			}
		]
	}
]

export default function HomeworkListSection() {
  return (
	  <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
		{assignments.map((assignment) => (
			<div className="bg-white shadow overflow-hidden sm:rounded-lg mb-12">
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-lg leading-6 font-medium text-gray-900">{assignment.title}</h3>
					<p className="mt-1 max-w-2xl text-sm text-gray-500">{assignment.description}</p>
				</div>
				<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
					<dl className="sm:divide-y sm:divide-gray-200">
						<div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Due Date</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{assignment.dueDate}</dd>
						</div>
						<div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Attachments</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								<ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
									{assignment.attachments.map((attachment) => (
										<li key={attachment.link} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
											<div className="w-0 flex-1 flex items-center">
												<PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
												<span className="ml-2 flex-1 w-0 truncate">{attachment.title}</span>
											</div>
											<div className="ml-4 flex-shrink-0">
												<a href={attachment.link}className="font-medium text-indigo-600 hover:text-indigo-500">
													Download
												</a>
											</div>
										</li>

									))}
								</ul>
							</dd>
						</div>
					</dl>
				</div>
			</div>
		))}
	  </div>
  	)
}