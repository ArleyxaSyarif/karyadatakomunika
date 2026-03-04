import HeroPorto from "./components/HeroPorto";
import PemerintahPorto from "./components/PemerintahPorto";
import CorporatePorto from "./components/CorporatePorto";
import DokumentasiPorto from "./components/DokumentasiPorto";
import TransformPorto from "./components/TransformPorto";
import CaseStudyPorto from "./components/CaseStudyPorto";

export default function Portofolio() {
    return (
        <main className="flex-1 bg-blue-50 text-blue-950 font-display">
            <HeroPorto />
            <PemerintahPorto />
            <CorporatePorto />
            <DokumentasiPorto />
            <TransformPorto />
            <CaseStudyPorto />
        </main>
    );
}