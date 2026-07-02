"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { contactItems } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

export function Contact() {
  const [toastVisible, setToastVisible] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setToastVisible(true);
    event.currentTarget.reset();
    window.setTimeout(() => setToastVisible(false), 3200);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.14),transparent_25%),radial-gradient(circle_at_85%_80%,rgba(37,99,235,0.12),transparent_28%)]" />
      <div className="section-shell">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s Build Something Together"
          description="I am open to internship opportunities, junior developer roles, AI projects and collaborations in full-stack development, deep learning and computer vision."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass-card rounded-lg p-6 sm:p-7">
            <div className="grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-cyan-500/10 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                        {item.label}
                      </span>
                      <span className="mt-1 block break-words text-sm font-semibold text-slate-950 dark:text-white">
                        {item.value}
                      </span>
                    </span>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring flex items-center gap-4 rounded-lg border border-slate-200/70 bg-white/60 p-4 transition hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.035] dark:hover:text-cyan-200"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-lg border border-slate-200/70 bg-white/60 p-4 dark:border-white/10 dark:bg-white/[0.035]"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="glass-card rounded-lg p-6 sm:p-7" delay={0.06}>
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Name
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="rounded-lg border-slate-300 bg-white/80 text-slate-950 shadow-none transition focus:border-cyan-500 focus:ring-cyan-500 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Email
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="rounded-lg border-slate-300 bg-white/80 text-slate-950 shadow-none transition focus:border-cyan-500 focus:ring-cyan-500 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                Message
                <textarea
                  required
                  name="message"
                  rows={6}
                  className="resize-none rounded-lg border-slate-300 bg-white/80 text-slate-950 shadow-none transition focus:border-cyan-500 focus:ring-cyan-500 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
                />
              </label>
              <button
                type="submit"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-glow transition hover:bg-cyan-300"
              >
                Send Message
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      {toastVisible ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-lg border border-cyan-400/40 bg-slate-950 px-5 py-4 text-center text-sm font-semibold text-white shadow-glow"
        >
          Thank you! Your message has been prepared.
        </div>
      ) : null}
    </section>
  );
}
