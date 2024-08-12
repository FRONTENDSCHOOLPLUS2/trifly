import React, { Dispatch, createContext } from "react";

type AccordionContextType = {
  eventKey: number;
  activeKey: number;
  setActiveKey: Dispatch<React.SetStateAction<number>>;
};

const AccordionContext = createContext<AccordionContextType>({
  eventKey: 0,
  activeKey: 0,
  setActiveKey: () => {},
});

export default AccordionContext;
