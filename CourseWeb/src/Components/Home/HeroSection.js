export default function HomeHeroSection() {
	return (
		<div className="my-16 mx-auto max-w-7xl px-4 sm:my-24 sm:px-6 lg:my-32">
			<div className="lg:grid lg:grid-cols-12 lg:gap-8">
				<div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
					<h1>
						<span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
							<span className="block text-gray-900">Welcome to</span>
							<span className="block text-indigo-600">machine learning</span>
							<span className="block text-indigo-600">for signal processing.</span>
						</span>
					</h1>
				</div>
				<p className="lg:col-span-12 lg:text-left text-gray-500 text-xl">
					<strong className="text-indigo-600">Signal Processing </strong>
					is the science that deals with extraction of information from signals of various kinds. This has two distinct aspects -- characterization and categorization. Traditionally, signal characterization has been performed with mathematically-driven transforms, while categorization and classification are achieved using statistical tools.
				</p>
				<p className="lg:col-span-12 lg:text-left text-gray-500 text-xl">
					<strong className="text-indigo-600">Machine Learning </strong>
					aims to design algorithms that learn about the state of the world directly from data.
				</p>
				<p className="lg:col-span-12 lg:text-left text-gray-500 text-xl">
					A increasingly popular trend has been to develop and apply machine learning techniques to both aspects of signal processing, often blurring the distinction between the two.
				</p>
				<p className="lg:col-span-12 lg:text-left text-gray-500 text-xl">
					This course discusses the use of machine learning techniques to process signals. We cover a variety of topics, from data driven approaches for characterization of signals such as audio including speech, images and video, and machine learning methods for a variety of speech and image processing problems.
				</p>
			</div>
		</div>
	)
}