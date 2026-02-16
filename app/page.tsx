import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import ServiceSection from "@/components/Service/ServiceSection";
import ChooseSection from "@/components/Choose/ChooseSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import LegalitasSection from "@/components/Legalitas/LegalitasSection";
import PartnerSection from "@/components/Partner/PartnerSection";
import CtaSection from "@/components/CTA/CtaSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ChooseSection />
      <ServiceSection />
      <PartnerSection />
      <ExperienceSection />
      <LegalitasSection />
      <CtaSection />
    </div>
  );
}
