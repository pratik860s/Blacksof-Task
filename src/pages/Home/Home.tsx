import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";
import Products from "../../components/Products/Products";
import { Ecosystem } from "../../components/Ecosystem/Ecosystem";
import Features from "../../components/Features/Features";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Ecosystem />
      <Products />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
