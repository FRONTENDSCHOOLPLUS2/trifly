"use client";
import React, { useState, useMemo } from "react";
import AccordionContext from "./AccordionContext";
import "./accordion.scss";

const Accordion = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [activeKey, setActiveKey] = useState(0);

  const contextValue = useMemo(
    () => ({
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
});

export default Accordion;
