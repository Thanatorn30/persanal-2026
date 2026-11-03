import styled from "styled-components";
import { colors, fonts, media } from "@/styles/theme";

export const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 62px);
  min-height: calc(100svh - 62px);
  padding: 120px 30px 56px;
  scroll-margin-top: 62px;

  ${media.ipad} {
    min-height: auto;
    padding: 110px 24px 56px;
  }

  ${media.mobile} {
    padding: 72px 16px 40px;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const AvatarWrap = styled.div`
  margin-bottom: 24px;
  border-radius: 100%;
  background: ${colors.surface};
`;

export const NameRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const Name = styled.h1`

  margin: 0;
  font-family: ${fonts.sans};
  font-size: 32px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${colors.text};

  ${media.mobile} {
    font-size: 28px;
  }
`;

export const Verified = styled.span`
  display: inline-flex;
  color: ${colors.verified};

  svg {
    font-size: 22px;
  }
`;

export const Role = styled.p`
  margin: 6px 0 0;
  font-family: ${fonts.sans};
  font-size: 16px;
  line-height: 1.6;
  color: ${colors.muted};
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 24px;
  margin-top: 20px;
`;

export const Bio = styled.p`
  max-width: 600px;
  margin: 20px 0 0;
  font-family: ${fonts.sans};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: ${colors.text};

  ${media.mobile} {
    font-size: 17px;
  }
`;

export const Actions = styled.div`
  margin-top: 56px;

  ${media.mobile} {
    margin-top: 36px;
  }
`;

export const Logos = styled.div`
  margin-top: 80px;

  ${media.mobile} {
    margin-top: 56px;
  }
`;

export const BrandLogo = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${fonts.sans};
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.04em;
  color: ${colors.text};
  opacity: 0.85;
  white-space: nowrap;

  svg {
    font-size: 30px;
  }
`;
