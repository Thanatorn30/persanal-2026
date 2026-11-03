import styled from "styled-components";
import { media } from "@/styles/theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px 20px;

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }
`;

export const More = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 56px;
`;
