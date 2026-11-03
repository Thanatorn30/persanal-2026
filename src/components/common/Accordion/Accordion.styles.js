import styled from "styled-components";
import { colors, fonts, ease, media } from "@/styles/theme";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.div`
  border-radius: 10px;
  background: ${colors.surface};
  overflow: hidden;
`;

export const Trigger = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 20px 24px 20px 30px;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;

  ${media.mobile} {
    padding: 18px 16px 18px 20px;
  }
`;

export const Question = styled.h3`
  margin: 0;
  font-family: ${fonts.sans};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${colors.text};

  ${media.mobile} {
    font-size: 17px;
  }
`;

export const Icon = styled.span`
  position: relative;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: ${colors.text};

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 2px;
    border-radius: 2px;
    background: ${colors.white};
    transform: translate(-50%, -50%);
    transition: transform 0.4s ${ease};
  }

  &::after {
    transform: translate(-50%, -50%) rotate(${(p) => (p.$open ? "0deg" : "90deg")});
  }
`;

// ใช้ grid-template-rows 0fr → 1fr เพื่อ animate ความสูงแบบ auto
export const Panel = styled.div`
  display: grid;
  grid-template-rows: ${(p) => (p.$open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.5s ${ease};
`;

export const PanelInner = styled.div`
  overflow: hidden;
`;

export const Answer = styled.p`
  max-width: 640px;
  margin: 0;
  padding: 0 30px 24px;
  font-family: ${fonts.sans};
  font-size: 16px;
  line-height: 1.6;
  color: ${colors.muted};
  opacity: ${(p) => (p.$open ? 1 : 0)};
  transition: opacity 0.4s ${ease};

  ${media.mobile} {
    padding: 0 20px 20px;
    font-size: 15px;
  }
`;
