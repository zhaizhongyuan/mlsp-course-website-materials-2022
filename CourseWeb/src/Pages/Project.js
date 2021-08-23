import HeroSection from "../Components/Project/HeroSection"
import ProjectIdeasSection from "../Components/Project/ProjectIdeasSection"
import ProjectProposalSection from "../Components/Project/ProjectProposalSection"
import ProjectMidtermSection from "../Components/Project/ProjectMidtermSection"
import ProjectFinalSection from "../Components/Project/ProjectFinalSection"
import ProjectPeerReviewSection from "../Components/Project/ProjectPeerReviewSection"

export default function Project() {
	return (
		<div className="relative bg-white ">
			<div className="relative">
				<HeroSection />
				<ProjectIdeasSection />
				<ProjectProposalSection />
				<ProjectMidtermSection />
				<ProjectFinalSection />
				<ProjectPeerReviewSection />
			</div>
		</div>
	)
}