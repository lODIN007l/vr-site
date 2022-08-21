import React from "react";
import Headset1 from "../assets/img/headset-1.png";
import Headset2 from "../assets/img/headset-2.png";
import Headset3 from "../assets/img/headset-3.png";
import Headset4 from "../assets/img/headset-4.png";

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        {/* titulo */}
        <h2 className="text-3xl font-bold mb-6 ">Mixed Reality Headsets</h2>
        {/* grid */}
        <div>
          {/* items */}
          <div className="relative">
            <img src={Headset1} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] py-6">
              <h4 className="font-semibold text-xl mb-2">Metaverse</h4>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                eius nesciunt quo voluptate nemo a fugiat autem. Sed ducimus
                placeat, ratione, odio suscipit debitis exercitationem eos odit
                impedit numquam laudantium?
              </p>
            </div>
          </div>
          {/* item2 */}
          <div className="relative">
            <img src={Headset2} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] py-6">
              <h4 className="font-semibold text-xl mb-2">AIoT</h4>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                eius nesciunt quo voluptate nemo a fugiat autem. Sed ducimus
                placeat, ratione, odio suscipit debitis exercitationem eos odit
                impedit numquam laudantium?
              </p>
            </div>
          </div>
          {/* items */}
          <div className="relative">
            <img src={Headset3} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] py-6">
              <h4 className="font-semibold text-xl mb-2">Metaverse</h4>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                eius nesciunt quo voluptate nemo a fugiat autem. Sed ducimus
                placeat, ratione, odio suscipit debitis exercitationem eos odit
                impedit numquam laudantium?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
