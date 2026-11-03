"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import useCustomerStore from "@/services/store/customerStore";
import Color from "@/components/utility/main-color/Color";

// Styled Components for custom styling
const FooterWrapper = styled.footer`
  background-color: #ffffff;
  padding: 3rem 0 1rem;
  border-top: 1px solid #e9ecef;
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const CorpIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 4px;
`;

const BrandName = styled.h5`
  color: #000000;
  font-weight: 600;
  font-size: 1.25rem;
  margin: 0;
`;

const ColumnTitle = styled.h6`
  color: #000000;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
    list-style-type: disc;
    list-style-position: inside;

    &::marker {
      color: ${Color.FirstColor};
      background: ${Color.FirstColor};
    }

    a {
      color: #000000;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;

      &:hover {
        color: ${Color.FirstColor};
      }
    }
  }
`;

const ContactInfo = styled.div`
  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    color: #000000;
    font-size: 0.9rem;

    .icon {
      width: 16px;
      height: 16px;
      margin-top: 2px;
      flex-shrink: 0;
    }
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid #e9ecef;
  padding-top: 1rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .social-links {
    color: #000000;
    font-size: 0.9rem;

    a {
      color: #000000;
      text-decoration: none;
      margin-right: 0.5rem;

      &:hover {
        color: #666666;
      }
    }
  }

  .copyright {
    width: 100%;
    text-align: center;
    color: #000000;
    font-size: 0.9rem;
  }
`;

const Description = styled.p`
  color: #000000;
  font-size: 0.9rem;
  margin-bottom: 0;
`;

// Icon components
const MapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 16 16"
  >
    <path
      fill="#e80000"
      fillRule="evenodd"
      d="m7.539 14.841l.003.003l.002.002a.755.755 0 0 0 .912 0l.002-.002l.003-.003l.012-.009a6 6 0 0 0 .19-.153a15.6 15.6 0 0 0 2.046-2.082C11.81 11.235 13 9.255 13 7A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.6 15.6 0 0 0 2.046 2.082l.189.153zM8 8.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
      clipRule="evenodd"
    ></path>
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"
    ></path>
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.063 1.25h3.751a.75.75 0 0 1 .702.486l1.456 3.87a.75.75 0 0 1 .035.401l-.73 3.912c.897 2.108 2.378 3.525 4.833 4.796l3.865-.75a.75.75 0 0 1 .41.036l3.882 1.48a.75.75 0 0 1 .483.7v3.584c0 1.626-1.432 2.945-3.108 2.58c-3.053-.664-8.71-2.353-12.672-6.315c-3.796-3.795-5.068-9.037-5.495-11.87c-.245-1.618 1.052-2.91 2.588-2.91"
      clipRule="evenodd"
    ></path>
  </svg>
);

const LineIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_10001_79848)">
      <path
        d="M12 24.8203C18.6274 24.8203 24 19.4477 24 12.8203C24 6.1929 18.6274 0.820312 12 0.820312C5.37258 0.820312 0 6.1929 0 12.8203C0 19.4477 5.37258 24.8203 12 24.8203Z"
        fill="#4CC764"
      />
      <path
        d="M20.0025 12.1211C20.0025 8.53612 16.4085 5.62012 11.9917 5.62012C7.57496 5.62012 3.98096 8.53687 3.98096 12.1211C3.98096 15.3349 6.83096 18.0259 10.6807 18.5351C10.9417 18.5914 11.2965 18.7069 11.3865 18.9304C11.4675 19.1329 11.439 19.4501 11.4127 19.6549C11.4127 19.6549 11.319 20.2204 11.2987 20.3404C11.2635 20.5429 11.1375 21.1324 11.9925 20.7724C12.8475 20.4124 16.6057 18.0559 18.2865 16.1216C19.4475 14.8481 20.004 13.5566 20.004 12.1219L20.0025 12.1211Z"
        fill="white"
      />
      <path
        d="M17.3376 14.1912C17.4223 14.1912 17.4906 14.1229 17.4906 14.0382V13.4697C17.4906 13.3857 17.4216 13.3167 17.3376 13.3167H15.8083V12.7264H17.3376C17.4223 12.7264 17.4906 12.6582 17.4906 12.5734V12.0057C17.4906 11.9217 17.4216 11.8527 17.3376 11.8527H15.8083V11.2624H17.3376C17.4223 11.2624 17.4906 11.1942 17.4906 11.1094V10.5417C17.4906 10.4577 17.4216 10.3887 17.3376 10.3887H15.0868C15.0021 10.3887 14.9338 10.4569 14.9338 10.5417V10.5447V14.0352V14.0382C14.9338 14.1229 15.0021 14.1912 15.0868 14.1912H17.3376Z"
        fill="#4CC764"
      />
      <path
        d="M9.01264 14.1912C9.09739 14.1912 9.16564 14.1229 9.16564 14.0382V13.4697C9.16564 13.3857 9.09664 13.3167 9.01264 13.3167H7.48339V10.5417C7.48339 10.4577 7.41439 10.3887 7.33039 10.3887H6.76189C6.67714 10.3887 6.60889 10.4569 6.60889 10.5417V14.0352V14.0382C6.60889 14.1229 6.67714 14.1912 6.76189 14.1912H9.01264Z"
        fill="#4CC764"
      />
      <path
        d="M10.3672 10.3887H9.79949C9.71499 10.3887 9.64648 10.4572 9.64648 10.5417V14.0374C9.64648 14.1219 9.71499 14.1904 9.79949 14.1904H10.3672C10.4517 14.1904 10.5202 14.1219 10.5202 14.0374V10.5417C10.5202 10.4572 10.4517 10.3887 10.3672 10.3887Z"
        fill="#4CC764"
      />
      <path
        d="M14.2349 10.3887H13.6664C13.5816 10.3887 13.5134 10.4569 13.5134 10.5417V12.6184L11.9136 10.4584C11.9099 10.4532 11.9054 10.4479 11.9016 10.4427C11.9016 10.4427 11.9016 10.4427 11.9009 10.4419C11.8979 10.4389 11.8949 10.4352 11.8919 10.4322C11.8911 10.4314 11.8896 10.4307 11.8889 10.4299C11.8859 10.4277 11.8836 10.4254 11.8806 10.4232C11.8791 10.4224 11.8776 10.4209 11.8761 10.4202C11.8739 10.4179 11.8709 10.4164 11.8679 10.4149C11.8664 10.4142 11.8649 10.4127 11.8634 10.4119C11.8604 10.4104 11.8581 10.4089 11.8551 10.4074C11.8536 10.4067 11.8521 10.4059 11.8506 10.4052C11.8476 10.4037 11.8446 10.4022 11.8416 10.4014C11.8401 10.4014 11.8386 10.3999 11.8364 10.3999C11.8334 10.3992 11.8304 10.3977 11.8274 10.3969C11.8259 10.3969 11.8236 10.3962 11.8221 10.3954C11.8191 10.3954 11.8161 10.3939 11.8131 10.3932C11.8109 10.3932 11.8086 10.3932 11.8064 10.3924C11.8034 10.3924 11.8011 10.3917 11.7981 10.3917C11.7951 10.3917 11.7929 10.3917 11.7899 10.3917C11.7884 10.3917 11.7861 10.3917 11.7846 10.3917H11.2199C11.1351 10.3917 11.0669 10.4599 11.0669 10.5447V14.0412C11.0669 14.1259 11.1351 14.1942 11.2199 14.1942H11.7884C11.8731 14.1942 11.9414 14.1259 11.9414 14.0412V11.9652L13.5426 14.1282C13.5539 14.1439 13.5674 14.1567 13.5824 14.1664C13.5824 14.1664 13.5839 14.1672 13.5839 14.1679C13.5869 14.1702 13.5899 14.1717 13.5936 14.1739C13.5951 14.1747 13.5966 14.1754 13.5981 14.1762C13.6004 14.1777 13.6034 14.1784 13.6056 14.1799C13.6079 14.1814 13.6109 14.1822 13.6131 14.1829C13.6146 14.1829 13.6161 14.1844 13.6176 14.1844C13.6214 14.1859 13.6244 14.1867 13.6281 14.1874C13.6281 14.1874 13.6296 14.1874 13.6304 14.1874C13.6431 14.1904 13.6566 14.1927 13.6701 14.1927H14.2349C14.3196 14.1927 14.3879 14.1244 14.3879 14.0397V10.5432C14.3879 10.4584 14.3196 10.3902 14.2349 10.3902V10.3887Z"
        fill="#4CC764"
      />
    </g>
    <defs>
      <clipPath id="clip0_10001_79848">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0 0.820312)"
        />
      </clipPath>
    </defs>
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_10001_79834)">
      <path
        d="M24 12.8203C24 6.19289 18.6274 0.820312 12 0.820312C5.37258 0.820312 0 6.19289 0 12.8203C0 18.8098 4.3882 23.7743 10.125 24.6745V16.2891H7.07812V12.8203H10.125V10.1766C10.125 7.16906 11.9166 5.50781 14.6576 5.50781C15.9701 5.50781 17.3438 5.74219 17.3438 5.74219V8.69531H15.8306C14.34 8.69531 13.875 9.62039 13.875 10.5703V12.8203H17.2031L16.6711 16.2891H13.875V24.6745C19.6118 23.7743 24 18.8098 24 12.8203Z"
        fill="#1877F2"
      />
      <path
        d="M16.6711 16.2891L17.2031 12.8203H13.875V10.5703C13.875 9.62133 14.34 8.69531 15.8306 8.69531H17.3438V5.74219C17.3438 5.74219 15.9705 5.50781 14.6576 5.50781C11.9166 5.50781 10.125 7.16906 10.125 10.1766V12.8203H7.07812V16.2891H10.125V24.6745C11.3674 24.8689 12.6326 24.8689 13.875 24.6745V16.2891H16.6711Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_10001_79834">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0 0.820312)"
        />
      </clipPath>
    </defs>
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 256 256"
  >
    <g fill="none">
      <rect width={256} height={256} fill="url(#SVGWRUqebek)" rx={60}></rect>
      <rect width={256} height={256} fill="url(#SVGfkNpldMH)" rx={60}></rect>
      <path
        fill="#fff"
        d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
      ></path>
      <defs>
        <radialGradient
          id="SVGWRUqebek"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fd5"></stop>
          <stop offset={0.1} stopColor="#fd5"></stop>
          <stop offset={0.5} stopColor="#ff543e"></stop>
          <stop offset={1} stopColor="#c837ab"></stop>
        </radialGradient>
        <radialGradient
          id="SVGfkNpldMH"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3771c8"></stop>
          <stop offset={0.128} stopColor="#3771c8"></stop>
          <stop offset={1} stopColor="#60f" stopOpacity={0}></stop>
        </radialGradient>
      </defs>
    </g>
  </svg>
);

function FooterComponent() {
  const customerData = useCustomerStore((state) => state.customerData);
  const corpName = customerData?.corporateDetails[0]?.name;
  const corpLogo = customerData?.corporateDetails[0]?.imageLogo;
  const corpDescription = customerData?.corporateDetails[0]?.description;
  const corpServices = customerData?.services;
  const corpServicesPrice = customerData?.servicePrices;

  return (
    <FooterWrapper>
      <Container>
        <Row className="g-5">
          {/* Brand/Logo Column */}
          <Col lg={4} md={6} className="mb-4">
            <BrandSection>
              <CorpIcon src={corpLogo} />
              <BrandName>{corpName}</BrandName>
              <Description>{corpDescription}</Description>
            </BrandSection>
          </Col>

          {/* Services Column */}
          <Col lg={4} md={6} className="mb-4">
            <ColumnTitle>Services</ColumnTitle>
            <LinkList>
              {corpServices?.map((service) => (
                <li key={service.id}>
                  <a href={`/service/${service.slug}`}>{service.title}</a>
                </li>
              ))}
            </LinkList>
          </Col>

          {/* Contact Information Column */}
          <Col lg={4} md={6} className="mb-4">
            <ColumnTitle>Services Package</ColumnTitle>
            <LinkList>
              <li>
                <a 
                  href="#service-price" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('service-price')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Service Package
                </a>
              </li>
            </LinkList>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <BottomBar>
          <div className="copyright">All Right Reserved © Fastweb - 2025</div>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

export default FooterComponent;
