"use client";
import Accordion from "@/components/Accordion/Accordion";
import AccordionBody from "@/components/Accordion/AccordionBody";
import AccordionHeader from "@/components/Accordion/AccordionHeader";
import AccordionItem from "@/components/Accordion/AccordionItem";
import Submit from "@/components/Submit/Submit";
import { ChangeEvent, Dispatch, FormEvent, useRef, useState } from "react";

export interface SignupStepProp {
  setStep: Dispatch<React.SetStateAction<number>>;
}

const Agree = ({ setStep }: SignupStepProp) => {
  const [isError, setIsError] = useState(false);
  const allChk = useRef<HTMLInputElement>(null);
  const termChk = useRef<HTMLInputElement>(null);
  const personalChk = useRef<HTMLInputElement>(null);

  const handleChk = (e: ChangeEvent<HTMLInputElement>) => {
    let chk1 = termChk.current;
    let chk2 = personalChk.current;

    if (e.target.id === "allChk") {
      if (e.target.checked) {
        chk1!.checked = true;
        chk2!.checked = true;
      } else {
        chk1!.checked = false;
        chk2!.checked = false;
      }
    } else {
      if (chk1!.checked && chk2!.checked) allChk.current!.checked = true;
      else allChk.current!.checked = false;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let chk1 = termChk.current!.checked;
    let chk2 = personalChk.current!.checked;

    if (chk1 && chk2) {
      setIsError(false);
      setStep(2);
    } else {
      setIsError(true);
      return false;
    }
  };

  return (
    <section>
      <h3>
        약관동의
        <div className="chk-box">
          <input
            type="checkbox"
            id="allChk"
            ref={allChk}
            onChange={(e) => handleChk(e)}
          />
          <label htmlFor="allChk">모두 동의</label>
        </div>
      </h3>

      <form onSubmit={(e) => handleSubmit(e)}>
        <Accordion>
          <AccordionItem eventKey={1}>
            <AccordionHeader>
              <div className="chk-box">
                <input
                  type="checkbox"
                  id="termChk"
                  name="termChk"
                  onChange={(e) => handleChk(e)}
                  ref={termChk}
                />
                <label htmlFor="termChk">
                  이용 약관 <span>필수</span>
                </label>
              </div>
            </AccordionHeader>
            <AccordionBody>
              본 약관은 주식회사 트리플라이(이하 “회사”라 한다)가 운영하는
              사이버몰과 트리플라이서 제공하는 서비스(이하 "서비스"라 한다)를
              통합 운영하고 제공함에 있어 이용자(이하 “이용자”)와의 이용조건 및
              권리 의무와 절차 및 책임사항을 규정함을 목적으로 합니다.
            </AccordionBody>
          </AccordionItem>

          <AccordionItem eventKey={2}>
            <AccordionHeader>
              <div className="chk-box">
                <input
                  type="checkbox"
                  id="personalChk"
                  name="personalChk"
                  onChange={(e) => handleChk(e)}
                  ref={personalChk}
                />
                <label htmlFor="personalChk">개인정보 수집 및 이용</label>
              </div>
            </AccordionHeader>
            <AccordionBody>ddd</AccordionBody>
          </AccordionItem>
        </Accordion>

        <div className="error-box">
          <span className="errorMsg">{isError && "약관에 동의해주세요."}</span>
        </div>

        <div className="btn-box">
          <Submit>다음 단계</Submit>
        </div>
      </form>
    </section>
  );
};

export default Agree;
