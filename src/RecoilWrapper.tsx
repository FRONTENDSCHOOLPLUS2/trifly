"use client";

import { RecoilRoot } from "recoil";
import Modal from "@/components/Modal/Modal";
import FilterStateManager from "./FilterStateManager";
import { QueryClient, QueryClientProvider } from "react-query";

const RecoilRootWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <RecoilRoot>
        {children}
        <FilterStateManager />
        <Modal />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default RecoilRootWrapper;
