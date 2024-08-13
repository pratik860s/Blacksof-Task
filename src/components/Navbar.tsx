import Logo from "../assets/smart lights_logo.svg"
import Buttons from "./Buttons";
export default function Navbar() {
return (
  <div className="bg-black flex flex-col justify-center items-center px-16 py-7 border-b border-white border-opacity-10 max-md:px-5">
    <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
      <div className="flex gap-2.5 items-center self-stretch my-auto text-2xl tracking-widest text-center">
        <img
          loading="lazy"
          src={Logo}
          className="w-40"
        />
        <div className="self-stretch my-auto">smart Lights</div>
      </div>
      <div className="flex flex-wrap gap-10 items-center self-stretch my-auto text-white min-w-[240px] max-md:max-w-full">
        <div className="flex gap-10 items-center self-stretch my-auto text-lg text-center min-w-[240px]">
          <div className="self-stretch my-auto">Home</div>
          <div className="self-stretch my-auto">Products</div>
          <div className="gap-0.5 self-stretch my-auto font-[405]">
            Software Services
          </div>
        </div>
        <div className="flex flex-col justify-center items-center self-stretch px-6 py-4 my-auto text-xl whitespace-nowrap rounded-sm font-[425] min-h-[54px] w-[171px] max-md:px-5">
          <div className="gap-1.5 self-stretch"><Buttons/></div>
        </div>
      </div>
    </div>
  </div>
);
}