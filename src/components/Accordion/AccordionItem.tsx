"use client";
import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";

const AccordionItem = ({
  eventKey,
  children,
}: {
  eventKey: number;
  children: React.ReactNode;
}) => {
  const { activeKey } = useContext(AccordionContext);

  return (
    <div className="accordion-item">
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, {
          eventKey,
          isActive: activeKey === eventKey,
        })
      )}
    </div>
  );
};

export default AccordionItem;
