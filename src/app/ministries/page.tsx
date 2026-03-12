import Link from "next/link";
import { MINISTRIES } from "@/data/models";
import {
  Music,
  Video,
  BookOpen,
  MicVocal,
  HeartHandshake,
  Moon,
  Sprout,
  HandHeart,
  HandHelping,
  ArrowLeft,
} from "lucide-react";

const IconMap = {
  Music,
  Video,
  BookOpen,
  MicVocal,
  HeartHandshake,
  Moon,
  Sprout,
  HandHeart,
  HandHelping,
} as const;

export default function MinistriesPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[var(--color-secondary)]">사역팀 전체 보기</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-[var(--color-primary)] sm:text-4xl">
              다른 사역팀도 구경해보세요
            </h1>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
              테스트 결과 외에도 청년부 안에 어떤 사역팀이 있는지 한눈에 볼 수 있도록 정리했어요.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-bold text-[var(--color-primary)] transition hover:bg-[var(--color-bg)]"
          >
            <ArrowLeft size={16} /> 테스트로 돌아가기
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MINISTRIES.map((ministry) => {
            const Icon = IconMap[ministry.icon as keyof typeof IconMap];
            return (
              <article
                key={ministry.id}
                className="rounded-3xl border border-[var(--color-border)] bg-white p-6"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {ministry.image ? (
                  <div className="mb-5 h-40 overflow-hidden rounded-2xl bg-[var(--color-bg)]">
                    <img src={ministry.image} alt={ministry.name} className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-secondary-dim)] text-[var(--color-secondary)]">
                    <Icon size={26} strokeWidth={2} />
                  </div>
                )}

                <p className="text-xs font-bold tracking-widest text-[var(--color-text-muted)] uppercase">
                  {ministry.role}
                </p>
                <h2 className="mt-2 text-2xl font-black text-[var(--color-primary)]">{ministry.name}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-main)]">{ministry.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {ministry.traits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full bg-[var(--color-secondary-dim)] px-3 py-1 text-xs font-semibold text-[var(--color-secondary)]"
                    >
                      #{trait}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
