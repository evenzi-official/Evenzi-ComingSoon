type Variant = "strand" | "flourish" | "sprig" | "divider";

interface Props {
  variant?: Variant;
  className?: string;
}

/**
 * Hand-drawn marigold garland motifs in inline SVG.
 * Decorative only — aria-hidden everywhere.
 */
export function MarigoldGarland({ variant = "strand", className }: Props) {
  if (variant === "strand") {
    return (
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className}
      >
        {/* hanging string */}
        <path
          d="M 0 18 Q 300 90 600 70 T 1200 18"
          fill="none"
          stroke="oklch(0.55 0.05 80)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* leaves and blooms distributed along the curve */}
        {Array.from({ length: 22 }).map((_, i) => {
          const t = i / 21;
          const x = t * 1200;
          // approximate y of cubic above
          const y =
            18 +
            (1 - Math.pow(2 * t - 1, 2)) * 60 +
            Math.sin(t * Math.PI * 4) * 1.5;
          const isRose = i % 5 === 0;
          const r = isRose ? 9 : 11;
          const fill = isRose ? "var(--color-rose)" : "var(--color-gold)";
          return (
            <g key={i} transform={`translate(${x} ${y})`}>
              {/* leaf pair */}
              <ellipse
                cx="-9"
                cy="-2"
                rx="7"
                ry="2.4"
                fill="oklch(0.55 0.13 145)"
                opacity="0.85"
                transform="rotate(-25)"
              />
              <ellipse
                cx="9"
                cy="-2"
                rx="7"
                ry="2.4"
                fill="oklch(0.55 0.13 145)"
                opacity="0.85"
                transform="rotate(25)"
              />
              {/* marigold bloom — layered petal circles */}
              <circle cx="0" cy="6" r={r + 2} fill={fill} opacity="0.35" />
              <circle cx="0" cy="6" r={r} fill={fill} />
              <circle
                cx="0"
                cy="6"
                r={r * 0.55}
                fill={isRose ? "oklch(0.38 0.18 1.5)" : "oklch(0.65 0.18 60)"}
              />
              <circle cx="0" cy="6" r={r * 0.2} fill="oklch(0.35 0.05 60)" />
            </g>
          );
        })}
      </svg>
    );
  }

  if (variant === "flourish") {
    return (
      <svg
        viewBox="0 0 240 40"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M 10 20 Q 60 6 120 20 T 230 20"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        {[40, 80, 120, 160, 200].map((cx, i) => (
          <g key={cx} transform={`translate(${cx} 20)`}>
            <ellipse
              cx="-7"
              cy="0"
              rx="5"
              ry="1.8"
              fill="oklch(0.55 0.13 145)"
              transform="rotate(-20)"
            />
            <ellipse
              cx="7"
              cy="0"
              rx="5"
              ry="1.8"
              fill="oklch(0.55 0.13 145)"
              transform="rotate(20)"
            />
            <circle
              r={i === 2 ? 7 : 5}
              fill={i === 2 ? "var(--color-rose)" : "var(--color-gold)"}
            />
            <circle
              r={i === 2 ? 3 : 2.2}
              fill={i === 2 ? "oklch(0.38 0.18 1.5)" : "oklch(0.65 0.18 60)"}
            />
          </g>
        ))}
      </svg>
    );
  }

  if (variant === "sprig") {
    return (
      <svg
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M 6 6 Q 30 18 50 50"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <ellipse
          cx="20"
          cy="14"
          rx="6"
          ry="2"
          fill="oklch(0.55 0.13 145)"
          transform="rotate(35 20 14)"
        />
        <ellipse
          cx="36"
          cy="28"
          rx="6"
          ry="2"
          fill="oklch(0.55 0.13 145)"
          transform="rotate(45 36 28)"
        />
        <circle cx="50" cy="50" r="6" fill="var(--color-rose)" />
        <circle cx="50" cy="50" r="2.5" fill="oklch(0.38 0.18 1.5)" />
        <circle cx="14" cy="10" r="3.5" fill="var(--color-gold)" />
      </svg>
    );
  }

  // divider
  return (
    <svg
      viewBox="0 0 320 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <line
        x1="10"
        y1="10"
        x2="140"
        y2="10"
        stroke="var(--color-gold)"
        strokeWidth="0.7"
      />
      <line
        x1="10"
        y1="14"
        x2="140"
        y2="14"
        stroke="var(--color-gold)"
        strokeWidth="0.4"
        opacity="0.6"
      />
      <line
        x1="180"
        y1="10"
        x2="310"
        y2="10"
        stroke="var(--color-gold)"
        strokeWidth="0.7"
      />
      <line
        x1="180"
        y1="14"
        x2="310"
        y2="14"
        stroke="var(--color-gold)"
        strokeWidth="0.4"
        opacity="0.6"
      />
      {/* center ornament */}
      <g transform="translate(160 12)">
        <circle r="6" fill="none" stroke="var(--color-gold)" strokeWidth="0.7" />
        <circle r="2.4" fill="var(--color-rose)" />
        <path
          d="M -14 0 L -8 -3 L -8 3 Z"
          fill="var(--color-gold)"
          opacity="0.85"
        />
        <path
          d="M 14 0 L 8 -3 L 8 3 Z"
          fill="var(--color-gold)"
          opacity="0.85"
        />
      </g>
    </svg>
  );
}
