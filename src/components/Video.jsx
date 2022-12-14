import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";

import { BsPlayCircleFill } from "react-icons/bs";

const Video = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="bg-[#534686]/30 py-6 ">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
          <h3 className="text-2xl font-semibold mb-8 lg:mb-0">
            Awesome Experience with virtual reality world{" "}
          </h3>
          {/* modal */}
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="NOk_M1Ib5F0"
            onClose={() => setIsopen(false)}
          />
          <div
            onClick={() => setIsopen(!isOpen)}
            className="bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center"
          >
            <div className="cursor-pointer">
              <BsPlayCircleFill className="text-4xl text-white/80 hover:text-white hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
