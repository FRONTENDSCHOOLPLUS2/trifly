"use client";

import React from "react";
import "./accordion.scss";

interface AccordionProps {
  type?: string;
  children: React.ReactNode;
}

/**
 * * 타입 "small" : 폰트 사이즈 1.4rem의 기본 화살표 적용
 * * Accordion 내부의 AccordionItem은 하나만 활성화가 가능함
 */
const Accordion = ({ type, children }: AccordionProps) => {
  return <div className={`accordion ${type || ""}`}>{children}</div>;
};

export default Accordion;
