interface Props {
  className?: string;
  showTagline?: boolean;
  variant?: "default" | "light";
}

/**
 * Evenzi wordmark — bold geometric "EVENZI" with the signature
 * "play" mark inside the V (formed by the angle of the V itself).
 * Matches the brand book's primary logo system.
 */
export function EvenziLogo({ className, showTagline = true, variant = "default" }: Props) {
  const fill = variant === "light" ? "oklch(1 0 0)" : "var(--color-brand-red)";
  const taglineFill = variant === "light" ? "oklch(1 0 0 / 0.85)" : "var(--color-ink)";

  return (
    <svg
      viewBox="0 0 520 180"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Evenzi"
    >
      <g fill={fill}>
        {/* E */}
        <path d="M10 20 H86 V44 H38 V64 H80 V86 H38 V108 H86 V132 H10 Z" />
        {/* V — with notch creating the play-button negative */}
        <path d="M96 20 H126 L150 92 L168 38 L154 38 L150 50 L138 88 L122 44 L142 44 L150 20 H204 L166 132 H134 Z" />
        {/* E */}
        <path d="M214 20 H290 V44 H242 V64 H284 V86 H242 V108 H290 V132 H214 Z" />
        {/* N */}
        <path d="M300 20 H328 L368 86 V20 H394 V132 H366 L326 66 V132 H300 Z" />
        {/* Z */}
        <path d="M404 20 H486 V40 L432 110 H486 V132 H402 V112 L456 42 H404 Z" />
        {/* I */}
        <path d="M496 20 H522 V132 H496 Z" />
      </g>
      {showTagline && (
        <text
          x="266"
          y="162"
          textAnchor="middle"
          fill={taglineFill}
          fontFamily="Poppins, sans-serif"
          fontSize="13"
          fontWeight="500"
          letterSpacing="6"
        >
          CAPTURE · SHARE · CHERISH
        </text>
      )}
    </svg>
  );
}
