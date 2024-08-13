import React from "react";
import ProductTab from "./ProductTab";
import ProductDetails from "./ProductDetails";
import Background from "../../assets/background.png";
import StreetLight from "../../assets/street-light.png";

interface ProductsData {
  name: string;
  isActive: boolean;
}

const productsData: ProductsData[] = [
  { name: "Centralized Control & Monitoring System", isActive: true },
  { name: "NEMA-Mounted VOLC 1160", isActive: false },
  { name: "Retrofit Street Light Controller VOLC 2160", isActive: false },
  { name: "Retrofit Street Light Controller VOLC 2180", isActive: false },
  { name: "Retrofit Street Light Controller VOLC 4180", isActive: false },
];

const ProductsSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col">
      <div className="flex relative flex-col justify-center items-center px-20 py-36 w-full min-h-[1333px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src={Background}
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mb-0 w-93 w-[1247px] max-md:mb-2.5">
          <div className="flex flex-col max-w-full ">
            <div className="flex flex-col w-full">
              <div className="flex flex-col justify-center items-end px-5 py-4 text-2xl tracking-wide text-sky-900 whitespace-nowrap font-[415] w-[88px]">
                <h2>Products</h2>
              </div>
              <div className="flex w-[1109px] justify-center">
                <h1 className="mt-5 text-5xl tracking-wide text-black font-[355] leading-[72px] w-[848px]">
                  <span className="font-[415]">Cutting-edge hardware</span>,{" "}
                  <span className="">
                    offerings helping cities optimize resources and achieve
                    smart development goals
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <nav className="flex relative justify-center flex-wrap gap-7 items-center mt-24 mr-8 text-base tracking-normal font-[405] text-neutral-600 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            {productsData.map((product, index) => (
              <ProductTab
                key={index}
                name={product.name}
                isActive={product.isActive}
              />
            ))}
          </nav>
          <div className="overflow-hidden mt-24 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex justify-center max-md:flex-col">
              <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                <img loading="lazy" src={StreetLight} />
              </div>
              <ProductDetails />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
