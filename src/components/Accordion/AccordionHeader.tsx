"use client";

import React, { MouseEvent, useContext } from "react";
import AccordionContext from "./AccordionContext";

const AccordionHeader = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode }
>(({ children, ...props }, ref) => {
  const { eventKey, activeKey, setActiveKey } = useContext(AccordionContext);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.tagName === "INPUT" || target.tagName === "LABEL") return false;
    setActiveKey(activeKey === eventKey ? 0 : eventKey);
  };

  return (
    <button
      type="button"
      ref={ref}
      onClick={(e) => handleClick(e)}
      {...props}
      aria-controls={`아코디언${eventKey}`}
      aria-expanded={`${activeKey === eventKey ? "true" : "false"}`}
      className={`accordion-header ${activeKey === eventKey ? "act" : ""}`}
    >
      {children}
    </button>
  );
});

export default AccordionHeader;
