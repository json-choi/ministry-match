"use client";

import { QRCodeSVG } from "qrcode.react";

export default function QrPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-[var(--color-bg)] px-4">
      <h1 className="text-xl font-bold text-[var(--color-primary)]">은사 테스트</h1>
      <QRCodeSVG
        value="https://ministry-match.vercel.app/"
        size={320}
        level="M"
        marginSize={2}
        bgColor="transparent"
        fgColor="var(--color-text)"
      />
      <p className="text-sm text-[var(--color-text-muted)]">QR 코드를 스캔해서 테스트를 시작하세요</p>
    </div>
  );
}
