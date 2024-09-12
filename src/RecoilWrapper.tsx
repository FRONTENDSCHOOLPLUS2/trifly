"use client";

import { RecoilRoot } from "recoil";
import Modal from "@/components/Modal/Modal";
import FilterStateManager from "./FilterStateManager";

const RecoilRootWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      {children}
      <FilterStateManager />
      <Modal />
    </RecoilRoot>
  );
};

export default RecoilRootWrapper;
