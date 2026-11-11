import RollText from "../RollText/RollText";
import { StyledButton } from "./Button.styles";

/**
 * ปุ่มกลางของเว็บ
 * props: variant = dark | light | gray | outline, size = md | sm, fullWidth, radius,
 *        href (เป็นลิงก์) หรือ type/onClick (เป็นปุ่ม), icon (วางหน้าข้อความ)
 */
export default function Button({
  children,
  href,
  variant = "dark",
  size = "md",
  fullWidth = false,
  radius,
  icon,
  type = "button",
  className = "",
  ...props
}) {
  const asProps = href ? { as: "a", href } : { as: "button", type };

  return (
    <StyledButton
      {...asProps}
      className={`roll-host ${className}`}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $radius={radius}
      {...props}
    >
      {icon}
      {children}
    </StyledButton>
  );
}
