const people = [
	{
		name: 'Bhiksha Raj',
		role: 'Professor',
		imageUrl: '/images/bhiksha.jpg', //http://mlsp.cs.cmu.edu/people/bhiksha/index.php
		email: "mailto:bhiksha@cs.cmu.edu"
	},{
		name: 'Charles Yusuf',
		role: 'Teaching Assitant',
		imageUrl: '/images/Charles.jpg',
		email: "mailto:cyusuf@Africa.cmu.edu"
	},{
		name: 'Mohammed Danish',
		role: 'Teaching Assitant',
		imageUrl: '/images/Danish.jpg',
		email: "mailto:mohamme2@andrew"
	},{
		name: 'Yinghao Ma',
		role: 'Teaching Assitant',
		imageUrl: '/images/yinghao.jpg',
		email: "mailto:yinghaom@andrew"
	}
	// More people...
]

export default function TeamSection() {
	return (
		<div className="bg-gray-900">
			<div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
				<div className="space-y-12">
					<div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
						<h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Meet the Instructors</h2>
						<p className="text-xl text-gray-300">
							We've put together a really awesome team this year and we're excited to get started!
							<br /> Office hour and place have been announced on <a href="https://piazza.com/class/ksset4cralds5?cid=62" className="text-indigo-500 underline">piazza</a>. <br /> 
					
						</p>
					</div>
					<ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
						{people.map((person) => (
							<li key={person.name} className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
								<div className="space-y-6 xl:space-y-10">
									<img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={person.imageUrl} alt="" />
									<div className="space-y-2 xl:flex xl:items-center xl:justify-between">
										<div className="font-medium text-lg leading-6 space-y-1">
											<h3 className="text-white">{person.name}</h3>
											<p className="text-indigo-400"><a href={person.email}>{person.role}</a></p>
										</div>


									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}