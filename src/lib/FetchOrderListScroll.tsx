"use client";

export const FetchOrderListScroll = async (page: string, keyword: string) => {
  const params = new URLSearchParams();
  if (page) params.set("page", page);
  if (keyword) params.set("keyword", keyword);

  const res = await fetch(`/api/orders?${params.toString()}`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }

  return res.json();
};
