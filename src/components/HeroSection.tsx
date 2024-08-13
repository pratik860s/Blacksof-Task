import HeroImage from "../assets/Hero_section.png";
import Buttons from "./Buttons";
export default function HeroSection() {
  return (
    // <div className="bg-black h-3/4">
    <div className="bg-black h-3/4">
      <div className="absolute z-10 flex justify-center flex-col items-center w-full mt-28">
        <div>
          <p className="text-white text-xl font-light font-inter mb-4 tracking-wider">
            Smart Lightning Solutions
          </p>
        </div>
        <div className="wdth">
          <p className="text-white text-4xl font-normal font-inter text-center leading-normal tracking-wider bg-customBg bg-cover bg-clip-text">
            Bringing A New Perspective To Street Lights And The Cities Of
            Tomorrow.
          </p>
        </div>
        <div className="mt-16">
          <Buttons />
        </div>
      </div>
      <div className="flex justify-center">
        <img src={HeroImage} alt="Earth Image" className="w-7xl" />
      </div>
    </div>
    // </div>
  );
}
