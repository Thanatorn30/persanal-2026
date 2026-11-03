import styled, { css } from "styled-components";
import { colors } from "@/styles/theme";

const variants = {
  gray: css`
    background: ${colors.surface};
    color: ${colors.text};
  `,
  white: css`
    background: ${colors.white};
    color: ${colors.text};
  `,
  dark: css`
    background: ${colors.text};
    color: ${colors.white};
  `,
};

export const StyledCard = styled.div`
  position: relative;
  border-radius: ${(p) => p.$radius || "10px"};
  padding: ${(p) => p.$padding || "24px"};
  overflow: hidden;
  ${(p) => variants[p.$variant] || variants.gray}
`;
