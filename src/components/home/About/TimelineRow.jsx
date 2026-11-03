import Reveal from "@/components/common/Reveal/Reveal";
import SectionTag from "@/components/common/SectionTag/SectionTag";
import { Row, TagCol, DotCol, Dot } from "./TimelineRow.styles";

// 1 แถวของ timeline: ป้ายหัวข้อ (ซ้าย) + จุด (กลาง) + เนื้อหา (ขวา)
export default function TimelineRow({ tag, children }) {
  return (
    <Row>
      <TagCol>
        <Reveal>
          <SectionTag>{tag}</SectionTag>
        </Reveal>
      </TagCol>
      <DotCol>
        <Dot />
      </DotCol>
      <Reveal>{children}</Reveal>
    </Row>
  );
}
