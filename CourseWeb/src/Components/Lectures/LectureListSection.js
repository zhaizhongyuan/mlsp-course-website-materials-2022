const lectures = [
	{
		topic: 'Introduction',
		date: 'August 31, 2021',
		link: '/ppt/Lecture1.Introduction.pdf'
	}, 
	{
		topic: 'Linear Algebra 1',
		date: 'September 2, 2021',
		link: '/ppt/Lec2 LinearAlgebra1.pdf'
	},
	{
		topic: 'Linear Algebra 2',
		date: 'September 7, 2021',
		link: '/ppt/Lec3  LinearAlgebra2.pdf'
	},{
		topic: 'Optimization',
		date: 'September 9, 2021',
		link: '/ppt/Lec4 with extension.rar'
	},{
		topic: 'Deterministic Representations 1',
		date: 'September 14, 2021',
		link: '/ppt/Lecture5_deterministicreps.pdf'
	},{
		topic: 'Data-Driven Representations 2',
		date: 'September 16, 2021',
		link: '/ppt/Lecture6.EigenRepresentations.pdf'
	},{
		topic: 'Classification and Metaclassifiers',
		date: 'September 21, 2021',
		link: '/ppt/Lecture7.BoostingOnly.pdf'
	},{
		topic: 'Face Detection',
		date: 'September 23, 2021',
		link: '/ppt/Lecture8.facedetection.pdf'
	},
	{
		topic: 'Non-Negative Matrix Factorization',
		date: 'September 28, 2021',
		link: '/ppt/Lecture9.NMF.pdf'
	},{
		topic: 'Probability and Information Theory',
		date: 'September 30, 2021',
		link: '/ppt/Lecture10.ProbInfoth.pdf'
	},{
		topic: 'Independent Component Analysis 1',
		date: 'October 5, 2021',
		link: '/ppt/Lecture ICA new2.pdf'
	},{
		topic: 'Independent Component Analysis 2.',
		date: 'October 7, 2021',
		link: 'ppt/Lecture ICA new2.pdf'
	},{
		topic: 'Clustering',
		date: 'October 12, 2021',
		link: '#'
	},{
		topic: 'Happy holiday !!!',
		date: 'October 14, 2021',
		link: '#'
	},{
		topic: 'Dictionary Representations',
		date: 'October 19, 2021',
		link: '#'
	},{
		topic: 'Guest Lecture: Compressed Sensing',
		date: 'October 21, 2021',
		link: '#'
	},{
		topic: 'Regression and Prediction',
		date: 'October 26, 2021',
		link: '#'
	},{
		topic: 'Linear Classifiers',
		date: 'October 28, 2021',
		link: '#'
	},{
		topic: 'Expectation Maximization 1',
		date: 'November 2, 2021',
		link: '#'
	},{
		topic: 'Expectation Maximization 1',
		date: 'November 4, 2021',
		link: '#'
	},{
		topic: 'Factor Analysis',
		date: 'November 9, 2021',
		link: '#'
	},{
		topic: 'Supervised Representations',
		date: 'November 11, 2021',
		link: '#'
	},{
		topic: 'Hidden Markov Models 1',
		date: 'November 16, 2021',
		link: '#'
	},{
		topic: 'Hidden Markov Models 2',
		date: 'November 18, 2021',
		link: '#'
	},{
		topic: 'Non-Linear Dynamical Systems',
		date: 'November 23, 2021',
		link: '#'
	},{
		topic: 'Happy Thanksgiving!',
		date: 'November 25, 2021',
		link: '#'
	},{
		topic: 'Kalman Filtering 1',
		date: 'November 30, 2021',
		link: '#'
	},
	{
		topic: 'Kalman Filtering 2',
		date: 'December 2, 2021',
		link: '#'
	}
]
export default function LectureListSection() {
	return (
		<div className="flex flex-col mx-auto pb-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pb-24">
			<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Date
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Topics
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Slides
									</th>
							</tr>
							</thead>
							<tbody>
								{lectures.map((lecture, lectureIdx) => (
									<tr key={lecture.topic} className={lectureIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lecture.date}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lecture.topic}</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm">
											<a href={lecture.link} className="text-indigo-600 hover:text-indigo-900">
												Download
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}