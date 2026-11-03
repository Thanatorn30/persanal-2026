"use client";
import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import useCustomerStore from "@/services/store/customerStore";
import MotionBottom from "./MotionBottom";
import Color from "@/components/utility/main-color/Color";

// Styled Components for custom styling
const StyledNavbar = styled(Navbar)`
  background-color: ${Color.FirstColor} !important;
  padding: 0.75rem 0;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }

  .navbar-brand {
    color: #ffffff !important;
    font-weight: 600;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  .navbar-nav {
    .nav-link {
      color: #ffffff !important;
      font-weight: 500;
      padding: 0.5rem 1rem;
      transition: color 0.3s ease;

      &:hover {
      
        /* background-color: ${Color.FirstColorHover} !important; */
        color: ${Color.FirstColorHover} !important
      }

      @media (max-width: 768px) {
        padding: 0.75rem 1rem;
        text-align: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }

  .navbar-collapse {
    justify-content: space-between;

    @media (max-width: 768px) {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: ${Color.FirstColor};
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }
  }

  .nav-menu-center {
    display: flex;
    justify-content: end;
    flex: 1;
    margin: 0 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      margin: 0;
      width: 100%;
    }
  }

  .nav-menu-right {
    display: flex;
    align-items: center;
  }
`;

const IconImage = styled.img`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    border-radius: 10px;
    width: 36px;
    height: 36px;
  }
`;

const CallButton = styled(Button)`
  background-color: #ff4500 !important;
  border-color: #ff4500 !important;
  color: #ffffff !important;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  border-radius: 999px !important;
  transition: all 0.3s ease;
  white-space: nowrap;
  @media (max-width: 768px) {
    margin: 0 2rem;
  }

  &:hover {
    background-color: #e03d00 !important;
    border-color: #e03d00 !important;
    transform: translateY(-1px);
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 69, 0, 0.25) !important;
  }
`;

const NaveTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomToggleButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;

  @media (max-width: 991px) {
    display: flex;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    padding: 0.25rem 0.5rem;
  }

  /* &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  } */

  /* &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(172, 218, 5, 0.25);
  } */

  span {
    width: 22px;
    height: 2px;
    background-color: #ffffff;
    display: block;
    transition: all 0.3s ease;
    transform-origin: center;
    position: relative;
    border-radius: 10px;

    @media (max-width: 768px) {
      width: 18px;
      height: 2px;
    }
  }

  /* เส้นบนสุด - เมื่อ active จะหมุนเป็นเฉียงบน */
  span:nth-child(1) {
    transform: ${(props) => (props.$isOpen ? "rotate(45deg)" : "rotate(0deg)")};
    top: ${(props) => (props.$isOpen ? "7px" : "0px")};

    @media (max-width: 768px) {
      top: ${(props) => (props.$isOpen ? "6px" : "0px")};
    }
  }

  /* เส้นกลาง - เมื่อ active จะหายไป */
  span:nth-child(2) {
    opacity: ${(props) => (props.$isOpen ? "0" : "1")};
    transform: ${(props) => (props.$isOpen ? "scaleX(0)" : "scaleX(1)")};
  }

  /* เส้นล่างสุด - เมื่อ active จะหมุนเป็นเฉียงล่าง */
  span:nth-child(3) {
    transform: ${(props) =>
      props.$isOpen ? "rotate(-45deg)" : "rotate(0deg)"};
    top: ${(props) => (props.$isOpen ? "-7px" : "0px")};

    @media (max-width: 768px) {
      top: ${(props) => (props.$isOpen ? "-8px" : "0px")};
    }
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);
  const customerData = useCustomerStore((state) => state.customerData);
  const resCorporateDetail = customerData?.corporateDetails[0];
  
  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    setExpanded(false);
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const sectionElement = document.getElementById(targetId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <StyledNavbar expand="lg" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/" className="nav-title">
          <IconImage src={resCorporateDetail?.imageLogo} />
          {/* <NaveTitle>{resCorporateDetail?.name}</NaveTitle> */}
        </Navbar.Brand>
        

        <CustomToggleButton
          aria-controls="basic-navbar-nav"
          aria-expanded={expanded}
          $isOpen={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          <span></span>
          <span></span>
          <span></span>
        </CustomToggleButton>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-menu-center">
            {/* <Nav.Link href="/" onClick={(e) => handleNavClick(e, "home")}>
              Home
            </Nav.Link> */}
            <Nav.Link href="#about-us" onClick={(e) => handleNavClick(e, "about-us")}>
              About Us
            </Nav.Link>
            <Nav.Link href="#services" onClick={(e) => handleNavClick(e, "services")}>
              Services
            </Nav.Link>
            <Nav.Link href="#reviews" onClick={(e) => handleNavClick(e, "reviews")}>
              Review
            </Nav.Link>
            <Nav.Link href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default NavbarComponent;
