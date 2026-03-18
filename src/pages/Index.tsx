import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ConsequencesSection from "@/components/ConsequencesSection";
import SolutionSection from "@/components/SolutionSection";
import VideoLeadSection from "@/components/VideoLeadSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground font-body">
    <HeroSection />
    <ProblemSection />
    <ConsequencesSection />
    <SolutionSection />
    <VideoLeadSection />
    <FooterSection />
  </div>
);

export default Index;
