"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

const AccordionBody = ({ children }: Props) => {
  return (
    <div className="accordion-body">
      <pre>{children}</pre>
    </div>
  );
};

export default AccordionBody;
