import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import SouthIcon from "@mui/icons-material/South";
import Reveal from "@/components/common/Reveal/Reveal";
import { Diagram, Node, NodeTop, NodeNo, NodeActor, NodeTitle, NodeDetail, Chips, Chip, Arrow } from "./FlowDiagram.styles";

const COLS = 3;

// ตำแหน่งบน grid แบบงู (snake): แถวคู่ซ้าย→ขวา, แถวคี่ขวา→ซ้าย
// grid มีช่อง node (คอลัมน์/แถวเลขคี่) สลับกับช่องลูกศร (เลขคู่)
function cell(i) {
  const row = Math.floor(i / COLS);
  const pos = i % COLS;
  const col = row % 2 === 0 ? pos : COLS - 1 - pos;
  return { row, col };
}

function arrowFor(i) {
  const a = cell(i);
  const b = cell(i + 1);
  if (a.row === b.row) {
    return {
      gridRow: 1 + 2 * a.row,
      gridColumn: 2 + 2 * Math.min(a.col, b.col),
      Icon: b.col > a.col ? EastIcon : WestIcon,
    };
  }
  return { gridRow: 2 + 2 * a.row, gridColumn: 1 + 2 * a.col, Icon: SouthIcon };
}

/**
 * แผนภาพลำดับการทำงานของระบบ
 * steps = [{ title, actor, detail, services: [] }]
 * desktop: เรียงแบบงูแถวละ 3 / mobile: เรียงลงแนวตั้ง
 */
export default function FlowDiagram({ steps }) {
  const rows = Math.ceil(steps.length / COLS);

  return (
    <Diagram role="list" $rows={rows}>
      {steps.map((step, i) => {
        const { row, col } = cell(i);
        const arrow = i < steps.length - 1 ? arrowFor(i) : null;
        return [
          <Node key={step.title} role="listitem" $row={1 + 2 * row} $col={1 + 2 * col}>
            <Reveal delay={(i % COLS) * 0.08} style={{ height: "100%" }}>
              <div className="inner">
                <NodeTop>
                  <NodeNo>{String(i + 1).padStart(2, "0")}</NodeNo>
                  <NodeActor>{step.actor}</NodeActor>
                </NodeTop>
                <NodeTitle>{step.title}</NodeTitle>
                <NodeDetail>{step.detail}</NodeDetail>
                {step.services?.length > 0 && (
                  <Chips aria-label="Services">
                    {step.services.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </Chips>
                )}
              </div>
            </Reveal>
          </Node>,
          arrow && (
            <Arrow key={`${step.title}-arrow`} aria-hidden="true" $row={arrow.gridRow} $col={arrow.gridColumn}>
              <span className="desk">
                <arrow.Icon fontSize="small" />
              </span>
              <span className="mob">
                <SouthIcon fontSize="small" />
              </span>
            </Arrow>
          ),
        ];
      })}
    </Diagram>
  );
}
