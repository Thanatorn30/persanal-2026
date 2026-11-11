"use client";
import { useEffect, useState } from "react";

/**
 * คืนค่า id ของ section ที่กำลังอ่านอยู่ (ใช้ไฮไลต์เมนูด้านซ้าย)
 * section ที่หัวข้อผ่านเส้น offset (px จากขอบบน) ล่าสุดถือว่า active
 */
export default function useScrollSpy(ids, offset = 160) {
  const [activeId, setActiveId] = useState(ids[0]);
  const key = ids.join("|");

  useEffect(() => {
    const list = key.split("|");
    let frame = 0;

    const update = () => {
      frame = 0;
      let current = list[0];
      for (const id of list) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      // เลื่อนถึงล่างสุดแล้ว ให้ section สุดท้าย active
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const last = document.getElementById(list[list.length - 1]);
      if (atBottom && last && last.getBoundingClientRect().top < window.innerHeight) current = list[list.length - 1];
      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [key, offset]);

  return activeId;
}
