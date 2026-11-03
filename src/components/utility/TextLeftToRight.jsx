import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TextLeftToRight = ({
  children,
  duration = 0.1,
  stagger = 0.1,
  delay = 0,
  ease = "power2.out",
  trigger = "onScroll", // "onLoad" หรือ "onScroll"
  className = "",
  ...props
}) => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    if (!children || !containerRef.current) return;

    // ดึง text content จาก children
    const getTextContent = (element) => {
      if (typeof element === 'string') return element;
      if (typeof element === 'number') return String(element);
      if (React.isValidElement(element)) {
        return element.props.children ? String(element.props.children) : '';
      }
      return '';
    };

    const textContent = getTextContent(children);
    if (!textContent) return;

    // หา element ที่มี text content
    const targetElement = containerRef.current.querySelector('*') || containerRef.current;
    
    // แยกตัวอักษรและสร้าง span elements
    const letters = textContent.split('');
    
    // Clear text content ของ target element
    targetElement.innerHTML = '';
    
    // สร้าง span สำหรับแต่ละตัวอักษร
    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter === ' ' ? '\u00A0' : letter; // ใช้ non-breaking space สำหรับช่องว่าง
      span.style.display = 'inline-block';
      span.style.transform = 'translateX(-100%)';
      span.style.opacity = '0';
      targetElement.appendChild(span);
      textRefs.current.push(span);
    });

    // ตั้งค่า GSAP animation
    const animateText = () => {
      gsap.fromTo(textRefs.current, 
        {
          x: -100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: duration,
          stagger: stagger,
          delay: delay,
          ease: ease
        }
      );
    };

    // เลือก trigger method
    if (trigger === "onLoad") {
      animateText();
    } else if (trigger === "onScroll") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateText();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }

    // Cleanup
    return () => {
      textRefs.current = [];
    };
  }, [children, duration, stagger, delay, ease, trigger]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      {...props}
    >
      {/* แสดง children เพื่อให้ style ถูกต้อง */}
      {children}
    </div>
  );
};

export default TextLeftToRight;
