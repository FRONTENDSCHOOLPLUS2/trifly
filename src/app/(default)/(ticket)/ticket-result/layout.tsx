import { fetchCodes } from "@/data/fetch/fetchCode";
import { AirportData } from "@/types";
import { Suspense } from "react";
import TicketLoading from "./Loading";

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
