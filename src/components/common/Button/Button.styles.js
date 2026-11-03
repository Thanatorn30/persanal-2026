import styled, { css } from "styled-components";
import { colors, fonts, ease } from "@/styles/theme";

const variants = {
  dark: css`
    background: ${colors.black};
    color: ${colors.white};
  `,
  light: css`
    background: ${colors.white};
    color: ${colors.black};
  `,
  gray: css`
    background: #333333;
    color: ${colors.white};
  `,
  outline: css`
    background: ${colors.white};
    color: ${colors.black};
    border: 1px solid ${colors.border};
  `,
};

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${(p) => (p.$fullWidth ? "100%" : "auto")};
  padding: ${(p) => (p.$size === "sm" ? "8px 16px" : "12px 20px")};
  border: 0;
  border-radius: ${(p) => p.$radius || "6px"};
  font-family: ${fonts.mono};
  font-size: ${(p) => (p.$size === "sm" ? "14px" : "16px")};
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.4s ${ease}, opacity 0.3s;
  ${(p) => variants[p.$variant] || variants.dark}

  &:hover {
    color: inherit;
    ${(p) => variants[p.$variant] || variants.dark}
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
