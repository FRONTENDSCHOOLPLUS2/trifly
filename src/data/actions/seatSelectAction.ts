"use server";

import { auth } from "@/auth";

const SERVER = process.env.NEXT_PUBLIC_MARKET_API_SERVER;
const CLIENTID = process.env.NEXT_PUBLIC_MARKET_API_CLIENT_ID as string;

const seatPatchAction = async (
  orderId: number,
  seat: Array<[number, number] | string>,
) => {
  const session = await auth();
  const token = session?.accessToken as string;
  const orderData = { seat };
  const res = await fetch(`${SERVER}/orders/${orderId}`, {
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

export default seatPatchAction;
