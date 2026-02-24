import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import ServiceSection from "@/components/Service/ServiceSection";
import ChooseSection from "@/components/Choose/ChooseSection";
import PartnerSection from "@/components/Partner/PartnerSection";
import CtaSection from "@/components/Cta/CtaSection";
import TaglineSection from "@/components/Tagline/TaglineSection";
import AreaSection from "@/components/Area/AreaSection";
import StatistikSection from "@/components/Statistik/StatistikSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PartnerSection />

      <TaglineSection />

      <AboutSection />

      <div className="bg-gray-50">
        <ServiceSection />
      </div>

      <AreaSection />

      <ChooseSection />

      <StatistikSection />

      <CtaSection />
    </div>
  );
}
