import AreaSection from "@/components/Area/AreaSection";
import KotaArea from "./components/KotaArea";
import HeroArea from "./components/HeroArea";
import CtaSection from "@/components/Cta/CtaSection";

export default function AreaPage() {
    return (
        <div>
            <HeroArea />
            <AreaSection />
            <KotaArea />
            <CtaSection />
        </div>
    )
}