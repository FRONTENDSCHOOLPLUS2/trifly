import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET(request: { url: string | URL }) {
  const session = await auth(); // 서버에서 인증 처리
  const token = session?.accessToken;

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const keyword = searchParams.get("keyword") || "";
  const limit = searchParams.get("limit") || "5"; // 필요 시 limit도 가져옴

  const API = process.env.NEXT_PUBLIC_MARKET_API_SERVER;
  const CLIENT_ID = process.env.NEXT_PUBLIC_MARKET_API_CLIENT_ID;

  const params = new URLSearchParams();
  params.set("page", page);
  params.set("keyword", keyword);
  params.set("limit", limit);

  const url = `${API}/orders?${params.toString()}`;
  console.log("Fetching from URL:", url);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "client-id": CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    // console.log("Fetched Data:", data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
