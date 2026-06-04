import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import About from "../components/About/About";
import Collections from "../components/Collections/Collections";
import Gallery from "../components/Gallery/Gallery";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Reach from "../components/Reach/Reach";
import InquiryForm from "../components/InquiryForm/InquiryForm";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import MapPlaceholder from "../components/MapPlaceholder/MapPlaceholder";
import content from "../data/content";

function Home() {
  return (
    <div className="relative overflow-hidden bg-white text-smoke">
      <Navbar links={content.navLinks} companyName={content.company.name} />
      <main id="home" className="bg-cream">
        <Hero content={content.hero} />
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 md:px-8">
          <Stats items={content.stats} />
          <About content={content.about} />
          <Collections data={content.collections} />
          <Gallery images={content.gallery} />
          <WhyChooseUs features={content.features} />
          <Reach cities={content.cities} />
          <div className="mt-16 grid gap-12 xl:grid-cols-[1fr_420px]">
            <InquiryForm inquiry={content.inquiry} />
            <aside className="rounded-[32px] border border-burgundy/10 bg-white p-8 shadow-soft xl:sticky xl:top-24">
              <MapPlaceholder />
            </aside>
          </div>
          <Contact company={content.company} />
        </section>
      </main>
      <Footer company={content.company} links={content.footer.quickLinks} />
      <WhatsAppButton url={content.company.whatsapp} />
    </div>
  );
}

export default Home;
