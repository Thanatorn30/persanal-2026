// Design tokens ของทั้งเว็บ (สี / ฟอนต์ / breakpoint) — แก้ที่เดียวใช้ได้ทุก component
export const colors = {
  black: "#030303",
  text: "#000000",
  muted: "#555555",
  white: "#ffffff",
  surface: "#f3f4f6",
  border: "rgba(12, 12, 12, 0.2)",
  online: "#3ccd48",
  verified: "#4f7cff",
};

export const fonts = {
  sans: "var(--font-mona-sans), 'Mona Sans', sans-serif",
  mono: "var(--font-geist-mono), 'Geist Mono', monospace",
};

// ขนาดที่ออกแบบไว้: mobile(440) ipad(1032) desktop(1440)
// media.mobile ครอบจอเล็กทั้งหมด (<= 767) เพื่อไม่ให้จอ 441–767 ไปใช้ layout ของ ipad
export const breakpoints = {
  mobile: 440,
  ipad: 1032,
  desktop: 1440,
};

export const media = {
  mobile: "@media (max-width: 767px)",
  ipad: `@media (max-width: ${breakpoints.ipad}px)`,
  desktop: `@media (min-width: ${breakpoints.ipad + 1}px)`,
};

export const ease = "cubic-bezier(0.44, 0, 0.12, 1)";
