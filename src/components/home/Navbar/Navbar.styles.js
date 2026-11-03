import styled, { keyframes } from "styled-components";
import { colors, fonts, ease, media } from "@/styles/theme";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(60, 205, 72, 0.6); }
  70% { box-shadow: 0 0 0 6px rgba(60, 205, 72, 0); }
  100% { box-shadow: 0 0 0 0 rgba(60, 205, 72, 0); }
`;

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  height: 62px;
  border-bottom: 1px solid ${colors.border};
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const Inner = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 100%;
  padding: 0 30px;

  ${media.ipad} {
    grid-template-columns: 1fr auto;
    padding: 0 24px;
  }

  ${media.mobile} {
    padding: 0 16px;
  }
`;

export const Logo = styled.a`
  justify-self: start;
  display: inline-flex;
  align-items: flex-start;
  font-family: ${fonts.sans};
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.03em;
  color: ${colors.text};

  sup {
    top: 0;
    margin-left: 2px;
    font-size: 13px;
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;

  ${media.ipad} {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-family: ${fonts.mono};
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.text};
`;

export const Cta = styled.a`
  justify-self: end;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${fonts.mono};
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.text};

  ${media.ipad} {
    display: none;
  }
`;

export const OnlineDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 12px;
  background: ${colors.online};
  animation: ${pulse} 2s infinite;
`;

export const Burger = styled.button`
  display: none;
  justify-self: end;
  position: relative;
  width: 32px;
  height: 32px;
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    position: absolute;
    left: 6px;
    width: 20px;
    height: 2px;
    border-radius: 2px;
    background: ${colors.text};
    transition: transform 0.4s ${ease}, opacity 0.3s ${ease}, top 0.4s ${ease};
  }

  span:nth-child(1) {
    top: ${(p) => (p.$open ? "15px" : "9px")};
    transform: rotate(${(p) => (p.$open ? "45deg" : "0")});
  }
  span:nth-child(2) {
    top: 15px;
    opacity: ${(p) => (p.$open ? 0 : 1)};
  }
  span:nth-child(3) {
    top: ${(p) => (p.$open ? "15px" : "21px")};
    transform: rotate(${(p) => (p.$open ? "-45deg" : "0")});
  }

  ${media.ipad} {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 62px;
  left: 0;
  right: 0;
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: ${(p) => (p.$open ? "16px 24px 24px" : "0 24px")};
  max-height: ${(p) => (p.$open ? "420px" : "0")};
  overflow: hidden;
  border-bottom: ${(p) => (p.$open ? `1px solid ${colors.border}` : "0")};
  background: ${colors.white};
  transition: max-height 0.5s ${ease}, padding 0.5s ${ease};

  ${media.ipad} {
    display: flex;
  }

  ${media.mobile} {
    padding: ${(p) => (p.$open ? "12px 16px 20px" : "0 16px")};
  }
`;

export const MobileLink = styled.a`
  padding: 12px 0;
  border-bottom: 1px solid ${colors.surface};
  font-family: ${fonts.mono};
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.text};
  opacity: ${(p) => (p.$open ? 1 : 0)};
  transform: translateY(${(p) => (p.$open ? "0" : "-8px")});
  transition: opacity 0.4s ${ease}, transform 0.4s ${ease};
  transition-delay: ${(p) => (p.$open ? p.$delay : 0)}s;
`;

export const MobileCta = styled.div`
  margin-top: 16px;
`;
