type QrPlaceholderCardProps = {
  title?: string;
};

export default function QrPlaceholderCard({ title = "테스트 공유용 QR 코드" }: QrPlaceholderCardProps) {
  return (
    <div className="rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-6 text-left">
      <p className="text-sm font-bold text-[var(--color-primary)]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
        추후 도메인을 알려주시면, 해당 주소 기반으로 접속용 QR 코드를 생성해서 이 영역에 바로 붙일 수 있어요.
      </p>
    </div>
  );
}
