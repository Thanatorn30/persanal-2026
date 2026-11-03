import { StyledChip } from "./Chip.styles";

// ป้ายเล็ก เช่น skill — dark = พื้นดำ
export default function Chip({ children, dark = false }) {
  return <StyledChip $dark={dark}>{children}</StyledChip>;
}
