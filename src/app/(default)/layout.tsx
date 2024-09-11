import { Footer } from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header type="default" />
      <main className="containerLayout layout">{children}</main>
      <Footer />
    </>
  );
}
