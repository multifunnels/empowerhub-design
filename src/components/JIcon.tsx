import * as React from "react";
import { type LucideIcon, type LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * JIcon — a Japanese-style wrapper around any Lucide icon.
 * Forces 1px stroke + square line-caps + miter joins so icons
 * read like thin brush marks with kanji-like square terminals.
 *
 * Color defaults to currentColor at 70% (matches the muted-grey UI).
 * Cyan is reserved for active/hover states (use className="text-primary").
 */
type JIconProps = LucideProps & {
  icon: LucideIcon;
  size?: number;
};

export const JIcon = React.forwardRef<SVGSVGElement, JIconProps>(
  ({ icon: Icon, size = 18, className, ...props }, ref) => (
    <Icon
      ref={ref}
      size={size}
      strokeWidth={1}
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={cn("text-foreground/70 shrink-0", className)}
      {...props}
    />
  ),
);
JIcon.displayName = "JIcon";

/* ---------- Custom inline SVG icons in the kanji spirit ---------- */

type GlyphProps = React.SVGProps<SVGSVGElement> & { size?: number };

const baseSvg = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  className: cn("text-foreground/70 shrink-0", className),
});

/** Hamburger menu drawn like the kanji 三 (three uneven strokes) */
export const KanjiMenu = ({ size = 22, className, ...rest }: GlyphProps) => (
  <svg {...baseSvg(size, className)} {...rest}>
    <line x1="3" y1="7" x2="21" y2="7" />
    <line x1="3" y1="12" x2="17" y2="12" />
    <line x1="3" y1="17" x2="20" y2="17" />
  </svg>
);

/** Close — two thin diagonals meeting precisely */
export const KanjiClose = ({ size = 22, className, ...rest }: GlyphProps) => (
  <svg {...baseSvg(size, className)} {...rest}>
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
);

/** Diamond bullet ◇ */
export const KanjiBullet = ({ size = 10, className, ...rest }: GlyphProps) => (
  <svg {...baseSvg(size, className)} {...rest}>
    <path d="M12 3 L21 12 L12 21 L3 12 Z" />
  </svg>
);

/** Ensō — broken-circle ornament (used as a brand mark) */
export const Enso = ({ size = 220, className, ...rest }: GlyphProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
    className={className}
    {...rest}
  >
    <path
      d="M 28 20
         A 38 38 0 1 1 22 35"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M 28 20
         A 38 38 0 1 1 22 35"
      stroke="currentColor"
      strokeWidth="0.3"
      strokeLinecap="round"
      strokeDasharray="0.4 1.6"
      fill="none"
      opacity="0.6"
    />
  </svg>
);
