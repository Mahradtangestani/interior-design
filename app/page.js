import AboutComponent from "../components/AboutComponent";
import CatalogSwiperSection from "../components/CatalogSwiper";
import CatalogueSetction from "../components/CatalogueSection";
import CompanySection from "../components/CompanySection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <CompanySection/>
      <AboutComponent/>
      <CatalogueSetction/>
      <CatalogSwiperSection/>
      <ContactSection/>
    </>
  );
}
