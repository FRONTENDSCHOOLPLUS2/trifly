import { Footer } from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";

export default function TransparentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header type="transparent" />
      <main className="containerLayout layout transparentVer">{children}</main>;
      <Footer />
    </>
  );
}
