import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata: Metadata = {
  title: "남진철거 | 전국 아파트·주택·상가 철거, 폐기물 처리 전문",
  description: "전국 아파트·주택·상가 철거, 폐기물 처리. 상담 010-4691-7723",
  keywords: [
    "남진철거",
    "철거 공사",
    "철거",
    "폐기물 처리",
    "원상 복구",
    "주택 철거",
    "상가 철거",
    "폐업 정부 지원",
  ],
  openGraph: {
    title: '남진철거',
    description: '안전하게 철거하고, 믿음으로 다시 세웁니다.',
    url: 'https://www.namjindemo.com',
    siteName: '남진철거',
    images: [
      {
        url: 'https://www.namjindemo.com/images/og_image.png',
        width: 1200,
        height: 630,
        alt: '남진철거',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  other: {
    'naver-site-verification': '69847524adf5a6285f21618434bc015a2ff486a5',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
