import styled from "styled-components";
import { colors, fonts, media } from "@/styles/theme";

export const ChartCard = styled.div`
  margin-top: 28px;
  padding: 24px;
  border: 1px solid ${colors.border};
  border-radius: 10px;

  ${media.mobile} {
    padding: 16px;
  }
`;

export const ChartHead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
`;

export const ChartTitle = styled.h3`
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: ${colors.text};
`;

export const ChartSub = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${colors.muted};
`;

export const ChartToggle = styled.button`
  flex-shrink: 0;
  padding: 6px 10px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  background: transparent;
  font-family: ${fonts.mono};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.text};
  cursor: pointer;

  &:hover {
    background: ${colors.surface};
  }
`;

export const ChartBox = styled.div`
  position: relative;
  width: 100%;

  svg {
    display: block;
    overflow: visible;
    outline: none;
  }

  svg:focus-visible {
    box-shadow: 0 0 0 2px ${colors.verified};
    border-radius: 4px;
  }

  .tick {
    font-family: ${fonts.mono};
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    fill: ${colors.muted};
  }

  .end {
    font-family: ${fonts.sans};
    font-size: 14px;
    font-weight: 600;
    fill: ${colors.text};
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  z-index: 2;
  min-width: 150px;
  padding: 10px 12px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  background: ${colors.white};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  pointer-events: none;
  transform: ${(p) => (p.$flip ? "translate(calc(-100% - 14px), -50%)" : "translate(14px, -50%)")};
`;

export const TooltipLabel = styled.p`
  margin: 0 0 4px;
  font-family: ${fonts.mono};
  font-size: 12px;
  text-transform: uppercase;
  color: ${colors.muted};
`;

export const TooltipValue = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: ${colors.text};
`;

export const TooltipDelta = styled.p`
  margin: 2px 0 0;
  font-size: 13px;
  color: ${colors.muted};
`;

export const ChartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    padding: 8px 12px;
    border-bottom: 1px solid ${colors.border};
    text-align: right;
    font-variant-numeric: tabular-nums;
  }

  th:first-child,
  td:first-child {
    text-align: left;
  }

  th {
    font-family: ${fonts.mono};
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${colors.muted};
  }

  td {
    color: ${colors.text};
  }
`;
