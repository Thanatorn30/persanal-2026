import styled from "styled-components";
import { media } from "@/styles/theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);
  }
`;
