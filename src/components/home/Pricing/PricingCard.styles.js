import styled from "styled-components";
import { colors, fonts, media } from "@/styles/theme";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  background: ${(p) => (p.$dark ? colors.text : colors.surface)};
  color: ${(p) => (p.$dark ? colors.white : colors.text)};
`;

export const Head = styled.div`
  padding: 10px 10px 0;
`;

export const NameRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 32px;
`;

export const Name = styled.p`
  margin: 0;
  font-family: ${fonts.mono};
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Badge = styled.span`
  padding: 3px 14px;
  border-radius: 4px;
  background: ${colors.white};
  color: ${colors.text};
  font-family: ${fonts.mono};
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 24px;
`;

export const Price = styled.span`
  font-family: ${fonts.mono};
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.04em;

  ${media.mobile} {
    font-size: 34px;
  }
`;

export const Unit = styled.span`
  font-family: ${fonts.sans};
  font-size: 15px;
  opacity: 0.85;
`;

export const Detail = styled.p`
  margin: 12px 0 0;
  font-family: ${fonts.sans};
  font-size: 15px;
  line-height: 1.6;
  color: ${(p) => (p.$dark ? "rgba(255, 255, 255, 0.8)" : colors.muted)};
`;

export const Action = styled.div`
  margin: 20px 0 10px;
`;

export const Features = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  background: ${(p) => (p.$dark ? colors.text : colors.white)};
`;

export const FeaturesTitle = styled.h3`
  margin: 0 0 24px;
  font-family: ${fonts.sans};
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.02em;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 16px;
  margin: 0;
  padding: 0;
  list-style: none;

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${fonts.mono};
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;

  svg {
    font-size: 18px;
  }
`;
