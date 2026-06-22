"use client";

import { Mail, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const socials = [
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Twitter", href: "#", Icon: Twitter },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "YouTube", href: "#", Icon: Youtube },
];

export function Contact() {
  const heading = useReveal<HTMLDivElement>({ threshold: 0.15 });
  const actions = useReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-surface px-6 py-28 sm:py-36"
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,oklch(0.96_0.015_26)_0%,transparent_70%)]
          dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,oklch(0.22_0.015_26_/_0.4)_0%,transparent_70%)]"
      />

      <div
        ref={heading.ref}
        className={`reveal relative mx-auto max-w-2xl text-center ${heading.visible ? "is-visible" : ""}`}
      >
        {/* Eyebrow */}
        <p className="eyebrow mb-6 tracking-[0.2em] text-brand-red">Get in Touch</p>

        {/* Headline */}
        <h2
          id="contact-heading"
          className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          Have a question? <span className="text-brand-red">Let&apos;s talk.</span>
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
          Partnerships, press, feedback or just a hello — we&apos;d love to hear from you.
        </p>
      </div>

      {/* CTA + socials */}
      <div
        ref={actions.ref}
        className={`reveal reveal-delay-1 relative mx-auto mt-10 flex max-w-xl flex-col items-center gap-8 ${actions.visible ? "is-visible" : ""}`}
      >
        {/* Email button */}
        <a
          href="mailto:evenzi.official@gmail.com"
          className="group inline-flex items-center gap-3 rounded-full bg-brand-red px-8 py-4 text-base font-semibold text-white shadow-[0_8px_32px_-8px_oklch(0.598_0.235_26_/_0.6)] transition-all duration-300 hover:bg-brand-red-hover hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_oklch(0.598_0.235_26_/_0.7)]"
        >
          <Mail
            className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
            strokeWidth={2}
          />
          evenzi.official@gmail.com
        </a>

        {/* Social icons */}
        <ul className="flex items-center gap-3" aria-label="Social media links">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-surface-alt text-ink-muted transition-all duration-300 hover:border-brand-red hover:text-brand-red"
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
