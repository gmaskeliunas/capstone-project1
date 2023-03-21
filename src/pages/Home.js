import HeroSection from "../components/HeroSection/HeroSection";
import Highlights from "../components/Highlights/Highlights";
import "../components/Components.css";
import Testimonials from "../components/Testimonials/Testimonials";
import About from "../components/About/About";


export default function Home() {
  return(
    <>
      <HeroSection/>
      <Highlights/>
      <Testimonials/>
      <About/>
    </>
  );
}