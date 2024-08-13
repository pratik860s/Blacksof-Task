import { EcosystemTitle } from "./EcosystemTitle";
import Streetlight from "../../assets/street.svg";
import Antena from "../../assets/Antena.svg";
import Network from "../../assets/network.svg";
import Wifi from "../../assets/wifi.svg";
import Cloud from "../../assets/cloud.svg";

export function Ecosystem() {
  return (
    <main className="bg-bckgrd flex overflow-hidden flex-col justify-center items-center px-20 py-36 max-md:px-5 max-md:py-24">
      <section className="flex flex-col max-w-full w-[1247px]">
        <EcosystemTitle />
        <div className="mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col justify-between static">
            <div>
              <div className="w-72">
                <div className="flex gap-7">
                  <img src={Streetlight} alt="Street light" />
                  <img src={Streetlight} alt="Street light" />
                </div>
                <div>
                  <h1 className="font-semibold text-center mb-2 mt-2">
                    Street Light Controller
                  </h1>
                  <h1 className="text-center">
                    Activates/deactivates in response to motion/light sensing
                    and controls the brightness of the street lamp
                  </h1>
                </div>
              </div>
            </div>
            <div className="absolute border-t-2 border-dashed border-t-zinc-400 w-[287px] left-27 top-227"></div>
            <div>
              <div className="w-72">
                <div className="flex justify-center">
                  <img src={Antena} alt="Street light" className="w-[119px]" />
                </div>
                <div>
                  <h1 className="font-semibold text-center mb-2 mt-2">
                    Gateway
                  </h1>
                  <h1 className="text-center">
                    Employed for interfacing between a Controller and the
                    Lighting Management Software.
                  </h1>
                </div>
              </div>
            </div>
            <div className="absolute border-t-2 border-dashed border-t-zinc-400 w-[354px] left-54 top-227"></div>
            <div>
              <div className="w-72">
                <div className="flex justify-center">
                  <img src={Cloud} alt="Street light" className="w-[119px]" />
                </div>
                <div>
                  <h1 className="font-semibold text-center mb-2 mt-2">Users</h1>
                  <h1 className="text-center">
                    Data from the cloud is used to monitor and control street
                    lights by the System Managers.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute border-l-2 border-dashed border-l-zinc-400 h-[40px] left-1/2 top-300"></div>
          <div className="absolute border-t-2 border-dashed border-t-zinc-400 w-[380px] left-37 top-350"></div>
          <div className="absolute border-l-2 border-dashed border-l-zinc-400 h-[85px] left-37 top-350"></div>
          <div className="absolute border-l-2 border-dashed border-l-zinc-400 h-[85px] left-62 top-350"></div>

          <div className="mt-32 w-full flex justify-center gap-24">
            <div>
              <div className="w-72">
                <div className="flex justify-center">
                  <img src={Network} alt="Street light" className="w-[119px]" />
                </div>
                <div>
                  <h1 className="font-semibold text-center mb-2 mt-2">Users</h1>
                  <h1 className="text-center">
                    Data from the cloud is used to monitor and control street
                    lights by the System Managers.
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <div className="w-72">
                <div className="flex justify-center">
                  <img src={Wifi} alt="Street light" className="w-[119px]" />
                </div>
                <div>
                  <h1 className="font-semibold text-center mb-2 mt-2">Users</h1>
                  <h1 className="text-center">
                    Data from the cloud is used to monitor and control street
                    lights by the System Managers.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
