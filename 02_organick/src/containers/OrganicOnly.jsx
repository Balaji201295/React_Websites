import React, { useRef, useState } from "react";
import styles from "../style";
import { OrganicVideo } from "../assets";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { SectionHeading } from "../components";
const OrganicOnly = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();
  const handleVideo = () => {
    setPlayVideo((prev) => !prev);
    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };
  return (
    <section className="relative">
      <div
        className={`block sm:hidden ${styles.boxWidth} ${styles.flexCenter} text-center my-8`}
      >
        <SectionHeading
          title="Everyday Fresh & Clean"
          subtitle="Organic Only"
        />
      </div>
      {!playVideo && (
        <div className="sm:block hidden absolute top-8 sm:top-16 md:top-36 left-1/2 text-center -translate-y-1/2 -translate-x-1/2">
          <SectionHeading
            title="Everyday Fresh & Clean"
            subtitle="Organic Only"
            color="text-white"
          />
        </div>
      )}
      <video
        src={OrganicVideo}
        ref={videoRef}
        typeof="video/mp4"
        muted
        loop
        controls={false}
      />
      <div
        className={`absolute bottom-6 xs:bottom-16 sm:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  ${styles.flexCenter} bg-green w-16 h-16 rounded-full shadow-md cursor-pointer`}
        onClick={handleVideo}
      >
        {playVideo ? (
          <BsPauseFill className="text-white" fontSize={24} />
        ) : (
          <BsFillPlayFill className="text-white" fontSize={24} />
        )}
      </div>
    </section>
  );
};
export default OrganicOnly;
