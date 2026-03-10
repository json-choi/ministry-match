import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "나의 사역 DNA 찾기",
  description: "사역팀 매칭 검사 - 성향에 딱 맞는 사역팀을 찾아드려요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
