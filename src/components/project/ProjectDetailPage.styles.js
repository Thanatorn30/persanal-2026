import styled from "styled-components";
import { media } from "@/styles/theme";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  align-items: start;

  ${media.ipad} {
    grid-template-columns: minmax(0, 1fr);
  }
`;
