import styled from "styled-components";
import { colors, fonts, media } from "@/styles/theme";

// 3 คอลัมน์ node สลับกับช่องลูกศรกว้าง 36px, แถว node สลับกับแถวลูกศรสูง 36px
export const Diagram = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 36px minmax(0, 1fr) 36px minmax(0, 1fr);
  grid-template-rows: ${(p) => Array.from({ length: p.$rows * 2 - 1 }, (_, i) => (i % 2 ? "36px" : "auto")).join(" ")};
  margin-top: 28px;

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: none;
  }
`;

export const Node = styled.div`
  grid-row: ${(p) => p.$row};
  grid-column: ${(p) => p.$col};
  min-width: 0;

  .inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    border: 1px solid ${colors.border};
    border-radius: 10px;
    background: ${colors.white};
  }

  ${media.mobile} {
    grid-row: auto;
    grid-column: auto;
  }
`;

export const NodeTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 14px;
`;

export const NodeNo = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background: ${colors.text};
  font-family: ${fonts.mono};
  font-size: 13px;
  font-weight: 500;
  color: ${colors.white};
`;

export const NodeActor = styled.span`
  font-family: ${fonts.mono};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.muted};
`;

export const NodeTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: ${colors.text};
`;

export const NodeDetail = styled.p`
  flex: 1;
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: ${colors.muted};
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
`;

export const Chip = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  background: ${colors.surface};
  font-family: ${fonts.mono};
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.text};
`;

export const Arrow = styled.div`
  grid-row: ${(p) => p.$row};
  grid-column: ${(p) => p.$col};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.muted};

  .mob {
    display: none;
  }

  ${media.mobile} {
    grid-row: auto;
    grid-column: auto;
    height: 32px;

    .desk {
      display: none;
    }
    .mob {
      display: flex;
    }
  }
`;
