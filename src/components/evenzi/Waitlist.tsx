"use client";

import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useReveal } from "@/hooks/use-reveal";

const emailSchema = z
  .string()
  .trim()
  .min(1, "Please enter your email.")
  .email("Please enter a valid email.")
  .max(255, "That email is a little too long.");

export function Waitlist() {
  const card = useReveal<HTMLDivElement>({ threshold: 0.15 });
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (honeypot) {
      setStatus("success");
      return;
    }

    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please enter a valid email.");
      return;
    }

    setStatus("loading");
    const { error: dbError } = await supabase
      .from("waitlist_signups")
      .insert({ email: parsed.data });

    if (dbError) {
      if (dbError.code === "23505") {
        setStatus("success");
        return;
      }
      setStatus("idle");
      setError("Something went wrong. Please try again in a moment.");
      toast.error("We couldn't add you to the list. Please try again.");
      return;
    }

    setStatus("success");
  }

  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-heading"
      className="relative px-6 py-24 sm:py-32"
    >
      <div
        ref={card.ref}
        className={`reveal relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-brand-red px-6 py-16 text-center shadow-[0_40px_80px_-30px_oklch(0.598_0.235_26_/_0.5)] sm:px-12 sm:py-20 ${card.visible ? "is-visible" : ""}`}
      >
        {/* decorative rings */}
        <div
          className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full border border-white/15"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-white/10"
          aria-hidden="true"
        />

        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-white uppercase backdrop-blur-sm">
          Join the Waitlist
        </span>
        <h2
          id="waitlist-heading"
          className="font-display mt-6 text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl"
        >
          Be first in line when Evenzi launches.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Get early access, exclusive launch perks, and a personal note the moment we go live.
        </p>

        {status === "success" ? (
          <div
            role="status"
            className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 rounded-2xl bg-white/10 px-8 py-8 backdrop-blur-sm"
          >
            <CheckCircle2 className="h-10 w-10 text-white" strokeWidth={2} />
            <p className="font-display text-2xl font-semibold text-white">You're on the list.</p>
            <p className="text-sm text-white/85">
              We'll be in touch the moment Evenzi opens its doors.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto mt-10 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              name="company"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0"
            />
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(null);
              }}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? "email-error" : undefined}
              className="flex-1 rounded-full border-0 bg-white px-6 py-3.5 text-base text-ink placeholder:text-ink-muted/70 focus:outline-none focus:ring-4 focus:ring-white/40"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-black dark:bg-white/20 dark:hover:bg-white/30 disabled:opacity-60"
            >
              {status === "loading" ? "Joining…" : "Notify Me"}
              {status !== "loading" && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>
        )}

        {error && (
          <p id="email-error" role="alert" className="mt-4 text-sm font-medium text-white">
            {error}
          </p>
        )}

        <p className="mt-6 text-xs text-white/70">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
