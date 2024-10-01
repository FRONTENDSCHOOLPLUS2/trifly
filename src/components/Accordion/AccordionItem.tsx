"use client";

import React, { useMemo, useState } from "react";
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
  const [activeKey, setActiveKey] = useState(1);
  const contextValue = useMemo(
    () => ({
      eventKey,
      activeKey,
      setActiveKey,
    }),
    [activeKey],
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <div
        className={`accordion-item ${activeKey === eventKey ? "active" : ""}`}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default AccordionItem;
