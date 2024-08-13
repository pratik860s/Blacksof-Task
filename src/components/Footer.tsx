import Logo from "../assets/smart lights_logo.svg";
export default function Footer() {
  return (
    <div className="bg-img bg-cover bg-no-repeat bg-center hgt75">
      <div className="hgt-inherit ">
        <div className="flex items-center justify-evenly w-full absolute z-10 pt-28 ">
          <div>
            <img src={Logo} alt="smart-lights-logo" className="w-48" />
          </div>
          <ul className=" w-2/5 flex items-center justify-around">
            <li className="text-white font-inter font-normal text-sm">
              Product
            </li>
            <li className="text-white font-inter font-normal text-sm">
              Software Services
            </li>
            <li className="text-white font-inter font-normal text-sm">
              Follow Us
            </li>
          </ul>
        </div>
        <div className=" absolute z-10 h-80 w-full flex items-end pl-56">
          <div className=" border-t-2 border-white flex flex-wrap gap-8 items-start text-xl tracking-tight text-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <div className="text-sm mt-6">Privacy Policy</div>
            <div className="text-sm mt-6">|</div>
            <div className="text-sm mt-6">Terms & Conditions</div>
            <div className="text-sm mt-6">|</div>
            <div className="text-sm mt-6">Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
