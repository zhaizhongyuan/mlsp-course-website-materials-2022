export default function CourseDetailsSection() {
	return (
		<div className="bg-white">
			<div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
				<div className="space-y-12 mb-12">
					<div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Grading</h2>
						<p className="text-xl text-gray-500">
						<strong className="text-indigo-600">Mini quizzes: </strong> 24% <br />
						<strong className="text-indigo-600">Homeworks: </strong> 50% <br />
						<strong className="text-indigo-600">Group project: </strong> 25% <br />
						<strong className="text-indigo-600">Class participation: </strong> 1% <br /><br />
						We will have weekly quizzes that are released on Saturday 12:00 a.m. EST/EDT and due on the Sunday night 11:59 p.m. EST/EDT of the same weekend, 48 hours you have in total. 
						They are meant to test your knowledge of the previous week's material as well as provide you guidance on what you should be studying for the upcoming week. 
						Ten multiple-choice questions will be included in each quiz.
						<br /><br />
						We are currently planning to have four (maybe five) homework assignments, released at various points across the semester. 
						The homeworks have been carefully designed as mini projects to ensure that you not only understand the general use case of a technique (e.g., expectation maximization),
						 but can also apply it creatively to an interesting problem (e.g., deblurring an image).
						You will not catch up if you slack on any of them. So, please start early and feel free to ask for help :-)
						<br /><br />
						Finally, the project is an opportunity for you and your peers to utilize the variety of techniques we cover throughout the semester to solve a compelling issue in a novel way. 
						Topics suggested Will be assigned early in course and each group should be well-prepared for a Video presentation (on Dec. 10 approx). 
						The final evaluated is partly done by peer grading.
						<br /><br />
						Attendance as measured by responses to in-class polls. Alternately, viewership of Panopto videos for Kigali students.
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
						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Class Times & Locations</h2>
						<p className="text-xl text-gray-500">
						<strong className="text-indigo-600">Tuesday: </strong>
						03:05 PM to 04:25 PM EST/EDT. <br /> 
						<strong className="text-indigo-600">Thursday: </strong>
						03:05 PM to 04:25 PM EST/EDT. <br /> 
						<strong className="text-indigo-600">Location (in person): </strong>
						Doherty Hall (DH) A302, at basement one. <br /><br />
						<strong className="text-indigo-600">Zoom ID:</strong> 984 6390 8291 <br /> 
						<strong className="text-indigo-600">Passcode:</strong> see at piazza or use the <a href="https://cmu.zoom.us/j/98463908291?pwd=TUhDbFZCL2ZkM2tzRFN4ZG9YTHBUZz09" className="text-indigo-500 underline">zoom link</a>. <br /> 
						
						
						
						<br />
						This course will be taught in person. However, in the event that the course is moved online due to covid, we will continue to deliver lectures via zoom. 
						In the event that an instructor is unable to deliver a lecture in person, we will broadcast that lecture over zoom or, in extreme situations, expect you to view pre-recorded lectures from prior semesters. 
						You will be notified through piazza should any of these eventualities arise. The zoom details for this course are as below. <br /> 
						</p>
					</div>
				</div>
				<div className="space-y-12">
					<div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Piazza & Canvas</h2>
						<p className="text-xl text-gray-500">
							We think collaboration between the teaching staff and students is really important. 
							We use Piazza to answer questions and release important information. 
							You can find our Piazza course at <a href="https://piazza.com/class/ksset4cralds5" className="text-indigo-500 underline">here</a>. 
							And you can find the assignments, quizzes as well as other auxiliary content on Canvas at <a href="https://canvas.cmu.edu/courses/24534" className="text-indigo-500 underline">here</a>.
							Please note, you have to authenticate with your Andrew ID!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}