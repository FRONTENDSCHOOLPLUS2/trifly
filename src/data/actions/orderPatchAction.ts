"use server";

import { auth } from "@/auth";

const SERVER = process.env.NEXT_PUBLIC_MARKET_API_SERVER;
const CLIENTID = process.env.NEXT_PUBLIC_MARKET_API_CLIENT_ID as string;

const orderFatchAction = async (id: number, image: string) => {
  const session = await auth();
  const token = session?.accessToken as string;
  const orderData = { image };
  const res = await fetch(`${SERVER}/orders/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "client-id": CLIENTID,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderData),
  });

  const data = await res.json();
  if (!data.ok) return data.errors ? data.errors[0].msg : data.message;
  return data;
};

export default orderFatchAction;
