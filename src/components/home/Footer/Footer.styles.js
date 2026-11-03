import styled from "styled-components";
import { colors, fonts, media } from "@/styles/theme";

export const Wrap = styled.footer`
  padding: 100px 30px 30px;
  border-top: 1px solid ${colors.border};

  ${media.ipad} {
    padding: 80px 24px 24px;
  }

  ${media.mobile} {
    padding: 64px 16px 20px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 48px;

  ${media.ipad} {
    flex-direction: column;
  }
`;

export const Intro = styled.div`
  max-width: 460px;
`;

export const Headline = styled.h2`
  margin: 0 0 28px;
  font-family: ${fonts.sans};
  font-size: 32px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${colors.text};

  ${media.mobile} {
    font-size: 26px;
  }
`;

export const Columns = styled.div`
  display: flex;
  gap: 56px;

  ${media.mobile} {
    flex-wrap: wrap;
    gap: 32px 40px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ColTitle = styled.p`
  margin: 0 0 6px;
  font-family: ${fonts.mono};
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.text};
`;

export const FooterLink = styled.a`
  font-family: ${fonts.mono};
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.muted};

  &:hover {
    color: ${colors.text};
  }
`;

export const NameWrap = styled.div`
  margin: 72px 0 40px;

  ${media.mobile} {
    margin: 48px 0 28px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid ${colors.border};

  ${media.mobile} {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const Copy = styled.p`
  margin: 0;
  font-family: ${fonts.sans};
  font-size: 14px;
  color: ${colors.muted};
`;

export const BackTop = styled.a`
  font-family: ${fonts.mono};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.text};
`;
