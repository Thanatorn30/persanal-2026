"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  // ฟอนต์โหลดเสร็จแล้วความสูงหน้าเปลี่ยน → คำนวณตำแหน่ง trigger ใหม่
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

export { gsap, ScrollTrigger };
