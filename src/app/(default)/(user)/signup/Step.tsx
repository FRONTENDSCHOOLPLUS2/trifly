"use client";
import Progress from "@/components/Progress/Progress";
import { useState } from "react";
import Agree from "./Agree";
import Join from "./Join";

const Step = () => {
  const [step, setStep] = useState(1);
  const textArr = ["약관 동의", "정보 입력", "가입 완료"];

  return (
    <>
      <Progress textArr={textArr} status={step} />
      <h2 className="title">회원가입</h2>

      {step === 1 && <Agree setStep={setStep} />}
      {step === 2 && <Join setStep={setStep} />}
    </>
  );
};

export default Step;
