"use client";

import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../../../public/lottie/map.json";

const Animation = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="lottie-box">
      {isLoading && <div className="skeleton-ani" />}
      <Lottie
        play
        loop={false}
        className={`lottie ${isLoading ? "" : "is-loaded"}`}
        animationData={lottieJson}
      />
    </div>
  );
};

export default Animation;
