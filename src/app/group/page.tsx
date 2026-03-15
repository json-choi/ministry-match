"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MINISTRIES } from "@/data/models";
import {
  Music, Video, BookOpen, MicVocal, HeartHandshake,
  Moon, Sprout, HandHeart, HandHelping,
  ArrowLeft, RefreshCw, Users,
} from "lucide-react";

const IconMap = {
  Music, Video, BookOpen, MicVocal, HeartHandshake,
  Moon, Sprout, HandHeart, HandHelping,
} as const;

interface ResultEntry {
  id: string;
  name: string;
  ministryId: string;
  createdAt: number;
}

export default function GroupPage() {
  const [results, setResults] = useState<ResultEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchResults = useCallback(async () => {
    try {
      const res = await fetch("/api/results");
      const data = await res.json();
      setResults(data);
    } catch {
      // 네트워크 오류 무시
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchResults();
    // 10초마다 자동 새로고침
    const interval = setInterval(fetchResults, 10_000);
    return () => clearInterval(interval);
  }, [fetchResults]);

  // 사역팀별 그룹핑
  const grouped = MINISTRIES.map((m) => ({
    ministry: m,
    members: results.filter((r) => r.ministryId === m.id),
  })).filter((g) => g.members.length > 0);

  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[var(--color-secondary)]">
              <Users size={14} className="inline mr-1 -mt-0.5" />
              단체 결과 현황
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-[var(--color-primary)] sm:text-4xl">
              우리 모두의 결과
            </h1>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
              검사를 완료한 사람들의 결과가 실시간으로 모여요.
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => { setLoading(true); fetchResults(); }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-bold text-[var(--color-primary)] transition hover:bg-[var(--color-bg)]"
            >
              <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
              새로고침
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-bold text-[var(--color-primary)] transition hover:bg-[var(--color-bg)]"
            >
              <ArrowLeft size={16} /> 테스트하기
            </Link>
          </div>
        </div>

        {/* Summary Bar */}
        {results.length > 0 && (
          <div
            className="flex items-center gap-6 rounded-3xl bg-white px-6 py-5"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div>
              <p className="text-3xl font-black text-[var(--color-primary)]">{results.length}</p>
              <p className="text-xs font-semibold text-[var(--color-text-muted)]">참여자</p>
            </div>
            <div className="h-10 w-px bg-[var(--color-border)]" />
            <div>
              <p className="text-3xl font-black text-[var(--color-secondary)]">{grouped.length}</p>
              <p className="text-xs font-semibold text-[var(--color-text-muted)]">사역팀</p>
            </div>
            <div className="h-10 w-px bg-[var(--color-border)]" />
            {/* 가장 인기있는 팀 */}
            {grouped.length > 0 && (() => {
              const top = [...grouped].sort((a, b) => b.members.length - a.members.length)[0];
              const Icon = IconMap[top.ministry.icon as keyof typeof IconMap];
              return (
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-secondary-dim)] text-[var(--color-secondary)]">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-[var(--color-primary)]">{top.ministry.name}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">가장 많은 팀</p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Loading */}
        {loading && results.length === 0 && (
          <div className="rounded-3xl bg-white p-12 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
            <RefreshCw size={32} className="mx-auto mb-4 animate-spin text-[var(--color-secondary)]" />
            <p className="text-sm font-semibold text-[var(--color-text-muted)]">결과를 불러오는 중...</p>
          </div>
        )}

        {/* Empty */}
        {!loading && results.length === 0 && (
          <div className="rounded-3xl bg-white p-12 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
            <Users size={48} className="mx-auto mb-4 text-[var(--color-border)]" />
            <p className="text-lg font-bold text-[var(--color-primary)] mb-2">아직 결과가 없어요</p>
            <p className="text-sm text-[var(--color-text-muted)]">
              검사를 완료하면 여기에 자동으로 표시됩니다.
            </p>
          </div>
        )}

        {/* Results Grid */}
        {grouped.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {grouped
                .sort((a, b) => b.members.length - a.members.length)
                .map(({ ministry, members }) => {
                  const Icon = IconMap[ministry.icon as keyof typeof IconMap];
                  return (
                    <motion.div
                      key={ministry.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-3xl border border-[var(--color-border)] bg-white p-6"
                      style={{ boxShadow: "var(--shadow-card)" }}
                    >
                      {/* Ministry Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-secondary-dim)] text-[var(--color-secondary)]">
                          <Icon size={22} strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-[var(--color-primary)]">{ministry.name}</h3>
                          <p className="text-xs font-semibold text-[var(--color-text-muted)]">{ministry.role}</p>
                        </div>
                        <span className="ml-auto rounded-full bg-[var(--color-secondary-dim)] px-3 py-1 text-xs font-black text-[var(--color-secondary)]">
                          {members.length}명
                        </span>
                      </div>

                      {/* Members */}
                      <div className="flex flex-col gap-2">
                        {members.map((member) => (
                          <div
                            key={member.id}
                            className="flex items-center justify-between rounded-xl bg-[var(--color-bg)] px-4 py-3"
                          >
                            <span className="text-sm font-semibold text-[var(--color-text-main)]">
                              {member.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </div>
        )}

        {/* Auto-refresh indicator */}
        {results.length > 0 && (
          <p className="text-center text-xs text-[var(--color-text-muted)]">
            10초마다 자동으로 새로고침됩니다
          </p>
        )}
      </div>
    </main>
  );
}
