import { Tag, Dot, Label } from "./SectionTag.styles";

// ป้ายหัวข้อ section เช่น "• ABOUT MY SELF"
export default function SectionTag({ children, as = "h2" }) {
  return (
    <Tag>
      <Dot />
      <Label as={as}>{children}</Label>
    </Tag>
  );
}
