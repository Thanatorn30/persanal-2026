"use client";
import React, { useEffect, useMemo, useRef, Children } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FloatHeading = styled.h2`
  overflow: hidden;
`;

const FloatText = styled.span`
  display: inline-block;
  font-size: clamp(1.6rem, 8vw, 10rem);
  font-weight: 900;
  text-align: center;
  line-height: 1.5;
`;

const Char = styled.span`
  display: inline-block;
`;

function ScrollFloat({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1.2,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
  text = "",
}) {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    let content = text;
    
    // ถ้าไม่มี text prop ให้ดึงจาก children
    if (!content) {
      if (typeof children === "string") {
        content = children;
      } else if (React.isValidElement(children)) {
        // ดึงข้อความจาก children ที่เป็น JSX element
        const extractText = (element) => {
          if (typeof element === "string") return element;
          if (typeof element === "number") return String(element);
          if (React.isValidElement(element)) {
            return Children.toArray(element.props.children)
              .map(extractText)
              .join("");
          }
          return "";
        };
        content = extractText(children);
      }
    }
    
    return (content || "").split("").map((char, index) => (
      <Char className="char" key={index}>
        {char === " " ? "\u00A0" : char}
      </Char>
    ));
  }, [children, text]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".char");

    gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 0%",
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <FloatHeading ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <FloatText className={`scroll-float-text ${textClassName}`}>
        {React.isValidElement(children) ? 
          React.cloneElement(children, { children: splitText }) : 
          splitText
        }
      </FloatText>
    </FloatHeading>
  );
}

export default ScrollFloat;