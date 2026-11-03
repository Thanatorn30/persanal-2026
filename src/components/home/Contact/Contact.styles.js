import styled from "styled-components";
import { colors, fonts, ease, media } from "@/styles/theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 490px) minmax(0, 1fr);
  gap: 12px;

  ${media.ipad} {
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1fr);
  }

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Visual = styled.div`
  position: relative;
  height: 100%;
  min-height: 420px;
  border-radius: 10px;
  overflow: hidden;
  background: radial-gradient(circle at 30% 30%, #c8b98f, #6d5f3e 70%, #3a321f);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.mobile} {
    min-height: 280px;
  }
`;

// placeholder: หน้าจอคอมพิวเตอร์ย้อนยุค พร้อมตัวอักษรกระพริบ
export const Screen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62%;
  aspect-ratio: 4 / 3;
  border: 14px solid #e6dcc0;
  border-radius: 18px;
  background: #4e8c62;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35), inset 0 0 40px rgba(0, 0, 0, 0.45);
  transform: translate(-50%, -50%);
  transition: transform 0.9s ${ease};

  ${Visual}:hover & {
    transform: translate(-50%, -52%) scale(1.03);
  }
`;

export const ScreenText = styled.span`
  font-family: ${fonts.mono};
  font-size: clamp(22px, 3vw, 40px);
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${colors.white};
  text-shadow: 0 0 12px rgba(180, 255, 190, 0.8);

  &::after {
    content: "_";
    animation: blink 1s steps(1) infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;
