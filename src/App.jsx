import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar/Navbar";
import HeroSection from "./assets/components/HeroSection/HeroSection";
import AboutUs from "./assets/components/AboutUs/AboutUs";
import Services from "./assets/components/Services/Services";
import Gallery from "./assets/components/Gallery/Gallery";
import OurFeatures from "./assets/components/OurFeatures/OurFeatures";
import Footer from "./assets/components/Footer/Footer";
import Achievements from "./assets/components/Achievements/Achievements";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* الصفحة الرئيسية */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutUs />
              <Services />
              <Gallery />
              <OurFeatures />
              <Footer />
            </>
          }
        />

        {/* صفحة الإنجازات */}
        <Route
          path="/achievements"
          element={
            <>
              <Achievements />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
