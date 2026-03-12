"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MINISTRIES, QUESTIONS } from "@/data/models";
import QrPlaceholderCard from "@/components/QrPlaceholderCard";
import {
  Music, Video, BookOpen, MicVocal, HeartHandshake,
  Moon, Sprout, HandHeart, HandHelping,
  ArrowRight, RefreshCcw, Compass
} from "lucide-react";

type Scores = Record<string, number>;

const IconMap = {
  Music, Video, BookOpen, MicVocal, HeartHandshake,
  Moon, Sprout, HandHeart, HandHelping,
} as const;

export default function MinistryTest() {
  const [started, setStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState<Scores>({
    WISHING: 0, SAI: 0, HADEUNG: 0, HARANG: 0,
    MASAEM: 0, SOTONG: 0, NAU: 0, YEPUM: 0, BETHEL: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const [resultId, setResultId] = useState<string | null>(null);

  const handleAnswer = (optionScores: Record<string, number | undefined>) => {
    const newScores = { ...scores };
    for (const [key, value] of Object.entries(optionScores)) {
      if (value !== undefined && newScores[key] !== undefined) {
        newScores[key] += value;
      }
    }
    setScores(newScores);
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      let maxScore = -1;
      let best: string = "WISHING";
      for (const [key, value] of Object.entries(newScores)) {
        if (value > maxScore) { maxScore = value; best = key; }
      }
      setResultId(best);
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setScores({
      WISHING: 0, SAI: 0, HADEUNG: 0, HARANG: 0,
      MASAEM: 0, SOTONG: 0, NAU: 0, YEPUM: 0, BETHEL: 0,
    });
    setCurrentIdx(0);
    setResultId(null);
    setShowResult(false);
    setStarted(false);
  };

  /* ── RESULT ── */
  if (showResult && resultId) {
    const m = MINISTRIES.find((m) => m.id === resultId)!;
    const Icon = IconMap[m.icon as keyof typeof IconMap];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-xl mx-auto"
      >
        <div className="bg-white rounded-3xl p-6 sm:p-14 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
          {m.image ? (
            <div className="w-full h-48 sm:h-64 mb-8 rounded-2xl overflow-hidden">
              <img src={m.image} alt={m.name} className="w-full h-full object-cover rounded-2xl" />
            </div>
          ) : (
            <div className="mb-7 mx-auto inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-secondary-dim)]">
              <Icon size={36} className="text-[var(--color-secondary)]" strokeWidth={1.8} />
            </div>
          )}

          <p className="text-xs font-bold tracking-widest text-[var(--color-text-muted)] uppercase mb-3">
            당신에게 가장 잘 어울리는 팀은
          </p>

          <h2 className="text-5xl font-black text-[var(--color-primary)] tracking-tight mb-2">
            {m.name}
          </h2>
          <p className="text-base font-semibold text-[var(--color-secondary)] mb-9">
            {m.role}
          </p>

          <p className="text-[var(--color-text-main)] leading-8 text-base mb-8 bg-[var(--color-bg)] rounded-2xl px-6 py-5">
            {m.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {m.traits.map((t, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-[var(--color-secondary)] bg-[var(--color-secondary-dim)]"
              >
                #{t}
              </span>
            ))}
          </div>

          <div className="mb-8 text-left">
            <QrPlaceholderCard />
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/ministries"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-base transition-opacity hover:opacity-85 text-white"
              style={{ backgroundColor: "var(--color-secondary)" }}
            >
              <Compass size={18} />
              다른 사역팀 구경하러 가기!
            </Link>

            <button
              onClick={resetTest}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base transition-opacity hover:opacity-85"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <RefreshCcw size={16} />
              다시 해보기
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  /* ── LANDING ── */
  if (!started) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center w-full max-w-md mx-auto py-12"
      >
        <div className="w-full max-w-xs sm:max-w-sm mx-auto mb-10 overflow-hidden shadow-sm rounded-3xl border-4 border-white" style={{ boxShadow: "var(--shadow-card)" }}>
          <img src="/landing.png" alt="나의 사역 DNA" className="w-full h-auto object-cover" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-[var(--color-primary)] tracking-tight mb-5 leading-tight">
          나의 사역<br />DNA 찾기
        </h1>

        <p className="text-[var(--color-text-muted)] text-base leading-7 mb-8">
          12개의 일상 질문으로 나에게 딱 맞는 사역팀을 찾아드려요.
        </p>



        <button
          onClick={() => setStarted(true)}
          className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-full text-white font-bold text-lg transition-opacity hover:opacity-85"
          style={{ backgroundColor: "var(--color-secondary)" }}
        >
          검사 시작 <ArrowRight size={20} strokeWidth={2.5} />
        </button>
      </motion.div>
    );
  }

  /* ── QUIZ ── */
  const currentQ = QUESTIONS[currentIdx];
  const progress = ((currentIdx + 1) / QUESTIONS.length) * 100;

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold text-[var(--color-secondary)]">
            {currentIdx + 1} / {QUESTIONS.length}
          </span>
          <span className="text-xs text-[var(--color-text-muted)] font-medium">
            {Math.round(progress)}% 완료
          </span>
        </div>
        <div className="w-full rounded-full h-1.5" style={{ backgroundColor: "var(--color-border)" }}>
          <motion.div
            className="h-1.5 rounded-full"
            style={{ backgroundColor: "var(--color-secondary)" }}
            initial={{ width: `${(currentIdx / QUESTIONS.length) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22 }}
          className="bg-white rounded-3xl p-7 sm:p-10"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] mb-8 leading-relaxed">
            {currentQ.text}
          </h3>

          <div className="flex flex-col gap-3">
            {currentQ.options.map((opt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleAnswer(opt.scores)}
                className="group w-full text-left p-5 sm:p-6 rounded-2xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                style={{
                  backgroundColor: "var(--color-bg)",
                  border: "1.5px solid transparent",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-xs font-black mt-0.5 transition-colors"
                    style={{ backgroundColor: "var(--color-border)", color: "var(--color-text-muted)", fontWeight: 900 }}
                  >
                    {i === 0 ? "A" : "B"}
                  </div>
                  <span className="text-base sm:text-lg text-[var(--color-text-main)] font-medium leading-relaxed">
                    {opt.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
