import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata: Metadata = {
  title: "남진철거",
  description: "환영합니다. 남진철거 홈페이지입니다.",
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
