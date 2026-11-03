"use client";
import React from "react";
import styled from "styled-components";

const GlareBox = styled.div`
  width: ${(p) => p.$width};
  height: ${(p) => p.$height};
  background: ${(p) => p.$background};
  border-radius: ${(p) => p.$borderRadius};
  border: 1px solid ${(p) => p.$borderColor};
  overflow: hidden;
  position: relative;
  display: grid;
  place-items: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      ${(p) => p.$glareAngle}deg,
      hsla(0, 0%, 0%, 0) 60%,
      ${(p) => p.$glareRgba} 70%,
      hsla(0, 0%, 0%, 0),
      hsla(0, 0%, 0%, 0) 100%
    );
    transition: ${(p) => p.$duration}ms ease;
    background-size: ${(p) => p.$glareSize}% ${(p) => p.$glareSize}%, 100% 100%;
    background-repeat: no-repeat;
    background-position: -100% -100%, 0 0;
    pointer-events: none;
  }

  &:hover { cursor: pointer; }

  &:hover::before {
    background-position: 100% 100%, 0 0;
  }

  &.play-once::before { transition: none; }
  &.play-once:hover::before { transition: ${(p) => p.$duration}ms ease; }
`;

function GlareHover({
  width = "500px",
  height = "500px",
  background = "#000",
  borderRadius = "10px",
  borderColor = "#333",
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = "",
  style = {},
}) {
  const toRgba = (color, alpha) => {
    const hex = (color || "").replace('#', '');
    if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
      const r = parseInt(hex[0] + hex[0], 16);
      const g = parseInt(hex[1] + hex[1], 16);
      const b = parseInt(hex[2] + hex[2], 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return color;
  };

  const rgba = toRgba(glareColor, glareOpacity);

  return (
    <GlareBox
      className={`${playOnce ? "play-once" : ""} ${className}`}
      style={style}
      $width={width}
      $height={height}
      $background={background}
      $borderRadius={borderRadius}
      $borderColor={borderColor}
      $glareAngle={glareAngle}
      $duration={transitionDuration}
      $glareSize={glareSize}
      $glareRgba={rgba}
    >
      {children}
    </GlareBox>
  );
}

export default GlareHover;