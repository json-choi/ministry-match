"use client";

import { useState } from "react";
import { MINISTRIES } from "@/data/models";
import { Music, Video, BookOpen, MicVocal, HeartHandshake, ListPlus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const IconMap = { Music, Video, BookOpen, MicVocal, HeartHandshake } as const;

export default function DevToolLineup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-6 mb-4 w-72 sm:w-80 border border-[var(--color-border)]"
            style={{ boxShadow: "var(--shadow-card-hover)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-secondary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-secondary)]"></span>
                </span>
                <span className="text-xs font-bold text-[var(--color-secondary)] tracking-wider">BETA 오픈 팀 라인업</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)]">
                <X size={18} />
              </button>
            </div>
            
            <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {MINISTRIES.map((m) => {
                const Icon = IconMap[m.icon as keyof typeof IconMap];
                return (
                  <div key={m.id} className="flex items-center gap-3 p-2 rounded-xl bg-[var(--color-bg)]">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-[var(--color-primary)]">
                      <Icon size={14} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-primary)] leading-none">{m.name}</h4>
                      <p className="text-[10px] font-medium text-[var(--color-text-muted)] mt-1">{m.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)] text-white shadow-lg focus:outline-none focus:ring-4 focus:ring-[var(--color-secondary-dim)] transition-transform hover:scale-105"
      >
        {isOpen ? <X size={20} /> : <ListPlus size={20} />}
      </button>
    </div>
  );
}
