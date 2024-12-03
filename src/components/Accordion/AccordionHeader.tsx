"use client";

import React, { MouseEvent, useContext } from "react";
import AccordionContext from "./AccordionContext";

const AccordionHeader = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const { eventKey, activeKey, setActiveKey } = useContext(AccordionContext);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.tagName === "INPUT" || target.tagName === "LABEL") return false;
    setActiveKey(activeKey === eventKey ? 0 : eventKey);
    return null;
  };

  return (
    <button
      type="button"
      onClick={(e) => handleClick(e)}
      aria-controls={`아코디언${eventKey}`}
      aria-expanded={activeKey === eventKey}
      className="accordion-header"
      {...props}
    >
      {children}
    </button>
  );
};

export default AccordionHeader;
