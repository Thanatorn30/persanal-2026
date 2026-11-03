import styled from "styled-components";
import { colors, fonts } from "@/styles/theme";

export const Wrap = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Text = styled.p`
  display: flex;
  width: max-content;
  margin: 0 auto;
  font-family: ${fonts.sans};
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.04em;
  white-space: nowrap;
  color: ${colors.text};
`;

export const Char = styled.span`
  display: inline-block;
  white-space: pre;
  transform: translateY(${(p) => (p.$show ? "0" : "110%")});
  transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: ${(p) => p.$delay}s;
`;
