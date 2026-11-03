"use client";
import useInView from "@/hooks/useInView";
import { Wrap, Column, Digit, Static } from "./Odometer.styles";

const LOOPS = 2;
const DIGITS = Array.from({ length: 10 * LOOPS }, (_, i) => i % 10);

// ตัวเลขหมุนแบบเครื่องนับ เมื่อ scroll มาเห็น เช่น value="$299" หรือ "50+"
export default function Odometer({ value, className }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const chars = String(value).split("");

  return (
    <Wrap ref={ref} className={className} aria-label={value}>
      {chars.map((char, i) => {
        if (!/\d/.test(char)) return <Static key={i} aria-hidden="true">{char}</Static>;
        const target = 10 * (LOOPS - 1) + Number(char);
        return (
          <Column
            key={i}
            aria-hidden="true"
            $active={inView}
            $index={target}
            $total={DIGITS.length}
            $delay={i * 0.08}
          >
            {DIGITS.map((d, j) => (
              <Digit key={j}>{d}</Digit>
            ))}
          </Column>
        );
      })}
    </Wrap>
  );
}
