import "@/styles/globals.scss";
import "@/styles/variables.scss";
import "@/styles/responsive.scss";
import "@/styles/common.scss";

import type { Metadata } from "next";
import { Noto_Sans_KR, Roboto, Do_Hyeon } from "next/font/google";
import RecoilRootWrapper from "@/RecoilWrapper";
import { Footer } from "@/components/layout/Footer/Footer";

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

const dohyeon = Do_Hyeon({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dohyeon",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script defer src="https://cdn.iamport.kr/v1/iamport.js" />
      </head>
      <body
        className={`${roboto.variable} ${noto.variable} ${dohyeon.variable}`}
      >
        <RecoilRootWrapper>
          {children}
          <Footer />
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
