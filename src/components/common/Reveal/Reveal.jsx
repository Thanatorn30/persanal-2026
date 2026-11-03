"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * fade-up ตอน scroll มาถึง (เหมือนต้นแบบ: opacity 0 → 1, translateY 30px → 0)
 * props: delay, y, duration, start (ตำแหน่ง trigger ของ ScrollTrigger), onLoad (เล่นทันทีไม่รอ scroll)
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  y = 30,
  duration = 0.9,
  start = "top 90%",
  onLoad = false,
  className,
  style,
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: onLoad ? undefined : { trigger: el, start, once: true },
        }
      );
    });
    return () => ctx.revert();
  }, [delay, y, duration, start, onLoad]);

  return (
    <Tag ref={ref} className={className} style={{ opacity: 0, ...style }}>
      {children}
    </Tag>
  );
}
