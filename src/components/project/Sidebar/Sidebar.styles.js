import styled from "styled-components";
import { colors, fonts, ease, media } from "@/styles/theme";

export const Aside = styled.aside`
  position: sticky;
  top: 62px;
  height: calc(100vh - 62px);
  border-right: 1px solid ${colors.border};
  overflow-y: auto;
  scrollbar-width: thin;

  /* ipad / mobile: กลายเป็นแถบเมนูแนวนอนติดใต้ navbar */
  ${media.ipad} {
    z-index: 40;
    height: auto;
    border-right: 0;
    border-bottom: 1px solid ${colors.border};
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  min-height: 100%;
  padding: 40px 20px 30px 30px;

  ${media.ipad} {
    flex-direction: row;
    min-height: 0;
    padding: 10px 24px;
  }

  ${media.mobile} {
    padding: 10px 16px;
  }
`;

export const Group = styled.div``;

export const ProjectGroup = styled.div`
  ${media.ipad} {
    display: none;
  }
`;

export const GroupTitle = styled.p`
  margin: 0 0 12px;
  padding-left: 12px;
  font-family: ${fonts.mono};
  font-size: 13px;
  font-weight: 500;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${colors.muted};

  ${media.ipad} {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;

  ${media.ipad} {
    flex-direction: row;
    gap: 6px;
    white-space: nowrap;
  }
`;

export const MenuLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 4px;
  font-family: ${fonts.sans};
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  color: ${(p) => (p.$active ? colors.white : colors.muted)};
  background: ${(p) => (p.$active ? colors.text : "transparent")};
  transition: background 0.3s ${ease}, color 0.3s ${ease};

  &:hover {
    color: ${(p) => (p.$active ? colors.white : colors.text)};
    background: ${(p) => (p.$active ? colors.text : colors.surface)};
  }

  ${media.ipad} {
    padding: 6px 12px;
    font-size: 14px;
    border: 1px solid ${(p) => (p.$active ? colors.text : colors.border)};
  }
`;

export const Count = styled.span`
  font-family: ${fonts.mono};
  font-size: 12px;
  opacity: 0.6;
`;

export const Back = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-left: 12px;
  font-family: ${fonts.mono};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.text};

  ${media.ipad} {
    display: none;
  }
`;
