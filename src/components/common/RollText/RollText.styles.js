import styled from "styled-components";
import { ease } from "@/styles/theme";

// ใส่ className="roll-host" ที่ element แม่ (ปุ่ม/ลิงก์) เพื่อให้ hover แล้วตัวอักษรเลื่อนขึ้น
export const Mask = styled.span`
  position: relative;
  display: inline-flex;
  overflow: hidden;
  height: ${(p) => p.$lineHeight};
  line-height: ${(p) => p.$lineHeight};
  vertical-align: top;
`;

export const Track = styled.span`
  display: flex;
  flex-direction: column;
  transition: transform 0.5s ${ease};

  .roll-host:hover & {
    transform: translateY(-50%);
  }
`;

export const Line = styled.span`
  display: block;
  height: ${(p) => p.$lineHeight};
  white-space: nowrap;
`;
