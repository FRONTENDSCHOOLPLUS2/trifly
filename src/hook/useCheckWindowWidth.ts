import { useEffect, useState } from "react";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

const useCheckWindowWidth = (size: number) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions >= size;
};

export default useCheckWindowWidth;
