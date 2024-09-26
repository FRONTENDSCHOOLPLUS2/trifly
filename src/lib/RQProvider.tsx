"use client";

import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
};

function RQProvider({ children }: Props) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          // 탭 전환시
          refetchOnWindowFocus: false,
          // 컴포넌트가 언마운트됐다가 다시 마운트 되는 순간
          retryOnMount: true,
          // 인터넷 연결이 끊겼다가 재접속 되는 순간
          refetchOnReconnect: false,
          // 데이터를 가져올 때, 실패했다면 몇번 더 시도 할지
          retry: false,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === "local"}
      /> */}
    </QueryClientProvider>
  );
}

export default RQProvider;
