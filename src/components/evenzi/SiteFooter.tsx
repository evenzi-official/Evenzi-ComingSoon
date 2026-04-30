import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { EvenziLogo } from "./EvenziLogo";

const socials = [
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Twitter", href: "#", Icon: Twitter },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "YouTube", href: "#", Icon: Youtube },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-soft bg-surface-alt px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <EvenziLogo className="h-8 w-auto" showTagline={false} />

        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-soft bg-card text-ink-muted transition-all duration-300 hover:border-brand-red hover:text-brand-red"
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs tracking-wide text-ink-muted">
          © {year} Evenzi · evenzii.com
        </p>
      </div>
    </footer>
  );
}
