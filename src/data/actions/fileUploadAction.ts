"use server";

const SERVER = process.env.NEXT_PUBLIC_MARKET_API_SERVER;
const CLIENTID = process.env.NEXT_PUBLIC_MARKET_API_CLIENT_ID as string;

const fileUploadAction = async (file: FormData) => {
  const res = await fetch(`${SERVER}/files`, {
    method: "POST",
    headers: {
      "client-id": CLIENTID,
    },
    body: file,
  });

  const data = await res.json();
  if (!data.ok) return data.errors ? data.errors[0].msg : data.message;
  return data.item[0].path;
};

export default fileUploadAction;
