import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

export const Viewport = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent);
`;

export const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} ${(p) => p.$duration}s linear infinite;

  &:hover {
    animation-play-state: ${(p) => (p.$pauseOnHover ? "paused" : "running")};
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.$gap}px;
  padding-right: ${(p) => p.$gap}px;
`;
