import styled from "styled-components";
import { colors, fonts } from "@/styles/theme";

export const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 14px 4px 10px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  background: ${colors.white};
`;

export const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: ${colors.border};
`;

export const Label = styled.h2`
  margin: 0;
  font-family: ${fonts.mono};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${colors.text};
`;
