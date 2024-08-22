"use client";

import Lottie from "react-lottie-player";
import lottieJson from "./../../../../public/lottie/map.json";

const Animation = () => {
  return (
    <Lottie
      className="lottie-box"
      play
      loop={false}
      animationData={lottieJson}
    />
  );
};

export default Animation;
