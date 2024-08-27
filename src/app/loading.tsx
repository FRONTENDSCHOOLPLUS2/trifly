"use client";

import { useEffect, useState } from "react";

import lottieJson from "../../public/lottie/loading.json";
import dynamic from "next/dynamic";
import "./loading.scss";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: true });

function Loading() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) {
    console.log("마운트 안됐다!");
    return null; // 서버에서는 아무것도 렌더링하지 않음
  }

  console.log("마운트 됐지롱~");

  return (
    <>
      {!isMounted ? (
        <p>로딩</p>
      ) : (
        <div className="loading">
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
