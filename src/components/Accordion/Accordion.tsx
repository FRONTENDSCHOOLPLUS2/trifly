"use client";
import React, { useState, useMemo } from "react";
import AccordionContext from "./AccordionContext";
import "./accordion.scss";

interface AccordionProps {
  children: React.ReactNode;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const eventKey = 0;
    const [activeKey, setActiveKey] = useState(0);

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
        <div className="accordion" ref={ref} {...props} />
      </AccordionContext.Provider>
    );
  }
);

export default Accordion;
