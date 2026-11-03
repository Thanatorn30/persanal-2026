import styled from "styled-components";
import { colors, fonts } from "@/styles/theme";

export const Item = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${(p) => (p.$mono ? fonts.mono : fonts.sans)};
  font-size: ${(p) => (p.$mono ? "14px" : "15px")};
  font-weight: ${(p) => (p.$mono ? 500 : 400)};
  text-transform: ${(p) => (p.$mono ? "uppercase" : "none")};
  color: ${(p) => (p.$muted ? colors.muted : colors.text)};

  &:hover {
    color: ${colors.text};
  }

  svg {
    font-size: 18px;
  }
`;
