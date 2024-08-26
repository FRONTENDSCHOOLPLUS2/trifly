import { Suspense } from "react";
import TicketLoading from "./Loading";

export default function TicketLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: string;
}) {
  console.log(params);
  return (
    <div>
      <Suspense fallback={<TicketLoading />}>{children}</Suspense>
    </div>
  );
}
