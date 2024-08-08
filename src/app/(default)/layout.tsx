import Header from "@/components/layout/Header/Header";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header type="white" />
      <main className="containerLayout layout">{children}</main> ;
    </>
  );
}
