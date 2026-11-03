"use client";
import React from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const BreadCrumbContainer = styled.nav`
  margin: 32px 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "PT Serif", Georgia, serif;
  @media (min-width: 1440px) {
    margin: 52px 0;
  }
  
`;

const BreadCrumbItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;

  &:last-child {
    color: #3b155e;
    font-weight: 600;
  }
`;

const HomeLink = styled.a`
  display: flex;
  align-items: center;
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #3b155e;
  }

  .MuiSvgIcon-root {
    font-size: 18px;
  }
`;

const Separator = styled.div`
  display: flex;
  align-items: center;
  color: #999;

  .MuiSvgIcon-root {
    font-size: 16px;
  }
`;

const CurrentPage = styled.span`
  color: #3b155e;
  font-weight: 600;
  text-transform: capitalize;
`;

function BreadCrumb() {
  const pathname = usePathname();

  // Split path และกรอง empty strings
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  // เอาเฉพาะ path ท้ายสุด
  const lastSegment = pathSegments[pathSegments.length - 1] || "Home";

  // แปลง path segment เป็น readable text
  const formatSegment = (segment) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <BreadCrumbContainer>
      <BreadCrumbItem>
        <HomeLink href="/">
          <HomeIcon />
        </HomeLink>
      </BreadCrumbItem>

      {pathSegments.length > 0 && (
        <>
          <Separator>
            <ChevronRightIcon />
          </Separator>
          <BreadCrumbItem>
            <CurrentPage>{formatSegment(lastSegment)}</CurrentPage>
          </BreadCrumbItem>
        </>
      )}
    </BreadCrumbContainer>
  );
}

export default BreadCrumb;
