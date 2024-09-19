import { auth } from "@/auth";
import { MultiItem, OrderItem, OrderItineraries } from "@/types";

const API = process.env.NEXT_PUBLIC_MARKET_API_SERVER;
const CLIENT_ID = process.env.NEXT_PUBLIC_MARKET_API_CLIENT_ID;
const LIMIT = process.env.NEXT_PUBLIC_PAGE_LIMIT;

export const FetchOrder = async (): Promise<MultiItem<OrderItem>> => {
  const session = await auth();
  const token = session?.accessToken as string;

  const response = await fetch(`${API}/orders`, {
    method: "GET",
    headers: {
      "client-id": CLIENT_ID,
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data;
};

export const FetchOrderId = async (_id: string): Promise<OrderItem> => {
  const session = await auth();
  const token = session?.accessToken as string;

  const response = await fetch(`${API}/orders/${_id}`, {
    method: "GET",
    headers: {
      "client-id": CLIENT_ID,
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return data.item;
};

export const FetchOrderList = async (
  page?: string,
  keyword?: string,
): Promise<MultiItem<OrderItem>> => {
  const params = new URLSearchParams();
  const session = await auth();
  const token = session?.accessToken as string;

  if (page) {
    params.set("page", page);
  }

  if (keyword) {
    params.set("keyword", keyword);
  }

  if (LIMIT) {
    params.set("limit", LIMIT);
  }

  params.toString();
  // console.log(params);

  const url = `${API}/orders?${params.toString()}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "client-id": CLIENT_ID,
      Authorization: `Bearer ${token}`,
    },
  });
  const resJson = await res.json();

  return resJson;
};
