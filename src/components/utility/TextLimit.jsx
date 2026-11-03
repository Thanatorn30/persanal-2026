"use client";
import React, { useState } from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const LimitedText = styled.span`
  display: ${props => props.$show ? 'inline' : 'none'};
`;

const FullText = styled.span`
  display: ${props => props.$show ? 'inline' : 'none'};
`;

const ToggleButton = styled.button`
  color: ${props => props.$color || '#007bff'};
  background: none;
  border: none;
  padding: 0;
  margin-left: 4px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: underline;
  font-size: inherit;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:focus {
    outline: none;
  }
`;

/**
 * TextLimit Component - จำกัดจำนวนตัวอักษรของข้อความ
 * 
 * @param {ReactNode} children - ข้อความที่ต้องการแสดง
 * @param {number} limit - จำนวนตัวอักษรสูงสุดที่แสดง (default: 100)
 * @param {string} endText - ข้อความที่แสดงเมื่อตัดข้อความ (default: "...")
 * @param {boolean} expandable - สามารถขยายเพื่อดูข้อความทั้งหมดได้ (default: false)
 * @param {string} showMoreText - ข้อความปุ่มแสดงเพิ่มเติม (default: "อ่านเพิ่มเติม")
 * @param {string} showLessText - ข้อความปุ่มแสดงน้อยลง (default: "ซ่อน")
 * @param {string} buttonColor - สีของปุ่ม (default: "#007bff")
 * @param {string} className - CSS class เพิ่มเติม
 */
function TextLimit({ 
  children,
  limit = 100, 
  endText = "...",
  expandable = false,
  showMoreText = "อ่านเพิ่มเติม",
  showLessText = "ซ่อน",
  buttonColor = "#007bff",
  className = "",
  style = {}
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // แปลง children เป็น string
  const text = typeof children === 'string' ? children : String(children || '');

  // ถ้าไม่มีข้อความ
  if (!text) return null;

  // ถ้าข้อความสั้นกว่าที่กำหนด
  if (text.length <= limit) {
    return <span className={className}>{text}</span>;
  }

  // จำกัดข้อความ
  const limitedText = text.slice(0, limit);
  
  // ถ้าไม่สามารถขยายได้
  if (!expandable) {
    return <span className={className}>{limitedText}{endText}</span>;
  }

  // ถ้าสามารถขยายได้
  return (
    <TextContainer className={className} style={style}>
      <LimitedText $show={!isExpanded}>
        {limitedText}{endText}
      </LimitedText>
      <FullText $show={isExpanded}>
        {text}
      </FullText>
      <ToggleButton 
        onClick={() => setIsExpanded(!isExpanded)}
        $color={buttonColor}
        type="button"
      >
        {isExpanded ? showLessText : showMoreText}
      </ToggleButton>
    </TextContainer>
  );
}

export default TextLimit;

