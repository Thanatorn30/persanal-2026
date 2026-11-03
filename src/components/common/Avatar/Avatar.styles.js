import styled from "styled-components";

export const Circle = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  border-radius: 100%;
  overflow: hidden;
  background: ${(p) => p.$bg};
  color: #ffffff;
  font-weight: 600;
  font-size: ${(p) => Math.round(p.$size * 0.36)}px;
  letter-spacing: -0.02em;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
