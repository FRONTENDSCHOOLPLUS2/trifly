import Lottie from "react-lottie-player";
import loadingLottie from "../../../public/lottie/loading.json";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Lottie
        play
        style={{ width: 150, height: 150 }}
        animationData={loadingLottie}
      />
    </div>
  );
};

export default LoadingSpinner;
