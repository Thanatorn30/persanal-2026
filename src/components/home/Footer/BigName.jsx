"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import useInView from "@/hooks/useInView";
import { Wrap, Text, Char } from "./BigName.styles";

const BASE_SIZE = 100;

// ชื่อตัวใหญ่เต็มความกว้าง + ตัวอักษรเด้งขึ้นทีละตัวตอน scroll มาถึง
export default function BigName({ children }) {
  const [wrapRef, inView] = useInView({ threshold: 0.3 });
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(BASE_SIZE);
  const chars = String(children).split("");

  // ปรับขนาดฟอนต์ให้ข้อความพอดีกับความกว้างกล่อง
  useLayoutEffect(() => {
    const fit = () => {
      const wrap = wrapRef.current;
      const text = textRef.current;
      if (!wrap || !text) return;
      const current = parseFloat(getComputedStyle(text).fontSize) || BASE_SIZE;
      const next = Math.floor(((current * wrap.clientWidth) / text.offsetWidth) * 0.99);
      setFontSize((prev) => (Math.abs(prev - next) > 1 ? next : prev));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrapRef.current);
    document.fonts?.ready.then(fit);
    return () => ro.disconnect();
  }, [children, wrapRef]);

  // ขนาดฟอนต์เปลี่ยน → ความสูงหน้าเปลี่ยน ให้ ScrollTrigger ของ section อื่นคำนวณตำแหน่งใหม่
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [fontSize]);

  return (
    <Wrap ref={wrapRef}>
      <Text ref={textRef} style={{ fontSize }} aria-label={children}>
        {chars.map((char, i) => (
          <Char key={i} aria-hidden="true" $show={inView} $delay={i * 0.04}>
            {char}
          </Char>
        ))}
      </Text>
    </Wrap>
  );
}
