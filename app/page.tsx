import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import ServiceSection from "@/components/Service/ServiceSection";
import ChooseSection from "@/components/Choose/ChooseSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ChooseSection />
    </div>
  );
}
