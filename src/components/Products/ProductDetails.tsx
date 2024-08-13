import React from "react";
import Icon from "../../assets/icon_png.png";
import Arrow from "../../assets/arrow.png";

const ProductDetails: React.FC = () => {
  return (
    <div className="w-96 bg-product">
      <div className="flex flex-col ml-5 max-md:ml-0 ">
        <div className="flex flex-col mt-28 w-full max-md:mt-10 ">
          <div className="flex flex-col self-end max-w-full">
            <div className="flex gap-2 items-start self-start text-sm leading-tight whitespace-nowrap font-[410] text-zinc-500">
              <div>Products</div>
              <div>1/5</div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full text-black">
                <h3 className="text-3xl tracking-wide leading-10 font-[415] ">
                  Centralized Control & Monitoring System
                </h3>
                <p className="mt-2.5 text-base tracking-normal leading-6">
                  Designed indigenously for street lighting projects, the CCMS
                  offers a complete feeder panel for a group of 30-50 street
                  lights.
                </p>
              </div>
              <a
                href="#"
                className="flex gap-2.5 justify-center items-center self-start mt-5 text-xl leading-tight text-blue-600 font-[405]"
              >
                <span className="self-stretch my-auto">Know More</span>
                <img
                  loading="lazy"
                  src={Icon}
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[34px]"
                />
              </a>
            </div>
          </div>
          {/* <img loading="lazy" src={Arrow} alt="Product diagram" className="object-contain mt-20 w-20 aspect-[2.15] max-md:mt-10" /> */}
        </div>
      </div>
      <img
        loading="lazy"
        src={Arrow}
        alt="Product diagram"
        className="object-contain absolute left-55 top-97 w-20 aspect-[2.15] max-md:mt-10"
      />
    </div>
  );
};

export default ProductDetails;
