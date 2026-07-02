"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, ScanSearch } from "lucide-react";
import { Badge } from "@/components/Badge";
import { heroBadges, profile } from "@/lib/data";

const codeLines = [
  "const engineer = 'Ferhat';",
  "pipeline.train(images);",
  "api.post('/attendance');",
  "model.detect(anomaly);"
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.12),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0),rgba(6,182,212,0.05))] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.16),transparent_24%),linear-gradient(180deg,rgba(3,7,18,0),rgba(6,182,212,0.08))]" />
      <div className="noise-overlay pointer-events-none absolute inset-0 -z-10 opacity-50" />

      <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-wrap gap-2"
          >
            {heroBadges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-7 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient">Ferhat Öztürk</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-6 max-w-2xl text-xl font-medium leading-8 text-slate-700 dark:text-slate-200"
          >
            Computer Engineering Student focused on Full Stack Development, Artificial Intelligence and Deep Learning.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300"
          >
            I build scalable web applications with React, Node.js and PostgreSQL, while developing AI-based solutions in computer vision, deep learning and medical image analysis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-glow transition hover:bg-cyan-300"
            >
              View Projects
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.cvPath}
              download="Ferhat_Ozturk_CV.pdf"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-cyan-200"
            >
              Download CV
              <Download className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-cyan-200"
            >
              Contact Me
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="relative mx-auto w-full max-w-xl"
          aria-label="Abstract AI developer visual"
        >
          <div className="glass-card relative overflow-hidden rounded-lg p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.18),transparent_30%)]" />
            <div className="relative grid gap-4">
              <div className="flex items-center justify-between rounded-lg border border-slate-200/70 bg-white/80 p-4 dark:border-white/10 dark:bg-slate-950/75">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-200">
                    AI Workspace
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Model pipeline online</p>
                </div>
                <ScanSearch className="h-7 w-7 text-cyan-600 dark:text-cyan-200" aria-hidden="true" />
              </div>

              <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-lg border border-slate-200/70 bg-slate-950 p-4 text-xs text-cyan-100 shadow-2xl shadow-cyan-950/20 dark:border-white/10">
                  <div className="mb-4 flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="space-y-3 font-mono">
                    {codeLines.map((line, index) => (
                      <motion.p
                        key={line}
                        initial={{ opacity: 0.25 }}
                        animate={{ opacity: [0.35, 1, 0.55] }}
                        transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.32 }}
                      >
                        <span className="text-slate-500">0{index + 1}</span> {line}
                      </motion.p>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-slate-200/70 bg-white/75 dark:border-white/10 dark:bg-slate-950/70">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.12)_1px,transparent_1px)] bg-[size:28px_28px]" />
                  {[...Array(12)].map((_, index) => {
                    const left = [18, 44, 70, 30, 62, 82, 12, 52, 76, 24, 42, 66][index];
                    const top = [18, 12, 24, 42, 46, 58, 66, 72, 80, 84, 60, 34][index];
                    return (
                      <motion.span
                        key={index}
                        className="absolute h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.85)]"
                        style={{ left: `${left}%`, top: `${top}%` }}
                        animate={{ scale: [1, 1.55, 1], opacity: [0.55, 1, 0.55] }}
                        transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.16 }}
                      />
                    );
                  })}
                  <svg className="absolute inset-0 h-full w-full text-cyan-400/35" role="presentation">
                    <line x1="18%" y1="18%" x2="44%" y2="12%" stroke="currentColor" />
                    <line x1="44%" y1="12%" x2="70%" y2="24%" stroke="currentColor" />
                    <line x1="30%" y1="42%" x2="62%" y2="46%" stroke="currentColor" />
                    <line x1="62%" y1="46%" x2="82%" y2="58%" stroke="currentColor" />
                    <line x1="12%" y1="66%" x2="52%" y2="72%" stroke="currentColor" />
                    <line x1="52%" y1="72%" x2="76%" y2="80%" stroke="currentColor" />
                    <line x1="42%" y1="60%" x2="66%" y2="34%" stroke="currentColor" />
                  </svg>
                  <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-cyan-400/20 bg-slate-950/85 p-3 text-xs text-cyan-100 backdrop-blur">
                    accuracy.signal: <span className="font-semibold text-cyan-300">learning</span> · api.latency: <span className="font-semibold text-emerald-300">fast</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
