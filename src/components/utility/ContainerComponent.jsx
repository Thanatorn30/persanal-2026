"use client";
import React from "react";
import styled from "styled-components";

const ContainerBox = styled.div`
  width: auto;
  background-color: ${(p) => p.$bgColor || "#ffffff"};
  /* min-height: 100vh; */
  position: relative;
`;

function ContainerComponent({ bgColor, children }) {
  return <ContainerBox $bgColor={bgColor} >{children}</ContainerBox>;
}

export default ContainerComponent;
