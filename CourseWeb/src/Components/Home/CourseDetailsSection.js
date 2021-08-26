export default function CourseDetailsSection() {
	return (
		<div className="bg-white">
			<div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
				<div className="space-y-12 mb-12">
					<div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Grading</h2>
						<p className="text-xl text-gray-500">
						copied from last year. TBA actually. <br />
						<strong className="text-indigo-600">Weekly quizzes: </strong> 25% <br />
						<strong className="text-indigo-600">Homeworks: </strong> 50% <br />
						<strong className="text-indigo-600">Project: </strong> 25% <br /><br />
						We will have weekly quizzes that are released on Friday and due on the Sunday of the same weekend. 
						They are meant to test your knowledge of the previous week's material as well as provide you guidance on what you should be studying for the upcoming week.
						<br /><br />
						We are currently planning to have five homework assignments, released at various points across the semester. 
						The homeworks have been carefully designed to ensure that you not only understand the general use case of a technique (e.g., expectation maximization) but can also apply it creatively to an interesting problem (e.g., deblurring an image).
						<br /><br />
						Finally, the project is an opportunity for you and your peers to utilize the variety of techniques we cover throughout the semester to solve a compelling issue in a novel way. 
						More information will be released about all of this later in the semester.
						</p>
					</div>
				</div>
				<div className="space-y-12 mb-12">
					<div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Prerequisites</h2>
						<p className="text-xl text-gray-500">
						<strong className="text-indigo-600">Mandatory: </strong>
						Linear Algebra, Basic Probability Theory. <br /> 
						<strong className="text-indigo-600">Recommended: </strong>
						Signal Processing, Machine Learning. <br /> <br /> 

						It is imperative to your success in this course to have a solid grasp on linear algebra and probability. 
						At the beginning of the semester, we will have two review lectures on linear algebra. 
						Instead of teaching the usual topics you would normally cover in a linear algebra class, we will focus on interesting applications of familiar mechanics to topics such as signal separation and music transcription. 
						We will also highlight several topics in probability and information theory that will be important later on, specifically expectations and entropy.
						 <br /> <br /> 
						
						While it is not neccessary to have a deep understanding of specific machine learning algorithms, it is always welcome. 
						In a similar vein, this class will deal primarily with machine learning as it applies to signal processing. Therefore, any experience you have with signal processing is welcomed with a smile.
						</p>
					</div>
				</div>
				<div className="space-y-12 mb-12">
					<div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Class Times</h2>
						<p className="text-xl text-gray-500">
						<strong className="text-indigo-600">Tuesday: </strong>
						03:05 PM to 04:25 PM EST/EDT. <br /> 
						<strong className="text-indigo-600">Thursday: </strong>
						--03:05 PM to 04:25 PM EST/EDT. <br /> 
						</p>
					</div>
				</div>
				<div className="space-y-12">
					<div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Piazza</h2>
						<p className="text-xl text-gray-500">
							We think collaboration between the teaching staff and students is really important. 
							We use Piazza to answer questions and release important information. 
							You can find our Piazza course at (TBA). 
							Please note, you have to authenticate with your Andrew ID!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}