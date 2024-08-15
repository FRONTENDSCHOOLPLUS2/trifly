"use client";
import Accordion from "@/components/Accordion/Accordion";
import AccordionBody from "@/components/Accordion/AccordionBody";
import AccordionHeader from "@/components/Accordion/AccordionHeader";
import AccordionItem from "@/components/Accordion/AccordionItem";
import Badge from "@/components/Badge/Badge";
import Submit from "@/components/Submit/Submit";
import { ChangeEvent, FormEvent, useState } from "react";

const AgreeForm = () => {
  const [isError, setIsError] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {};
  const handleChk = (e: ChangeEvent) => {};

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Accordion>
        <AccordionItem eventKey={1}>
          <AccordionHeader>
            <div className="chk-box">
              <input
                type="checkbox"
                id="chk1"
                name="chk1"
                onChange={(e) => handleChk(e)}
                // ref={chk1}
              />
              <label htmlFor="chk1">
                요금 / 환불 규정 및 안내 <Badge type="gray">필수</Badge>
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
                id="chk2"
                name="chk2"
                onChange={(e) => handleChk(e)}
                // ref={chk2}
              />
              <label htmlFor="chk2">
                개인정보 수집 및 이용 동의 <Badge type="gray">필수</Badge>
              </label>
            </div>
          </AccordionHeader>
          <AccordionBody>내용</AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey={3}>
          <AccordionHeader>
            <div className="chk-box">
              <input
                type="checkbox"
                id="chk3"
                name="chk3"
                onChange={(e) => handleChk(e)}
                // ref={chk3}
              />
              <label htmlFor="chk3">
                개인정보 제3자 제공 동의 <Badge type="gray">필수</Badge>
              </label>
            </div>
          </AccordionHeader>
          <AccordionBody>내용</AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey={4}>
          <AccordionHeader>
            <div className="chk-box">
              <input
                type="checkbox"
                id="chk4"
                name="chk4"
                onChange={(e) => handleChk(e)}
                // ref={chk4}
              />
              <label htmlFor="chk4">
                고유식별정보 수집 및 처리 동의 <Badge type="gray">필수</Badge>
              </label>
            </div>
          </AccordionHeader>
          <AccordionBody>내용</AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey={5}>
          <AccordionHeader>
            <div className="chk-box">
              <input
                type="checkbox"
                id="chk5"
                name="chk5"
                onChange={(e) => handleChk(e)}
                // ref={chk5}
              />
              <label htmlFor="chk5">
                결제 및 발권동의 <Badge type="gray">필수</Badge>
              </label>
            </div>
          </AccordionHeader>
          <AccordionBody>내용</AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey={6}>
          <AccordionHeader>
            <div className="chk-box">
              <input
                type="checkbox"
                id="chk6"
                name="chk6"
                onChange={(e) => handleChk(e)}
                // ref={chk6}
              />
              <label htmlFor="chk6">
                발권수수료 <Badge type="gray">필수</Badge>
              </label>
            </div>
          </AccordionHeader>
          <AccordionBody>내용</AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey={7}>
          <AccordionHeader>
            <div className="chk-box">
              <input
                type="checkbox"
                id="chk7"
                name="chk7"
                onChange={(e) => handleChk(e)}
                // ref={chk7}
              />
              <label htmlFor="chk7">
                트리플라이 항공 일반규정 <Badge type="gray">필수</Badge>
              </label>
            </div>
          </AccordionHeader>
          <AccordionBody>내용</AccordionBody>
        </AccordionItem>

        <AccordionItem eventKey={8}>
          <AccordionHeader>
            <div className="chk-box">
              <input
                type="checkbox"
                id="chk8"
                name="chk8"
                onChange={(e) => handleChk(e)}
                // ref={chk8}
              />
              <label htmlFor="chk8">
                항공사 정보 동의 <Badge type="gray">필수</Badge>
              </label>
            </div>
          </AccordionHeader>
          <AccordionBody>내용</AccordionBody>
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
