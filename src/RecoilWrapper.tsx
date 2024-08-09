"use client";

import { RecoilRoot } from "recoil";
import Modal from "@/components/Modal/Modal";

const RecoilRootWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      {children}
      <Modal />
    </RecoilRoot>
  );
};

export default RecoilRootWrapper;
