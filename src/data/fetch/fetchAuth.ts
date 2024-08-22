import { ITokenSuccess } from "@/types/amadeus";

const AMADEUS_API_SERVER = process.env.NEXT_PUBLIC_AMADEUS_API_SERVER;
const AMADEUS_CLIENT_ID = process.env.NEXT_PUBLIC_AMADEUS_CLIENT_ID;
const AMADEUS_CLIENT_SECRET = process.env.NEXT_PUBLIC_AMADEUS_CLIENT_SECRET;

const fetchAuth = async (): Promise<string> => {
  const url = `${AMADEUS_API_SERVER}/v1/security/oauth2/token`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: AMADEUS_CLIENT_ID,
      client_secret: AMADEUS_CLIENT_SECRET,
    }),
  });

  const resJson: ITokenSuccess = await res.json();

  if (!resJson.access_token) {
    throw new Error("Amadeus access_token을 불러올 수 없습니다!");
  }

  const accessToken = resJson.access_token;

  console.log(accessToken);

  return accessToken;
};

export default fetchAuth;
