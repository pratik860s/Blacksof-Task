import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";
import Products from "../../components/Products/Products";
import { Ecosystem } from "../../components/Ecosystem/Ecosystem";
import Features from "../../components/Features/Features";
import StreetLight from "../../components/StreetLight";
import Root from "../../components/Root/Root";
// import Ecosystem from "../../components/Products/Products";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Ecosystem />
      {/* <StreetLight/> */}
      <Products />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
