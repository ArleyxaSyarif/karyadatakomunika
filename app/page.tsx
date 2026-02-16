import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import ServiceSection from "@/components/Service/ServiceSection";
import ChooseSection from "@/components/Choose/ChooseSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ChooseSection />
      <ServiceSection />
      <ExperienceSection />
    </div>
  );
}
