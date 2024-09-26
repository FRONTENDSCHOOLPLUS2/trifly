"use client";

import { FetchOrderListScroll } from "@/lib/FetchOrderListScroll";
import React from "react";
import { useInfiniteQuery } from "react-query";

const OrdersList = ({ keyword, page }: { keyword: string; page: string }) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["reservations", keyword],
      queryFn: ({ pageParam = "1" }) =>
        FetchOrderListScroll(pageParam, keyword),
      getNextPageParam: (lastPage) => {
        if (!lastPage || !lastPage.pagination) {
          return false;
        }

        const { page, totalPages } = lastPage.pagination;
        return page < totalPages ? page + 1 : false;
      },
    });

  // console.log(
  //   "ddddddd",
  //   data?.pages.map((pages) =>
  //     pages.item.map((id: { reservationId: any }) => id.reservationId),
  //   ),
  // );

  // 로딩 상태 처리
  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!data || data.pages.length === 0) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div>
      {/* 데이터 렌더링 */}
      {/* {data.pages.map((page) =>
        page.items.map((order: any) => (
          <div key={order._id}>
            <p>{order._id}</p>
          </div>
        )),
      )} */}
      {data?.pages.map((pages) =>
        pages.item.map((id: { reservationId: any }) => id.reservationId),
      )}
      {isFetchingNextPage && <div>추가 로딩중...</div>}
      {hasNextPage && !isFetchingNextPage && (
        <button onClick={() => fetchNextPage()}>더 보기</button>
      )}
      <p>ㅇㅇ</p>
    </div>
  );
};

export default OrdersList;
