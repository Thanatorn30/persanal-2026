import styled from "styled-components";
import { colors } from "@/styles/theme";

// กรอบกลางจอกว้าง 1200px มีเส้นขอบซ้าย-ขวา (ตามต้นแบบ)
export const Frame = styled.main`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-left: 1px solid ${colors.border};
  border-right: 1px solid ${colors.border};
  background: ${colors.white};
`;
