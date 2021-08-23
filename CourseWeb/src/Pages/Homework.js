import HeroSection from "../Components/Homework/HeroSection"
import HomeworkListSection from "../Components/Homework/HomeworkListSection"

export default function Homework() {
	return (
		<div className="relative bg-white ">
			<div className="relative">
				<HeroSection />
				<HomeworkListSection />
			</div>
		</div>  
	)
  }