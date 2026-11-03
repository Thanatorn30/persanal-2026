import styled from "styled-components";
import { colors, fonts, ease } from "@/styles/theme";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 228px;
  padding: 24px 24px 28px;
  border-radius: 10px;
  background: ${colors.surface};
  transition: background 0.4s ${ease};

  &:hover {
    background: #eceef1;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const IconBox = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: ${colors.text};
  transition: transform 0.6s ${ease};

  svg {
    font-size: 26px;
  }

  ${Box}:hover & {
    transform: rotate(-12deg) scale(1.1);
  }
`;

export const Number = styled.span`
  font-family: ${fonts.mono};
  font-size: 16px;
  font-weight: 500;
  color: ${colors.muted};
`;

export const Title = styled.h3`
  margin: auto 0 0;
  padding-top: 32px;
  font-family: ${fonts.sans};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${colors.black};
`;

export const Text = styled.p`
  margin: 12px 0 0;
  font-family: ${fonts.sans};
  font-size: 15px;
  line-height: 1.6;
  color: ${colors.muted};
`;
