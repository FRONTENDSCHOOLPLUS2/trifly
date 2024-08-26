"use client";

import dynamic from "next/dynamic";
import React from "react";
import loadingLottie from "../../../public/lottie/loading.json";

const Lottie = dynamic(() => import("react-lottie-player"), {
  ssr: false,
});

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        loop
        play
        animationData={loadingLottie}
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
};

export default Loading;
