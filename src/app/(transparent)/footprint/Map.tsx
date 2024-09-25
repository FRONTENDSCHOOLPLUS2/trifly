"use client";

import Lottie from "react-lottie-player";
import lottieJson from "../../../../public/lottie/map.json";

const Map = () => {
  return (
    <Lottie play loop={false} className="lottie" animationData={lottieJson} />
  );
};

export default Map;
