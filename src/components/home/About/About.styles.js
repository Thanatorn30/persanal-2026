import styled from "styled-components";
import { colors, fonts, media } from "@/styles/theme";

export const Timeline = styled.div`
  position: relative;
`;

// เส้นแนวตั้ง: track สีจาง + fill สีดำที่ยืดตาม scroll
export const Line = styled.div`
  position: absolute;
  top: 16px;
  bottom: 0;
  left: calc(100% - 710px - 35px);
  width: 1px;
  background: ${colors.border};

  ${media.ipad} {
    left: 205px;
  }

  ${media.mobile} {
    display: none;
  }
`;

export const LineFill = styled.div`
  position: absolute;
  inset: 0;
  width: 2px;
  left: -0.5px;
  background: ${colors.text};
  transform-origin: top;
  transform: scaleY(0);
`;

export const Text = styled.p`
  margin: 0;
  font-family: ${fonts.sans};
  font-size: 16px;
  line-height: 1.6;
  color: ${colors.muted};
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  margin-top: 20px;
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 24px;

  ${media.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const StatValue = styled.p`
  margin: 0;
  font-family: ${fonts.mono};
  font-size: 36px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${colors.text};
`;

export const StatLabel = styled.p`
  margin: 6px 0 0;
  font-family: ${fonts.mono};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${colors.muted};
`;

export const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Entry = styled.div`
  padding: 16px;
  border-radius: 6px;
  transition: background 0.3s;

  &:hover {
    background: ${colors.white};
  }
`;

export const Period = styled.p`
  margin: 0;
  font-family: ${fonts.mono};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${colors.muted};
`;

export const EntryTitle = styled.h3`
  margin: 12px 0 0;
  font-family: ${fonts.mono};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${colors.text};
`;

export const EntryText = styled.p`
  margin: 10px 0 0;
  font-family: ${fonts.sans};
  font-size: 15px;
  line-height: 1.6;
  color: ${colors.muted};
`;
