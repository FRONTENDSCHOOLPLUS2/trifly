"use client";
import React, { useState, useMemo } from "react";
import AccordionContext from "./AccordionContext";
import "./accordion.scss";

interface AccordionProps {
  type?: string;
  children: React.ReactNode;
}

/**
 * * 타입 "small" : 폰트 사이즈 1.4rem의 기본 화살표 적용
 * * Accordion 내부의 AccordionItem은 하나만 활성화가 가능함
 */
const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ type, children }, ref) => {
    const eventKey = 1;
    const [activeKey, setActiveKey] = useState(1);

    const contextValue = useMemo(
      () => ({
        eventKey,
        activeKey,
        setActiveKey,
      }),
      [activeKey]
    );

    return (
      <AccordionContext.Provider value={contextValue}>
        <div
          className={`accordion ${type ? type : ""}`}
          ref={ref}
          children={children}
        />
      </AccordionContext.Provider>
    );
  }
);

export default Accordion;
