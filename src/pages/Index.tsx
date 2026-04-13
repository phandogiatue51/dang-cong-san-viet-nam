import HeroSection from "@/components/sections/HeroSection";
import OriginSection from "@/components/sections/OriginSection";
import ValuesSection from "@/components/sections/ValuesSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import CadreSection from "@/components/sections/CadreSection";
import EnemiesSection from "@/components/sections/EnemiesSection";
import PartyPeopleSection from "@/components/sections/PartyPeopleSection";
import UnitySection from "@/components/sections/UnitySection";
import ConclusionSection from "@/components/sections/ConclusionSection";
import MindMapSection from "@/components/sections/MindMapSection";
import NavBar from "@/components/NavBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <OriginSection />
      <ValuesSection />
      <ComparisonSection />
      <PrinciplesSection />
      <UnitySection />
      <CadreSection />
      <EnemiesSection />
      <PartyPeopleSection />
      <MindMapSection />
      <ConclusionSection />
    </div>
  );
};

export default Index;
