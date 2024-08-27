"use client";

import { useEffect, useState } from "react";

import lottieJson from "../../public/lottie/loading.json";
import dynamic from "next/dynamic";
import "./loading.scss";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: true });

function Loading({ type = "default" }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {!isMounted ? (
        <p>로딩</p>
      ) : (
        <div className={`loading ${type}`}>
          <Lottie
            loop
            play
            animationData={lottieJson}
            style={{ width: 200, height: 200 }}
          />
        </div>
      )}
    </>
  );
}

export default Loading;
