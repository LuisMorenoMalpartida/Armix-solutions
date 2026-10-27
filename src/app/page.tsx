import { EnhancedNavbar } from "@/components/shared/EnhancedNavbar";
import { EnhancedHero } from "@/components/hero/EnhancedHero";
import { StatsSection } from "@/components/sections/StatsSection";
import { MissionVision } from "@/components/sections/MissionVision";
import { AboutUs } from "@/components/sections/AboutUs";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { EnhancedCta } from "@/components/sections/EnhancedCta";
import { EnhancedFooter } from "@/components/shared/EnhancedFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <EnhancedNavbar />
      <EnhancedHero />
      <StatsSection />
      <MissionVision />
      <AboutUs />
      <ServicesGrid />
      <WhyChoose />
      <ProcessSection />
      <EnhancedCta />
      <EnhancedFooter />
    </main>
  );
}
