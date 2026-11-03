import styled from "styled-components";
import { colors, fonts, media } from "@/styles/theme";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  padding: 24px;
  border-radius: 10px;
  background: ${colors.surface};

  ${media.mobile} {
    padding: 20px 16px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Status = styled.p`
  margin: 0;
  font-family: ${fonts.mono};
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.muted};
`;
