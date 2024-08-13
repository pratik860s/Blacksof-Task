import Streetlight from "../../assets/power.png";
export default function Features() {
  return (
    <div className="max-w-full flex justify-center">
      <div className=" w-1/2 flex justify-center flex-col p-16">
        {/* <div className="max-w-full  flex justify-center"> */}
          <h1 className="text-3xl font-[400] w-fit leading-loose text-center">
            The platform assists city managers on multiple fronts
          </h1>
        {/* </div> */}
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="w-2/3 p-10 border-r-2 border-r-gray border-b-2 border-b-gray">
              <div>
                <img src={Streetlight} alt="" />
              </div>
              <div className="w-[150px]">
                <h1>Saves on power consumption & related costs</h1>
              </div>
            </div>
            <div className="w-1/3 p-10 border-b-2 border-b-gray">
              <div>
                <img src={Streetlight} alt="" />
              </div>
              <div className="w-[75px]">
                <h1>Lowers downtimes</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-1/3 p-10 border-r-2 border-r-gray border-b-2 border-b-gray">
              <div>
                <img src={Streetlight} alt="" />
              </div>
              <div className="w-[100px]">
                <h1>Detects power thefts.</h1>
              </div>
            </div>
            <div className=" flex flex-col justify-center w-2/3 p-10 border-b-2 border-b-gray">
              <div>
                <img src={Streetlight} alt="" />
              </div>
              <div className="w-[150px]">
                <h1>
                  Ensures smart monitoring and control of the street light
                  infrastructure.
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-2/3 p-10 border-r-2 border-r-gray border-b-2 border-b-gray">
              <div>
                <img src={Streetlight} alt="" />
              </div>
              <div className="w-[250px] ">
                <h1>
                  Ensures real-time actionable analytics on power failures, lamp
                  malfunctions, voltage failures, etc.
                </h1>
              </div>
            </div>
            <div className="w-1/3 p-10 border-b-2 border-b-gray">
              <div>
                <img src={Streetlight} alt="" />
              </div>
              <div>
                <h1>Ensures security in the neighborhood</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
