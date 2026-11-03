import { StyledCard } from "./Card.styles";

// การ์ดพื้นหลังโค้งมน ใช้ซ้ำทุก section — variant = gray | white | dark
export default function Card({ children, variant = "gray", padding, radius, as, className, ...props }) {
  return (
    <StyledCard
      as={as}
      className={className}
      $variant={variant}
      $padding={padding}
      $radius={radius}
      {...props}
    >
      {children}
    </StyledCard>
  );
}
