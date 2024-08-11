import React, { Dispatch, SetStateAction } from "react";

const AccordionContext = React.createContext({
  activeKey: 0,
  setActiveKey: Dispatch<SetStateAction<number>>,
});

export default AccordionContext;
