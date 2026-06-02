import { HeroSection } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust";
import { AboutSection } from "@/components/sections/about";
import { ArchitectureSection } from "@/components/sections/architecture";
import { CommandCenterSection } from "@/components/sections/command-center";
import { FallDetectionSection } from "@/components/sections/fall-detection";
import { EnvironmentalSection } from "@/components/sections/environmental";
import { ObstacleDetectionSection } from "@/components/sections/obstacle-detection";
import { GpsCommandSection } from "@/components/sections/gps-command";
import { IncidentResponseSection } from "@/components/sections/incident-response";
import { AiIntelligenceSection } from "@/components/sections/ai-intelligence";
import { DigitalTwinSection } from "@/components/sections/digital-twin";
import { HardwareShowcaseSection } from "@/components/sections/hardware-showcase";
import { RealTimeIntegrationSection } from "@/components/sections/real-time-integration";
import { IndustriesSection } from "@/components/sections/industries";
import { AnalyticsSection } from "@/components/sections/analytics";
import { FeaturesSection } from "@/components/sections/features";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full overflow-hidden">
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ArchitectureSection />
      <CommandCenterSection />
      <FallDetectionSection />
      <EnvironmentalSection />
      <ObstacleDetectionSection />
      <GpsCommandSection />
      <IncidentResponseSection />
      <AiIntelligenceSection />
      <DigitalTwinSection />
      <HardwareShowcaseSection />
      <RealTimeIntegrationSection />
      <IndustriesSection />
      <AnalyticsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
