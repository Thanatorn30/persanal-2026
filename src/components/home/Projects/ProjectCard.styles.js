import styled from "styled-components";
import { colors, fonts, ease, media } from "@/styles/theme";

export const CardLink = styled.a`
  display: block;
  color: ${colors.text};

  &:hover {
    color: ${colors.text};
  }
`;

export const Media = styled.div`
  position: relative;
  aspect-ratio: 560 / 594;
  border-radius: 10px;
  overflow: hidden;
  background: ${colors.surface};
`;

export const Image = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => `linear-gradient(145deg, ${p.$tone[0]}, ${p.$tone[1]})`};
  transition: transform 0.9s ${ease};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${CardLink}:hover & {
    transform: scale(1.06);
  }
`;

// mockup อุปกรณ์แบบ CSS ใช้เป็น placeholder เมื่อยังไม่มีรูปจริง
export const Device = styled.div`
  width: 42%;
  aspect-ratio: 9 / 19;
  border: 6px solid rgba(255, 255, 255, 0.85);
  border-radius: 34px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.35));
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
  transform: rotate(-18deg);
  transition: transform 0.9s ${ease};

  ${CardLink}:hover & {
    transform: rotate(-12deg) translateY(-8px);
  }
`;

export const View = styled.span`
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  background: ${colors.white};
  color: ${colors.text};
  opacity: 0;
  transform: scale(0.6) rotate(-45deg);
  transition: opacity 0.4s ${ease}, transform 0.5s ${ease};

  ${CardLink}:hover & {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }

  ${media.ipad} {
    opacity: 1;
    transform: none;
  }
`;

export const Name = styled.p`
  margin: 16px 0 0;
  font-family: ${fonts.mono};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${colors.muted};
`;

export const Title = styled.h3`
  margin: 6px 0 0;
  font-family: ${fonts.sans};
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;

  ${media.mobile} {
    font-size: 20px;
  }
`;
