"use client";

import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";

interface Props {
  // eventKey: number;
  children: React.ReactNode;
}

const AccordionBody = ({ children }: Props) => {
  const { activeKey, eventKey } = useContext(AccordionContext);

  return (
    <div className={`accordion-body ${activeKey === eventKey ? "act" : ""}`}>
      <pre>{children}</pre>
    </div>
  );
};

export default AccordionBody;
