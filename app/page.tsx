import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import ServiceSection from "@/components/Service/ServiceSection";
import ChooseSection from "@/components/Choose/ChooseSection";
import PartnerSection from "@/components/Partner/PartnerSection";
import CtaSection from "@/components/Cta/CtaSection";
import TaglineSection from "@/components/Tagline/TaglineSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TaglineSection />

      <AboutSection />
      <ServiceSection />

      <ChooseSection />
      <PartnerSection />

      <CtaSection />
    </div>
  );
}
