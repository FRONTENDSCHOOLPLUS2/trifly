"use client";
import Accordion from "@/components/Accordion/Accordion";
import AccordionItem from "@/components/Accordion/AccordionItem";
import AccordionHeader from "@/components/Accordion/AccordionHeader";
import Badge from "@/components/Badge/Badge";
import AccordionBody from "@/components/Accordion/AccordionBody";
import Submit from "@/components/Submit/Submit";
import { useState } from "react";

const AgreeForm = () => {
  const [isError, setIsError] = useState(false);
  const handleSubmit = (e) => {};

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Accordion>
        <AccordionItem eventKey={1}>
          <AccordionHeader>
            <div className="chk-box">
              <input
                type="checkbox"
                id="termChk"
                name="termChk"
                // onChange={(e) => handleChk(e)}
                // ref={termChk}
              />
              <label htmlFor="termChk">
                이용 약관 <Badge type="gray">필수</Badge>
              </label>
            </div>
          </AccordionHeader>
          <AccordionBody>
            본 약관은 주식회사 트리플라이(이하 “회사”라 한다)가 운영하는
            사이버몰과 트리플라이서 제공하는 서비스(이하 "서비스"라 한다)를 통합
            운영하고 제공함에 있어 이용자(이하 “이용자”)와의 이용조건 및 권리
            의무와 절차 및 책임사항을 규정함을 목적으로 합니다.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey={2}>
          <AccordionHeader>
            <div className="chk-box">
              <input
                type="checkbox"
                id="personalChk"
                name="personalChk"
                // onChange={(e) => handleChk(e)}
                // ref={personalChk}
              />
              <label htmlFor="personalChk">
                개인정보 수집 및 이용 <Badge type="gray">필수</Badge>
              </label>
            </div>
          </AccordionHeader>
          <AccordionBody>ddd</AccordionBody>
        </AccordionItem>
      </Accordion>

      <div className="error-box">
        <span className="errorMsg">{isError && "약관에 동의해주세요."}</span>
      </div>

      <div className="btn-box">
        <Submit size="full">다음</Submit>
      </div>
    </form>
  );
};

export default AgreeForm;
