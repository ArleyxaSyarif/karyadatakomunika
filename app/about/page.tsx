import ProfilAbout from "./components/ProfilAbout";
import VisiMisiAbout from "./components/VisiMisiAbout";
import NilaiAbout from "./components/NilaiAbout";
import StrukturAbout from "./components/StrukturAbout";
import DireksiAbout from "./components/DireksiAbout";
import LegalitasAbout from "./components/LegalitasAbout";

export default function About() {
  return (
    <main className="pt-16">
      <ProfilAbout />
      <VisiMisiAbout />
      <NilaiAbout />
      <StrukturAbout />
      <DireksiAbout />
      <LegalitasAbout />
    </main>
  );
}