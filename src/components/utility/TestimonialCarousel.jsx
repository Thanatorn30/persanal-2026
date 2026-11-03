import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import MotionUp from "./MotionUp";

// Function to truncate text

import GlareHover from "./GlareHover";
import { useRouter } from "next/navigation";

// ------------------ Styled Components  ------------------
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  /* max-width: 1280px; */
  margin: 0 auto;
  /* padding: 2rem 1.5rem; */

  @media (max-width: 1440px) {
    /* max-width: 1200px; */
    /* padding: 2rem 1.25rem; */
  }

  @media (max-width: 820px) {
    max-width: 860px;
    /* padding: 1.5rem 1rem; */
  }

  @media (max-width: 420px) {
    max-width: 100%;
    /* padding: 1rem 0.75rem; */
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 640px;
  height: auto;
  border-radius: 12px;
  padding: 1.5rem;
  background: #ffffff;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  position: relative;

  /* @media (max-width: 1440px) {
    max-width: 580px;
  } */

  @media (max-width: 820px) {
    max-width: 100%;
    padding: 1.25rem;
  }

  @media (max-width: 420px) {
    padding: 1rem;
  }
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 0px 0px;
`;

const CardImage = styled.div`
  width: 100%;
  height: 360px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 1440px) {
    height: 320px;
  }

  @media (max-width: 820px) {
    height: 280px;
  }

  @media (max-width: 420px) {
    height: 220px;
  }
`;

const CardImageInner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.15);
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1 1 auto;
`;

const CardDetail = styled.p`
  font-family: "PT Serif", Georgia, serif;
  letter-spacing: 0.5px;
  margin: 0;

  @media (max-width: 820px) {
    font-size: 0.95rem;
  }

  @media (max-width: 420px) {
    font-size: 0.9rem;
  }
`;

const CardTitle = styled.h3`
  font-family: "PT Serif", Georgia, serif;
  letter-spacing: 0.5px;
  color: #3b155e;
  margin: 0;

  @media (max-width: 820px) {
    font-size: 1.125rem;
  }

  @media (max-width: 420px) {
    font-size: 1.0625rem;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 820px) {
    margin-top: 1.5rem;
    gap: 0.75rem;
  }

  @media (max-width: 420px) {
    margin-top: 1.25rem;
    gap: 0.5rem;
  }
`;

const NavButton = styled.button`
  background: #3b155e;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  font-size: 1rem;

  &:hover {
    background: #4a1a6b;
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 820px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 420px) {
    width: 32px;
    height: 32px;
  }
`;

const IndicatorContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 420px) {
    gap: 0.4rem;
  }
`;

const Indicator = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${(props) =>
    props.$active ? "#3b155e" : "rgba(59, 21, 94, 0.3)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.$active ? "#3b155e" : "rgba(59, 21, 94, 0.6)"};
  }

  @media (max-width: 420px) {
    width: 6px;
    height: 6px;
  }
`;

const ImageNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
  display: none !important;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 820px) {
    width: 28px;
    height: 28px;
    font-size: 16px;
  }

  @media (max-width: 420px) {
    width: 24px;
    height: 24px;
    font-size: 14px;
  }
`;

const ImageIndicatorContainer = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
  z-index: 2;

  @media (max-width: 420px) {
    bottom: 6px;
    gap: 3px;
  }
`;

const ImageIndicator = styled.button`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  background: ${(props) =>
    props.$active ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.4)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 420px) {
    width: 5px;
    height: 5px;
  }
`;

// ------------------ Styled Components  ------------------



const ImageCarousel = ({
  images,
  testimonialId,
  autoplay = true,
  autoplayInterval = 3000,
  pauseOnHover = true,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || isHovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, isHovered, images.length]);

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlareHover width="100%" height="100%" style={{ border: "none" }}>
        <CardImage>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ width: "100%", height: "100%" }}
            >
              <CardImageInner
                src={images[currentImageIndex]?.url}
                alt={`Testimonial ${testimonialId} - Image ${
                  currentImageIndex + 1
                }`}
              />
            </motion.div>
          </AnimatePresence>
        </CardImage>
      </GlareHover>

      {images.length > 1 && (
        <>
          <ImageNavButton
            onClick={handlePrevImage}
            style={{ left: "8px" }}
            aria-label="Previous image"
          >
            ‹
          </ImageNavButton>
          <ImageNavButton
            onClick={handleNextImage}
            style={{ right: "8px" }}
            aria-label="Next image"
          >
            ›
          </ImageNavButton>

          <ImageIndicatorContainer>
            {images.map((_, index) => (
              <ImageIndicator
                key={index}
                $active={index === currentImageIndex}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </ImageIndicatorContainer>
        </>
      )}
    </div>
  );
};


export default function TestimonialCarousel({
  testimonials = DEFAULT_TESTIMONIALS,
  autoplay = true,
  autoplayInterval = 5000,
  showNavigation = true,
  showIndicators = true,
  itemsPerPage = 1,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const router = useRouter();

  const truncateText = (text, maxLength = 150) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  // คำนวณจำนวน pages และ items ในแต่ละ page
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const getCurrentPageItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, testimonials.length);
    return testimonials.slice(startIndex, endIndex);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || isAnimating) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, isAnimating, currentIndex, totalPages]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleIndicatorClick = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentPageItems = getCurrentPageItems();

  return (
    <CarouselContainer>
      <AnimatePresence mode="wait">
        <div key={currentIndex}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${itemsPerPage}, 1fr)`,
              gap: "1rem",
            }}
          >
            {currentPageItems.map((testimonial, index) => (
              <MotionUp
                key={`${currentIndex}-${index}`}
                delay={ 0.5}
                duration={0.8}
                distance={20}
                triggerOnScroll={true}
              >
                <TestimonialCard onClick={() => router.push(`/work/${testimonial.id}`)}>
                  <CardSection>
                    {testimonial?.image && testimonial.image.length > 1 ? (
                      <ImageCarousel
                        images={testimonial.image}
                        testimonialId={testimonial.id}
                      />
                    ) : (
                      <CardImage>
                        <CardImageInner
                          src={testimonial?.image?.[0]?.url}
                          alt={testimonial.title || "Testimonial"}
                        />
                      </CardImage>
                    )}
                    <CardInfo>
                      <CardTitle>{testimonial.title}</CardTitle>
                      <CardDetail>
                        {truncateText(testimonial?.description, 200)}
                      </CardDetail>
                    </CardInfo>
                  </CardSection>
                </TestimonialCard>
              </MotionUp>
            ))}
          </div>
        </div>
      </AnimatePresence>

      {showNavigation && (
        <NavigationContainer>
          <NavButton
            onClick={handlePrevious}
            disabled={isAnimating}
            aria-label="Previous testimonial"
          >
            ←
          </NavButton>

          {showIndicators && (
            <IndicatorContainer>
              {Array.from({ length: totalPages }, (_, index) => (
                <Indicator
                  key={index}
                  $active={index === currentIndex}
                  onClick={() => handleIndicatorClick(index)}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </IndicatorContainer>
          )}

          <NavButton
            onClick={handleNext}
            disabled={isAnimating}
            aria-label="Next testimonial"
          >
            →
          </NavButton>
        </NavigationContainer>
      )}
    </CarouselContainer>
  );
}
