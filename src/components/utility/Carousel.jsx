import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';

// Styled Components
const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid #555;
  border-radius: 24px;
  padding: 16px;
  --outer-r: 24px;
  --p-distance: 12px;
  width: ${props => props.baseWidth}px;
  ${props => props.round && `
    height: ${props.baseWidth}px;
    border-radius: 50%;
  `}
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
`;

const CarouselItem = styled(motion.div)`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid #555;
  border-radius: calc(var(--outer-r) - var(--p-distance));
  background-color: #0d0716;
  overflow: hidden;
  cursor: grab;
  width: ${props => props.itemWidth}px;
  ${props => props.round && `
    height: ${props.itemWidth}px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    bottom: 0.1em;
  `}

  &:active {
    cursor: grabbing;
  }
`;

const CarouselItemHeader = styled.div`
  margin-bottom: 16px;
  padding: 20px;
  padding-top: 20px;
  ${props => props.round && `
    padding: 0;
    margin: 0;
  `}
`;

const CarouselIconContainer = styled.span`
  display: flex;
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
`;

const CarouselIcon = styled.div`
  height: 16px;
  width: 16px;
  color: #060010;
`;

const CarouselItemContent = styled.div`
  padding: 20px;
  padding-bottom: 20px;
`;

const CarouselItemTitle = styled.div`
  margin-bottom: 4px;
  font-weight: 900;
  font-size: 18px;
  color: #fff;
`;

const CarouselItemDescription = styled.p`
  font-size: 14px;
  color: #fff;
`;

const CarouselIndicatorsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  ${props => props.round && `
    position: absolute;
    z-index: 2;
    bottom: 3em;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

const CarouselIndicators = styled.div`
  margin-top: 16px;
  display: flex;
  width: 150px;
  justify-content: space-between;
  padding: 0 32px;
`;

const CarouselIndicator = styled(motion.div)`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 150ms;
  background-color: ${props => props.active ? '#fff' : '#555'};
`;

// Default items
const DEFAULT_ITEMS = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: '📝'
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: '⭕'
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: '📚'
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
    icon: '🎨'
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: '💻'
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  children,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  itemsPerPage = 1,
  showIndicators = true,
  showArrows = false
}) {
  const containerPadding = 16;
  const itemWidth = (baseWidth - containerPadding * 2 - (GAP * (itemsPerPage - 1))) / itemsPerPage;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);

  // Handle hover pause
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  // Handle autoplay
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === totalPages - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, totalPages, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === totalPages - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, totalPages - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(totalPages - 1);
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (totalPages - 1),
          right: 0
        }
      };

  // Render items per page
  const renderItemsForPage = (pageIndex) => {
    const startIndex = pageIndex * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);
    const pageItems = items.slice(startIndex, endIndex);

    return (
      <div style={{ display: 'flex', gap: `${GAP}px` }}>
        {pageItems.map((item, index) => (
          <CarouselItem
            key={startIndex + index}
            itemWidth={itemWidth}
            round={round}
            style={{
              width: itemWidth,
              height: round ? itemWidth : '100%',
              ...(round && { borderRadius: '50%' })
            }}
            transition={effectiveTransition}
          >
            {children ? (
              // ถ้ามี children ให้ใช้ children function
              children(item, startIndex + index)
            ) : (
              // ถ้าไม่มี children ให้ใช้ default layout
              <>
                <CarouselItemHeader round={round}>
                  <CarouselIconContainer>
                    <CarouselIcon>{item.icon}</CarouselIcon>
                  </CarouselIconContainer>
                </CarouselItemHeader>
                <CarouselItemContent>
                  <CarouselItemTitle>{item.title}</CarouselItemTitle>
                  <CarouselItemDescription>{item.description}</CarouselItemDescription>
                </CarouselItemContent>
              </>
            )}
          </CarouselItem>
        ))}
      </div>
    );
  };

  return (
    <CarouselContainer
      ref={containerRef}
      baseWidth={baseWidth}
      round={round}
    >
      <CarouselTrack
        drag="x"
        {...dragProps}
        style={{
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + (baseWidth - containerPadding * 2) / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <div key={index}>
            {renderItemsForPage(index)}
          </div>
        ))}
      </CarouselTrack>

      {showIndicators && (
        <CarouselIndicatorsContainer round={round}>
          <CarouselIndicators>
            {Array.from({ length: totalPages }, (_, index) => (
              <CarouselIndicator
                key={index}
                active={currentIndex % totalPages === index}
                animate={{
                  scale: currentIndex % totalPages === index ? 1.2 : 1
                }}
                onClick={() => setCurrentIndex(index)}
                transition={{ duration: 0.15 }}
              />
            ))}
          </CarouselIndicators>
        </CarouselIndicatorsContainer>
      )}
    </CarouselContainer>
  );
}
