import { Viewport, Track, Group } from "./Marquee.styles";

// แถบเลื่อนไม่สิ้นสุด (ทำซ้ำ children 2 ชุดเพื่อให้วนต่อเนื่อง)
export default function Marquee({ children, duration = 30, gap = 64, pauseOnHover = false }) {
  return (
    <Viewport>
      <Track $duration={duration} $pauseOnHover={pauseOnHover}>
        <Group $gap={gap}>{children}</Group>
        <Group $gap={gap} aria-hidden="true">
          {children}
        </Group>
      </Track>
    </Viewport>
  );
}
