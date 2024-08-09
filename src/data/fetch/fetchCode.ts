import { ApiRes, CodeData, CodeState, SingleItem } from "@/types";

const SERVER = process.env.NEXT_PUBLIC_MARKET_API_SERVER;
const CLIENT_ID = process.env.NEXT_PUBLIC_MARKET_API_CLIENT_ID;

export const fetchCodes = async (): Promise<CodeState> => {
  const url = `${SERVER}/codes`;
  const res = await fetch(url, {
    headers: {
      "client-id": CLIENT_ID,
    },
  });
  const resJson: ApiRes<SingleItem<CodeData>> = await res.json();

  if (!resJson.ok) {
    throw new Error("코드 조회 실패!");
  }

  return resJson.item.flatten;
};
