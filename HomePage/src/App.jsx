import { useState } from "react";
import "./App.css";
import NavBar from "./sections/NavBar";
import HeroSection from "./sections/HeroSection";
import GallarySection from "./sections/GallarySection";
import TestomonialSection from "./sections/TestomonialSection";
import ReviewsSection from "./sections/ReviewsSection";
import PriceSection from "./sections/PriceSection";
import Footer from "./sections/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HeroSection />
      <GallarySection />
      <TestomonialSection />
      <ReviewsSection />
      <PriceSection />
      <Footer />
    </>
  );
}

export default App;
