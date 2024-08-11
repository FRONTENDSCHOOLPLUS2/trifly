"use client";

import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";

const AccordionHeader = React.forwardRef<
  HTMLButtonElement,
  { eventKey: number; children: React.ReactNode }
>(({ eventKey, children, ...props }, ref) => {
  const { activeKey, setActiveKey } = useContext(AccordionContext);

  const handleClick = () => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      {...props}
      aria-expanded={`${activeKey === eventKey ? "true" : "false"}`}
      className="accordion-header"
    >
      {children}
    </button>
  );
});

export default AccordionHeader;
