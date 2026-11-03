import RollText from "../RollText/RollText";
import { Item } from "./InfoItem.styles";

// ไอคอน + ข้อความ (เป็นลิงก์ถ้ามี href) เช่น ที่อยู่ เบอร์โทร อีเมล
export default function InfoItem({ icon, children, href, mono = false, muted = false }) {
  return (
    <Item
      as={href ? "a" : "span"}
      href={href}
      className={href ? "roll-host" : undefined}
      $mono={mono}
      $muted={muted}
    >
      {icon}
      {href ? <RollText>{children}</RollText> : children}
    </Item>
  );
}
