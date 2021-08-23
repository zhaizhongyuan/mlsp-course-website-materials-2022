import HomeHeroSection from "../Components/Home/HeroSection"
import TeamSection from "../Components/Home/TeamSection"
import CourseDetailsSection from "../Components/Home/CourseDetailsSection"

export default function Home() {
	return (
		<div className="relative bg-white ">
			<div className="relative">
				<HomeHeroSection />
				<TeamSection/>
				<CourseDetailsSection/>
			</div>
		</div>
	)
}
