import "@/styles/common.css";
import "@/styles/globals.css";
import "@/styles/responsive.css";
import "@/styles/variables.css";

import { Footer } from "@/components/layout/Footer/Footer";
import RecoilRootWrapper from "@/RecoilWrapper";
import type { Metadata } from "next";
import { Noto_Sans_KR, Roboto } from "next/font/google";

const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const noto = Noto_Sans_KR({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  // title: { template: `%s | 솔직할지도`, default: "솔직할지도" },
  title: "TriFly",
  description: "",
  authors: {
    name: "Passport",
  },
  icons: {
    icon: "/favicon.svg",
  },
  keywords: "",
  openGraph: {
    title: "TriFly",
    description: "",
    images: "/opengraph_img.png",
    url: "",
    type: "website",
    siteName: "TriFly",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${roboto.variable} ${noto.variable}`}>
        <RecoilRootWrapper>
          {children}
          <Footer />
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
