"use client";

import Lottie from "react-lottie-player";
import lottieJson from "../../public/lottie/loading.json";
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <Lottie
        loop
        play
        animationData={lottieJson}
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
};

export default Loading;
