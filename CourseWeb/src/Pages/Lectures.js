import HeroSection from "../Components/Lectures/HeroSection"
import LectureListSection from "../Components/Lectures/LectureListSection"

export default function Lectures() {
	return (
		<div className="relative bg-white ">
			<div className="relative">
				<HeroSection />
				<LectureListSection />
			</div>
		</div>
	)
  }