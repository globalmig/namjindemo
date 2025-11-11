import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata: Metadata = {
  title: "남진철거",
  description: "10년 넘게 전국 각지에서 다양한 철거 및 폐기물 처리 작업을 진행해온 철거 전문 업체입니다.",
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
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
