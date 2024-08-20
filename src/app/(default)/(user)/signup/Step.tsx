"use client";

import Progress from "@/components/Progress/Progress";
import { useState } from "react";
import Agree from "./Agree";
import Complete from "./Complete";
import Join from "./Join";

const Step = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const textArr = ["약관 동의", "정보 입력", "가입 완료"];

  return (
    <>
      <Progress textArr={textArr} status={step} />
      <h2 className="title">회원가입</h2>

      {step === 1 && <Agree setStep={setStep} />}
      {step === 2 && <Join setStep={setStep} setName={setName} />}
      {step === 3 && <Complete name={name} />}
    </>
  );
};

export default Step;
