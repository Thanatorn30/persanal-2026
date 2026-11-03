import styled from "styled-components";
import { colors, fonts, ease } from "@/styles/theme";

export const StyledChip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 4px;
  background: ${(p) => (p.$dark ? colors.text : colors.white)};
  color: ${(p) => (p.$dark ? colors.white : colors.text)};
  font-family: ${fonts.mono};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  text-transform: uppercase;
  transition: background 0.3s ${ease}, color 0.3s ${ease};

  &:hover {
    background: ${colors.text};
    color: ${colors.white};
  }
`;
