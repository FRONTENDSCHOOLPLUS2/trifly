"use client";

import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";

interface Props {
  eventKey: number;
  children: React.ReactNode;
}

const AccordionBody = ({ eventKey, children }: Props) => {
  const { activeKey } = useContext(AccordionContext);

  return (
    <div className={`accordion-body ${activeKey === eventKey ? "act" : ""}`}>
      {children}
    </div>
  );
};

export default AccordionBody;
