import ContactForm from "./components/ContactForm";
import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import ContactMap from "./components/ContactMap";
export default function ContactPage() {
    return (
        <div className="min-h-screen">

            <ContactHero />

            <section className="max-w-7xl mx-auto px-6 lg:px-10 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </section>

            <ContactMap />



        </div>
    );
}