import styled from "styled-components";
import { colors, fonts, ease, media } from "@/styles/theme";

export const CardLink = styled.a`
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 12px 12px 16px 12px;
  display: block;
  color: ${colors.text};

  &:hover {
    color: ${colors.text};
  }
`;

// สัดส่วนเท่ากับภาพปกโปรเจกต์ (2100×1350 = 14:9) ภาพจึงเต็มกรอบพอดี ไม่มีขอบว่าง
export const Media = styled.div`
  position: relative;
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.6s ${ease}; */

 
  width: 100%;
  aspect-ratio: 14 / 9;
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
  height: 78%;
  aspect-ratio: 9 / 19;
  border: 6px solid rgba(255, 255, 255, 0.85);
  border-radius: 34px;
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.25),
    rgba(0, 0, 0, 0.35)
  );
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
  background: #222222;
  color: #ffffff;
  opacity: 0;
  transform: scale(0.6) rotate(-45deg);
  transition:
    opacity 0.4s ${ease},
    transform 0.5s ${ease};

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
