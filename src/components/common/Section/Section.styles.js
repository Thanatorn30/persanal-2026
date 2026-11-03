import styled from "styled-components";
import { colors, media } from "@/styles/theme";

export const StyledSection = styled.section`
  position: relative;
  padding: ${(p) => p.$padding || "120px 30px"};
  border-top: ${(p) => (p.$noBorder ? "0" : `1px solid ${colors.border}`)};
  scroll-margin-top: 62px;

  ${media.ipad} {
    padding: ${(p) => p.$paddingIpad || "100px 24px"};
  }

  ${media.mobile} {
    padding: ${(p) => p.$paddingMobile || "72px 16px"};
  }
`;

export const Head = styled.div`
  margin-bottom: 40px;

  ${media.mobile} {
    margin-bottom: 28px;
  }
`;
