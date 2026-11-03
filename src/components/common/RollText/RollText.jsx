import { Mask, Track, Line } from "./RollText.styles";

// ข้อความ 2 ชุดซ้อนกัน เมื่อ hover ที่ .roll-host ชุดล่างจะเลื่อนขึ้นมาแทน
export default function RollText({ children, lineHeight = "1.6em" }) {
  return (
    <Mask $lineHeight={lineHeight}>
      <Track>
        <Line $lineHeight={lineHeight}>{children}</Line>
        <Line $lineHeight={lineHeight} aria-hidden="true">
          {children}
        </Line>
      </Track>
    </Mask>
  );
}
