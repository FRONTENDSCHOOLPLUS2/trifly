"use client";

import { modalState } from "@/atoms/atoms";
import Accordion from "@/components/Accordion/Accordion";
import AccordionBody from "@/components/Accordion/AccordionBody";
import AccordionHeader from "@/components/Accordion/AccordionHeader";
import AccordionItem from "@/components/Accordion/AccordionItem";
import Badge from "@/components/Badge/Badge";
import Submit from "@/components/Submit/Submit";
import useAllChecked from "@/hook/useAllChecked";
import { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { useSetRecoilState } from "recoil";

interface SignupStepProp {
  setStep: Dispatch<React.SetStateAction<number>>;
}

const Agree = ({ setStep }: SignupStepProp) => {
  const accordionCont = [
    {
      name: "chk0",
      title: "이용 약관",
      content: `본 약관은 주식회사 트리플라이(이하 “회사”라 한다)가 운영하는
            사이버몰과 트리플라이서 제공하는 서비스(이하 "서비스"라 한다)를 통합
            운영하고 제공함에 있어 이용자(이하 “이용자”)와의 이용조건 및 권리
            의무와 절차 및 책임사항을 규정함을 목적으로 합니다.`,
      checked: false,
    },
    {
      name: "chk1",
      title: "개인정보 수집 및 이용 ",
      content: `본 약관은 주식회사 트리플라이(이하 “회사”라 한다)가 운영하는
            사이버몰과 트리플라이서 제공하는 서비스(이하 "서비스"라 한다)를 통합
            운영하고 제공함에 있어 이용자(이하 “이용자”)와의 이용조건 및 권리
            의무와 절차 및 책임사항을 규정함을 목적으로 합니다.`,
      checked: false,
    },
  ];
  const [checkbox, setCheckbox] = useState(accordionCont);
  const setModal = useSetRecoilState(modalState);
  const { setCheck } = useAllChecked(checkbox, setCheckbox);

  const handleChk = (e: ChangeEvent<HTMLInputElement>) => setCheck(e);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isAllChk = checkbox.filter((item) => item.checked !== true).length;
    if (!isAllChk) setStep(2);
    else
      setModal({
        isOpen: true,
        title: "알림",
        content: "약관에 동의해주세요.",
        buttonNum: 1,
        handleConfirm: () => {},
        handleCancel: () => {},
      });
  };

  const accordions = checkbox.map((item, idx) => (
    <AccordionItem eventKey={idx + 1} key={item.title}>
      <AccordionHeader>
        <div className="chk-box">
          <input
            type="checkbox"
            id={`chk${idx}`}
            name={`chk${idx}`}
            onChange={(e) => handleChk(e)}
            checked={item.checked}
          />
          <label htmlFor={`chk${idx}`}>
            {item.title} <Badge type="gray">필수</Badge>
          </label>
        </div>
      </AccordionHeader>
      <AccordionBody>{item.content}</AccordionBody>
    </AccordionItem>
  ));

  return (
    <section className="agree">
      <div className="title-box">
        <h3>약관동의</h3>
        <div className="chk-box">
          <input
            type="checkbox"
            id="allChk"
            name="allChk"
            onChange={(e) => handleChk(e)}
            checked={
              checkbox.filter((item) => item.checked !== true).length < 1
            }
          />
          <label htmlFor="allChk">모두 동의</label>
        </div>
      </div>

      <form onSubmit={(e) => handleSubmit(e)} action="post">
        <Accordion>{accordions}</Accordion>

        <div className="btn-box">
          <Submit size="full">다음</Submit>
        </div>
      </form>
    </section>
  );
};

export default Agree;
