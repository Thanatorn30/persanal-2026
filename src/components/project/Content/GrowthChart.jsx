"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { colors } from "@/styles/theme";
import {
  ChartCard,
  ChartHead,
  ChartTitle,
  ChartSub,
  ChartToggle,
  ChartBox,
  Tooltip,
  TooltipLabel,
  TooltipValue,
  TooltipDelta,
  ChartTable,
} from "./GrowthChart.styles";

const HEIGHT = 300;
const PAD = { top: 24, right: 56, bottom: 32, left: 48 };
const LINE = colors.verified;

const fmt = (n) => n.toLocaleString("en-US");
// ตัวเลขต่ำกว่า 10,000 เขียนเต็ม, ตั้งแต่ 10,000 ขึ้นไปย่อเป็น K
const compact = (n) => (n >= 10000 ? `${+(n / 1000).toFixed(1)}K` : fmt(n));

// ปัดค่าสูงสุดของแกน y ให้เป็นเลขกลม ๆ แบ่ง 3–5 ช่อง เลือกแบบที่เพดานชิดค่าสูงสุดที่สุด
function niceTicks(max) {
  let best = null;
  for (const count of [3, 4, 5]) {
    const raw = max / count;
    const mag = 10 ** Math.floor(Math.log10(raw));
    const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => s >= raw);
    if (!best || step * count < best.top) best = { top: step * count, step, count };
  }
  return Array.from({ length: best.count + 1 }, (_, i) => i * best.step);
}

/**
 * กราฟเส้นจำนวนผู้ใช้ใหม่รายเดือน (series เดียว) + crosshair/tooltip ตอน hover + ตารางข้อมูล
 * chart = { title, subtitle, unit, data: [{ label, short, value, note }] }
 * value = ผู้ใช้ที่สมัครในเดือนนั้น (ไม่สะสม), ยอดสะสมคำนวณให้ในตาราง/tooltip
 * note = ข้อความเสริมใน tooltip/ตาราง เช่น เดือนที่ยังไม่จบ
 */
export default function GrowthChart({ chart }) {
  const { title, subtitle, unit = "users", data } = chart;
  const boxRef = useRef(null);
  const [width, setWidth] = useState(720);
  const [active, setActive] = useState(null);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [showTable]);

  const geo = useMemo(() => {
    const ticks = niceTicks(Math.max(...data.map((d) => d.value)));
    const yMax = ticks[ticks.length - 1];
    const innerW = Math.max(width - PAD.left - PAD.right, 1);
    const innerH = HEIGHT - PAD.top - PAD.bottom;
    const x = (i) => PAD.left + (data.length === 1 ? innerW / 2 : (i / (data.length - 1)) * innerW);
    const y = (v) => PAD.top + innerH - (v / yMax) * innerH;
    const pts = data.map((d, i) => [x(i), y(d.value)]);
    const line = pts.map(([px, py], i) => `${i ? "L" : "M"}${px},${py}`).join(" ");
    const base = PAD.top + innerH;
    const area = `${line} L${pts[pts.length - 1][0]},${base} L${pts[0][0]},${base} Z`;
    return { ticks, x, y, pts, line, area, base, innerW };
  }, [data, width]);

  // แสดง label แกน x แบบเว้นช่วงบนจอแคบ เพื่อไม่ให้ตัวหนังสือชนกัน
  const labelEvery = width < 480 ? 3 : width < 720 ? 2 : 1;
  const last = data.length - 1;
  const running = useMemo(() => data.reduce((acc, d, i) => [...acc, (acc[i - 1] ?? 0) + d.value], []), [data]);
  const total = running[last];
  const peak = data.reduce((best, d) => (d.value > best.value ? d : best), data[0]);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const step = geo.innerW / Math.max(data.length - 1, 1);
    const i = Math.round((px - PAD.left) / step);
    setActive(Math.min(Math.max(i, 0), last));
  };

  const onKey = (e) => {
    if (e.key === "ArrowRight") setActive((a) => Math.min((a ?? -1) + 1, last));
    if (e.key === "ArrowLeft") setActive((a) => Math.max((a ?? last + 1) - 1, 0));
    if (e.key === "Escape") setActive(null);
  };

  const a = active != null ? geo.pts[active] : null;

  return (
    <ChartCard>
      <ChartHead>
        <div>
          <ChartTitle>{title}</ChartTitle>
          {subtitle && <ChartSub>{subtitle}</ChartSub>}
        </div>
        <ChartToggle type="button" onClick={() => setShowTable((s) => !s)} aria-pressed={showTable}>
          {showTable ? "Show chart" : "Show table"}
        </ChartToggle>
      </ChartHead>

      {showTable ? (
        <ChartTable>
          <thead>
            <tr>
              <th>Month</th>
              <th>New {unit}</th>
              <th>Total so far</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={d.label}>
                <td>
                  {d.label}
                  {d.note && <small> ({d.note})</small>}
                </td>
                <td>{fmt(d.value)}</td>
                <td>{fmt(running[i])}</td>
              </tr>
            ))}
          </tbody>
        </ChartTable>
      ) : (
        <ChartBox ref={boxRef}>
          <svg
            width={width}
            height={HEIGHT}
            role="img"
            aria-label={`${title}: ${fmt(total)} ${unit} from ${data[0].label} to ${data[last].label}, peaking at ${fmt(peak.value)} in ${peak.label}`}
            tabIndex={0}
            onMouseMove={onMove}
            onMouseLeave={() => setActive(null)}
            onKeyDown={onKey}
            onBlur={() => setActive(null)}
          >
            {/* gridlines + y ticks */}
            {geo.ticks.map((t) => (
              <g key={t}>
                <line x1={PAD.left} x2={width - PAD.right} y1={geo.y(t)} y2={geo.y(t)} stroke="#e5e7eb" strokeWidth="1" />
                <text x={PAD.left - 10} y={geo.y(t)} dy="0.32em" textAnchor="end" className="tick">
                  {compact(t)}
                </text>
              </g>
            ))}

            {/* x labels */}
            {data.map((d, i) =>
              i % labelEvery === 0 || i === last ? (
                <text key={d.label} x={geo.x(i)} y={HEIGHT - 8} textAnchor="middle" className="tick">
                  {d.short ?? d.label}
                </text>
              ) : null
            )}

            <path d={geo.area} fill={LINE} fillOpacity="0.1" />
            <path d={geo.line} fill="none" stroke={LINE} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />

            {/* end dot + end label */}
            <circle cx={geo.pts[last][0]} cy={geo.pts[last][1]} r="5" fill={LINE} stroke={colors.white} strokeWidth="2" />
            <text x={geo.pts[last][0] + 10} y={geo.pts[last][1]} dy="0.32em" className="end">
              {compact(data[last].value)}
            </text>

            {/* crosshair */}
            {a && (
              <g pointerEvents="none">
                <line x1={a[0]} x2={a[0]} y1={PAD.top} y2={geo.base} stroke="#9ca3af" strokeWidth="1" />
                <circle cx={a[0]} cy={a[1]} r="5" fill={LINE} stroke={colors.white} strokeWidth="2" />
              </g>
            )}
          </svg>

          {a && (
            <Tooltip style={{ left: a[0], top: a[1] }} $flip={a[0] > width - 180}>
              <TooltipLabel>{data[active].label}</TooltipLabel>
              <TooltipValue>
                {fmt(data[active].value)} new {unit}
              </TooltipValue>
              <TooltipDelta>{fmt(running[active])} total so far</TooltipDelta>
              {data[active].note && <TooltipDelta>{data[active].note}</TooltipDelta>}
            </Tooltip>
          )}
        </ChartBox>
      )}
    </ChartCard>
  );
}
