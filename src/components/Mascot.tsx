import type { SVGProps } from "react";

type MascotProps = SVGProps<SVGSVGElement> & {
  /** Body fill — sky blue by default. */
  body?: string;
  /** Sprout color — leaf green by default. */
  sprout?: string;
};

/**
 * 小さな働き者キャラクター。ピクミンのように頭から芽が生え、
 * 短い手足で何かをせっせと運んでいるイメージ。フラットでマットな質感を維持する。
 */
export function Mascot({
  body = "#7cc1e8",
  sprout = "#7bbf6a",
  className,
  ...props
}: MascotProps) {
  return (
    <svg
      viewBox="0 0 64 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...props}
    >
      {/* sprout stem */}
      <path
        d="M32 14 V4"
        stroke={sprout}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* leaf */}
      <path
        d="M32 6 C24 2 22 8 26 12 C30 14 33 11 32 6 Z"
        fill={sprout}
      />
      {/* head & body */}
      <ellipse cx="32" cy="38" rx="20" ry="22" fill={body} />
      {/* cheek hint */}
      <circle cx="22" cy="44" r="2.2" fill="#ff9aa8" opacity="0.55" />
      <circle cx="42" cy="44" r="2.2" fill="#ff9aa8" opacity="0.55" />
      {/* eyes */}
      <ellipse cx="25.5" cy="38" rx="1.7" ry="2.4" fill="#1f2937" />
      <ellipse cx="38.5" cy="38" rx="1.7" ry="2.4" fill="#1f2937" />
      {/* tiny smile */}
      <path
        d="M28 46 Q32 49 36 46"
        stroke="#1f2937"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* legs */}
      <rect x="22" y="58" width="4" height="10" rx="2" fill={body} />
      <rect x="38" y="58" width="4" height="10" rx="2" fill={body} />
      {/* feet */}
      <ellipse cx="24" cy="70" rx="5" ry="3" fill="#2c3142" />
      <ellipse cx="40" cy="70" rx="5" ry="3" fill="#2c3142" />
    </svg>
  );
}

/** ふわっとした雲。フラットで影なし。 */
export function Cloud({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 56"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...props}
    >
      <path
        d="M22 40 C8 40 6 22 20 22 C22 12 38 10 42 18 C48 8 66 10 68 22 C82 18 92 28 88 38 C100 36 108 50 96 52 L24 52 C12 52 10 44 22 40 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** 葉っぱ（成長や好奇心の象徴）。 */
export function Leaf({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...props}
    >
      <path
        d="M6 26 C6 12 16 4 28 4 C28 16 20 26 6 26 Z"
        fill="currentColor"
      />
      <path
        d="M8 24 L22 10"
        stroke="white"
        strokeOpacity="0.6"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
