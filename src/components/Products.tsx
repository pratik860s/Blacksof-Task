import StreetLight from "../assets/street-light.png"
import Icon from "../assets/icon_png.png"


export default function Products() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex overflow-hidden flex-col w-full max-md:max-w-full">
        <div className="flex relative flex-col justify-center items-center px-20 py-36 w-full min-h-[1333px] max-md:px-5 max-md:py-24 max-md:max-w-full">
          <div className="flex relative flex-col mb-0 max-w-full w-[1247px] max-md:mb-2.5">
            <div className="flex flex-col max-w-full w-[848px]">
              <div className="flex flex-col w-full">
                <div className="flex flex-col justify-center items-end px-5 py-4 text-2xl tracking-wide text-sky-900 whitespace-nowrap font-[415] w-[88px]">
                  <div>Products</div>
                </div>
                <div className="mt-5 text-5xl tracking-normal text-black font-[355] leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
                  <span className="font-[415]">Cutting-edge hardware</span>,{" "}
                  <span className="">
                    offerings helping cities optimize resources and achieve
                    smart development goals
                  </span>
                </div>
              </div>
            </div>
            <div className="flex relative gap-7 items-center mt-24 mr-8 text-base tracking-normal font-[405] text-neutral-600 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              <div className="gap-2.5 self-stretch p-2.5 my-auto text-sky-900 rounded-sm font-[410] min-w-[240px] gradient-border ">
                Centralized Control & Monitoring System
              </div>
              <div className="gap-2.5 self-stretch p-2.5 my-auto rounded-sm border-2">
                NEMA-Mounted VOLC 1160
              </div>
              <div className="gap-2.5 self-stretch p-2.5 my-auto rounded-sm min-w-[240px] border-2">
                Retrofit Street Light Controller VOLC 2160
              </div>
              <div className="gap-2.5 self-stretch p-2.5 my-auto rounded-sm min-w-[240px] border-2">
                Retrofit Street Light Controller VOLC 2180
              </div>
              <div className="absolute -bottom-16 gap-2.5 self-start p-2.5 rounded-sm min-w-[240px] border-2">
                Retrofit Street Light Controller VOLC 4180
              </div>
            </div>
            <div className="overflow-hidden mt-24 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet={StreetLight}
                    className="object-contain grow w-full aspect-[1.34] max-md:max-w-full"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-32 w-full max-md:mt-10">
                    <div className="flex gap-2 items-start self-start text-sm leading-tight whitespace-nowrap font-[410] text-zinc-500">
                      <div>Products</div>
                      <div>1/5</div>
                    </div>
                    <div className="flex flex-col w-full max-w-[336px]">
                      <div className="flex flex-col w-full text-black">
                        <div className="text-3xl tracking-wide leading-10 font-[415]">
                          Centralized Control & Monitoring System
                        </div>
                        <div className="mt-2.5 text-base tracking-normal leading-6">
                          Designed indigenously for street lighting projects,
                          the CCMS offers a complete feeder panel for a group of
                          30-50 street lights.
                        </div>
                      </div>
                      <div className="flex gap-2.5 justify-center items-center self-start mt-5 text-xl leading-tight text-blue-600 font-[405]">
                        <div className="self-stretch my-auto">Know More</div>
                        <img
                          loading="lazy"
                          src={Icon}
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[34px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
