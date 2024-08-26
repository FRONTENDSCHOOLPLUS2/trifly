import { Suspense } from "react";
import TicketLoading from "./Loading";
import { fetchCodes } from "@/data/fetch/fetchCode";
import { AirportData, CodeState } from "@/types";

export default async function TicketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { code } = await fetchCodes<AirportData>();
  return (
    <div>
      <Suspense fallback={<TicketLoading code={code} />}>{children}</Suspense>
    </div>
  );
}
