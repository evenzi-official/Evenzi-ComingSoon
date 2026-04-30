"use client";

import { Camera, Share2, Heart, Calendar, Users, Image } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const features = [
  {
    icon: Camera,
    title: "Capture",
    body: "Collect every special moment from your event — photos, videos and reactions, all streamed into one beautiful gallery.",
  },
  {
    icon: Share2,
    title: "Share",
    body: "Invite friends and family to share instantly. Everyone contributes; no one misses a moment, even from across the world.",
  },
  {
    icon: Heart,
    title: "Cherish",
    body: "Your memories live on, beautifully organized and forever accessible — long after the lights come down.",
  },
];

const sub = [
  { icon: Calendar, label: "Event timelines" },
  { icon: Users, label: "Guest contributions" },
  { icon: Image, label: "AI-curated highlights" },
];

export function FeatureTeasers() {
  const header = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLUListElement>({ threshold: 0.1 });
  const chips = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative px-6 py-24 sm:py-32"
    >
      {/* soft section wash */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96"
        style={{
          background:
            "radial-gradient(50% 100% at 50% 0%, oklch(0.97 0.04 26 / 0.6), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        <div
          ref={header.ref}
          className={`reveal flex flex-col items-center text-center ${header.visible ? "is-visible" : ""}`}
        >
          <span className="eyebrow">What's Coming</span>
          <h2
            id="features-heading"
            className="font-display mt-4 max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight text-ink sm:text-5xl"
          >
            One place for every <span className="text-gradient-red">memory</span> that matters.
          </h2>
          <p className="mt-5 max-w-xl text-base text-ink-muted sm:text-lg">
            Direct. Modern. Minimal. Evenzi is built around three simple promises.
          </p>
        </div>

        <ul ref={grid.ref} className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <li
                key={f.title}
                className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-2xl border border-border-soft bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-red/40 hover:shadow-[0_24px_60px_-24px_oklch(0.598_0.235_26_/_0.3)] ${grid.visible ? "is-visible" : ""}`}
              >
                {/* gradient hover wash */}
                <div
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(80% 60% at 50% 0%, oklch(0.97 0.04 26 / 0.7), transparent 70%)",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute top-0 right-0 px-4 py-2 text-xs font-semibold tracking-wider text-ink-muted/60">
                  0{i + 1}
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red text-primary-foreground shadow-[0_10px_24px_-10px_oklch(0.598_0.235_26_/_0.6)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="font-display mt-7 text-2xl font-semibold text-ink">{f.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{f.body}</p>
              </li>
            );
          })}
        </ul>

        {/* secondary feature chips */}
        <div
          ref={chips.ref}
          className={`reveal mt-14 flex flex-wrap items-center justify-center gap-3 ${chips.visible ? "is-visible" : ""}`}
        >
          {sub.map((s) => {
            const Icon = s.icon;
            return (
              <span
                key={s.label}
                className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface-alt px-4 py-2 text-sm font-medium text-ink transition-colors duration-300 hover:border-brand-red/40 hover:text-brand-red"
              >
                <Icon className="h-4 w-4 text-brand-red" strokeWidth={2.2} />
                {s.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
