"use client";

import Lottie from "react-lottie-player";
import lottieJson from "../../../../public/lottie/map.json";
import { useState } from "react";

const Animation = () => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="lottie-box">
      {isLoading && <div className="skeleton-ani"></div>}
      <Lottie
        play
        loop={false}
        className={`lottie ${isLoading ? "" : "is-loaded"}`}
        animationData={lottieJson}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default Animation;
