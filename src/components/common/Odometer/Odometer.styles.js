import styled from "styled-components";

export const Wrap = styled.span`
  display: inline-flex;
  align-items: flex-start;
  height: 1.1em;
  line-height: 1.1em;
  overflow: hidden;
`;

export const Column = styled.span`
  display: inline-flex;
  flex-direction: column;
  transform: translateY(${(p) => (p.$active ? `-${(p.$index / p.$total) * 100}%` : "0%")});
  transition: transform 1.6s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: ${(p) => p.$delay}s;
`;

export const Digit = styled.span`
  display: block;
  height: 1.1em;
  text-align: center;
`;

export const Static = styled.span`
  display: inline-block;
  height: 1.1em;
`;
