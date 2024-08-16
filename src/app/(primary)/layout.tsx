import Header from "@/components/layout/Header/Header";

export default function PrimaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header type="primary" />
      <main className="containerLayout primaryVer layout">{children}</main>
    </>
  );
}
