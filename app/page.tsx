import Image from "next/image";

function LogoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M16 4L28 16L16 28L4 16L16 4Z"
        stroke="#38bdf8"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

const socialLinks = [
  { name: "Instagram", href: "#", icon: "instagram" },
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "X", href: "#", icon: "x" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "YouTube", href: "#", icon: "youtube" },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full min-w-full flex-col overflow-hidden md:flex-row">
      {/* Full-width background image - 100vw */}
      <div className="absolute inset-0 -z-10 min-w-[100vw]">
        <Image
          src="/Evenzi_ Coming Soon Page.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Left Section - ~70% with dark overlay */}
      <section className="relative flex min-h-[60vh] flex-[7] flex-col justify-between md:min-h-screen">
        <div className="relative z-10 flex flex-1 flex-col justify-between p-10 md:p-14 lg:p-20">
          {/* Header - Logo & Brand */}
          <header>
            <div className="flex items-center gap-3">
              <LogoIcon />
              <span className="text-xl font-medium text-white">Evenzi</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="max-w-xl">
            <h1 className="headline-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              <span className="block">Elevating</span>
              <span className="block">every</span>
              <span className="block">celebration.</span>
            </h1>
            <div className="mt-4 h-1 w-16 bg-[#38bdf8]" />
            <p className="mt-6 text-base leading-relaxed text-white/90 md:text-lg">
              We are working hard to bring you the smartest way to plan and share
              your special moments. Stay tuned as we build the future of event
              experiences.
            </p>
          </div>

          <div />
        </div>
      </section>

      {/* Right Sidebar - ~30% with heavily blurred background (frosted glass) */}
      <aside className="relative flex w-full flex-[3] flex-col items-center justify-between gap-8 px-8 py-12 md:min-w-[280px] md:gap-0">
        {/* Social Icons */}
        <div className="flex flex-col gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 transition-colors hover:text-white"
              aria-label={link.name}
            >
              {link.icon === "instagram" && (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="4" strokeWidth="2" />
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                </svg>
              )}
              {link.icon === "facebook" && (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {link.icon === "x" && (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {link.icon === "linkedin" && (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="2"
                    y="9"
                    width="4"
                    height="12"
                    strokeWidth="2"
                    rx="1"
                  />
                  <circle cx="4" cy="4" r="2" strokeWidth="2" />
                </svg>
              )}
              {link.icon === "youtube" && (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Status */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#38bdf8]">
            STATUS
          </span>
          <span className="headline-serif text-2xl italic text-white md:text-3xl">
            Coming Soon
          </span>
          <div className="mt-2 h-px w-24 bg-white/40" />
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-white/70">
          <p>© 2026 Evenzi.</p>
          <p>All rights reserved.</p>
        </div>
      </aside>
    </div>
  );
}
