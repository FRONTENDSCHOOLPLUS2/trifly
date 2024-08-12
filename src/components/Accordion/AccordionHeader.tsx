"use client";
import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";

const AccordionHeader = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode }
>(({ children, ...props }, ref) => {
  const { eventKey, activeKey, setActiveKey } = useContext(AccordionContext);

  const handleClick = () => setActiveKey(activeKey === eventKey ? 0 : eventKey);

  return (
    <button
      type="button"
      ref={ref}
      onClick={handleClick}
      {...props}
      aria-expanded={`${activeKey === eventKey ? "true" : "false"}`}
      className={`accordion-header ${activeKey === eventKey ? "act" : ""}`}
    >
      {children}
    </button>
  );
});

export default AccordionHeader;
