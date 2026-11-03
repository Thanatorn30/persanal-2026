import styled from "styled-components";
import { colors, fonts, ease } from "@/styles/theme";

export const Box = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  height: 100%;
  min-height: 300px;
  margin: 0;
  padding: 30px 30px 24px;
  border-radius: 10px;
  background: ${colors.surface};
  transition: transform 0.5s ${ease};

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Quote = styled.blockquote`
  margin: 0;
  font-family: ${fonts.sans};
  font-size: 16px;
  line-height: 1.6;
  color: ${colors.muted};
`;

export const Author = styled.figcaption`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Who = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Name = styled.p`
  margin: 0;
  font-family: ${fonts.mono};
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.text};
`;

export const Role = styled.p`
  margin: 2px 0 0;
  font-family: ${fonts.sans};
  font-size: 14px;
  color: ${colors.muted};
`;

export const Social = styled.span`
  display: inline-flex;
  color: ${colors.text};

  svg {
    font-size: 20px;
  }
`;
