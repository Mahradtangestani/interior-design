import AboutComponent from "../components/AboutComponent";
import CatalogueSetction from "../components/CatalogueSection";
import CompanySection from "../components/CompanySection";
import HeroSection from "../components/HeroSection";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <CompanySection/>
      <AboutComponent/>
      <CatalogueSetction/>
    </>
  );
}
