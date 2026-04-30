"use client";

import { EvenziLogo } from "./EvenziLogo";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function Hero() {
  return (
    <header className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* soft layered washes */}
      <div className="bg-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(60% 50% at 12% 25%, oklch(0.95 0.07 26 / 0.55), transparent 70%), radial-gradient(55% 50% at 92% 80%, oklch(0.93 0.09 18 / 0.45), transparent 70%), radial-gradient(40% 40% at 50% 110%, oklch(0.97 0.04 30 / 0.5), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* floating red orbs */}
      <div
        className="animate-float pointer-events-none absolute top-[18%] -left-24 h-72 w-72 rounded-full bg-brand-red/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-float pointer-events-none absolute right-[-7rem] bottom-[14%] h-80 w-80 rounded-full bg-brand-red/10 blur-3xl"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      {/* top nav */}
      <nav className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-6 sm:pt-8">
        <EvenziLogo className="h-8 w-auto sm:h-9" showTagline={false} />
        <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-card/80 px-3 py-1.5 text-[11px] font-medium text-ink-muted backdrop-blur-sm sm:px-4 sm:text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand-red" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
          </span>
          Launching Soon
        </span>
      </nav>

      {/* hero content — vertically centered, scales to viewport */}
      <div className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-8 text-center">
        <span className="eyebrow animate-[fade-in_0.7s_ease-out_both]">v1.0 — Coming Soon</span>

        <h1 className="font-display mt-5 text-[clamp(2.5rem,11vw,6.5rem)] leading-[0.95] font-bold tracking-tight text-ink animate-[fade-in_0.9s_ease-out_0.1s_both]">
          Every moment,
          <br />
          <span className="text-gradient-red">beautifully kept.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:mt-8 sm:text-lg md:text-xl animate-[fade-in_0.9s_ease-out_0.25s_both]">
          Evenzi is the digital platform to capture, share and cherish your most precious event
          memories — from weddings and birthdays to the moments in between.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 animate-[fade-in_0.9s_ease-out_0.4s_both]">
          <a
            href="#waitlist"
            onClick={(e) => smoothScrollTo(e, "#waitlist")}
            className="press-fx inline-flex items-center justify-center rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.598_0.235_26_/_0.6)] hover:-translate-y-0.5 hover:bg-brand-red-hover hover:shadow-[0_18px_40px_-12px_oklch(0.598_0.235_26_/_0.7)] sm:px-8"
          >
            Get Early Access
          </a>
          <a
            href="#features"
            onClick={(e) => smoothScrollTo(e, "#features")}
            className="press-fx inline-flex items-center justify-center rounded-full border border-border-soft bg-card/80 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm hover:-translate-y-0.5 hover:border-brand-red hover:text-brand-red sm:px-8"
          >
            See What's Coming
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium tracking-[0.22em] text-ink-muted uppercase sm:gap-x-8 sm:text-xs animate-[fade-in_0.9s_ease-out_0.55s_both]">
          <span>Capture</span>
          <span className="h-1 w-1 rounded-full bg-brand-red" aria-hidden="true" />
          <span>Share</span>
          <span className="h-1 w-1 rounded-full bg-brand-red" aria-hidden="true" />
          <span>Cherish</span>
        </div>
      </div>

      {/* scroll affordance */}
      <a
        href="#features"
        onClick={(e) => smoothScrollTo(e, "#features")}
        aria-label="Scroll to what's coming"
        className="press-fx relative mx-auto mb-6 flex h-10 w-6 items-center justify-center rounded-full border border-border-soft text-ink-muted hover:border-brand-red hover:text-brand-red"
      >
        <span className="animate-[evenzi-scroll-dot_1.8s_ease-in-out_infinite] block h-1.5 w-1.5 rounded-full bg-brand-red" />
      </a>
    </header>
  );
}
