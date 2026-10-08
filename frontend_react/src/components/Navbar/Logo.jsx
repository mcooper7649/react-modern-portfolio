import React from "react";

// Vector brand mark: a torii gate (the dojo entrance) cut out of a rounded
// hanko-style seal, paired with a "mycodedojo" wordmark. Colors come from
// CSS custom properties so it follows the site palette.
export const LogoMark = ({ size = 36, title }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    role={title ? "img" : undefined}
    aria-hidden={title ? undefined : true}
    className="app__logo-mark"
  >
    {title && <title>{title}</title>}
    <rect width="32" height="32" rx="9" fill="var(--secondary-color)" />
    <g fill="#fff">
      <path d="M5.5 9.6c3.4.9 6.9 1.3 10.5 1.3s7.1-.4 10.5-1.3v2.4c-3.4.8-6.9 1.2-10.5 1.2s-7.1-.4-10.5-1.2z" />
      <rect x="8.5" y="15.4" width="15" height="1.9" rx=".5" />
      <path d="M10.3 12.6h2.3l-.3 13.4H10z" />
      <path d="M19.4 12.6h2.3l.3 13.4h-2.3z" />
    </g>
    <circle cx="16" cy="21.6" r="1.6" fill="var(--accent-color)" />
  </svg>
);

const Logo = () => (
  <span className="app__logo">
    <LogoMark />
    <span className="app__logo-word">
      my<strong>code</strong>
      <em>dojo</em>
    </span>
  </span>
);

export default Logo;
