import styled from "styled-components";
import { colors, media } from "@/styles/theme";

export const Row = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 70px minmax(0, 710px);
  padding-bottom: 8px;

  &:last-child {
    padding-bottom: 0;
  }

  ${media.ipad} {
    grid-template-columns: 180px 50px minmax(0, 1fr);
  }

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
    padding-bottom: 32px;
  }
`;

export const TagCol = styled.div`
  padding-top: 0;

  ${media.desktop} {
    position: sticky;
    top: 92px;
    align-self: start;
  }
`;

export const DotCol = styled.div`
  position: relative;

  ${media.mobile} {
    display: none;
  }
`;

export const Dot = styled.span`
  position: absolute;
  top: 12px;
  left: 51%;
  z-index: 2;
  width: 9px;
  height: 9px;
  border-radius: 100%;
  background: ${colors.text};
  transform: translateX(-50%);
`;
