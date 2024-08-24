"use client";

import Lottie from "react-lottie-player";
import lottieJson from "../../../../public/lottie/map.json";

const Animation = () => {
  return (
    <Lottie
      play
      className="lottie"
      // loop={false}
      animationData={lottieJson}
    />
  );
};

export default Animation;
