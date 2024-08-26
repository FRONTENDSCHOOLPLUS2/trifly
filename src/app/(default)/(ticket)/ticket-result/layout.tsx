import { Suspense } from "react";
import TicketLoading from "./Loading";

export default function TicketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<TicketLoading />}>{children}</Suspense>
    </div>
  );
}
