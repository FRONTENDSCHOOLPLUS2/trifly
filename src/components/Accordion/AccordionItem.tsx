"use client";
import React from "react";
import AccordionContext from "./AccordionContext";

/**
 * * eventKey: 1부터 시작
 */
const AccordionItem = ({
  eventKey,
  children,
}: {
  eventKey: number;
  children: React.ReactNode;
}) => {
  const { activeKey, setActiveKey } = React.useContext(AccordionContext)!;

  return (
    <AccordionContext.Provider value={{ eventKey, activeKey, setActiveKey }}>
      <div className="accordion-item">{children}</div>
    </AccordionContext.Provider>
  );
};

export default AccordionItem;
