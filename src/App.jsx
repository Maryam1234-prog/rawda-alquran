import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import Navbar from "./assets/components/Navbar/Navbar";
import HeroSection from "./assets/components/HeroSection/HeroSection";
import AboutUs from "./assets/components/AboutUs/AboutUs";
import Services from "./assets/components/Services/Services";
// import Testimonials from "./assets/components/Testimonials/Testimonials";
import Gallery from "./assets/components/Gallery/Gallery";
import OurFeatures from "./assets/components/OurFeatures/OurFeatures";
import Footer from "./assets/components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      {/* <Testimonials /> */}
      <Gallery />
      <OurFeatures />
      <Footer />
    </>
  );
}
