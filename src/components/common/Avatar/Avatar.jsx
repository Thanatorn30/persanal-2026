import { Circle } from "./Avatar.styles";

const palette = [
  "linear-gradient(135deg, #2b2b2b, #6b6b6b)",
  "linear-gradient(135deg, #3a4a5a, #8aa0b4)",
  "linear-gradient(135deg, #5b4636, #b08f73)",
  "linear-gradient(135deg, #2f3d33, #7f9c86)",
];

// รูปโปรไฟล์วงกลม — ถ้าไม่มี src จะแสดงตัวอักษรย่อบนพื้น gradient แทน
export default function Avatar({ src, name = "", size = 40 }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const bg = palette[name.length % palette.length];

  return (
    <Circle $size={size} $bg={bg}>
      {src ? <img src={src} alt={name} /> : initials}
    </Circle>
  );
}
