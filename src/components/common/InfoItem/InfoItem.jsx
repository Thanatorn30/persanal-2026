import RollText from "../RollText/RollText";
import { Item } from "./InfoItem.styles";

// ไอคอน + ข้อความ (เป็นลิงก์ถ้ามี href) เช่น ที่อยู่ เบอร์โทร อีเมล
// download = ให้ลิงก์ดาวน์โหลดไฟล์แทนการเปิด
export default function InfoItem({ icon, children, href, download, mono = false, muted = false }) {
  return (
    <Item
      as={href ? "a" : "span"}
      href={href}
      download={href ? download : undefined}
      className={href ? "roll-host" : undefined}
      $mono={mono}
      $muted={muted}
    >
      {icon}
      {href ? <RollText>{children}</RollText> : children}
    </Item>
  );
}
