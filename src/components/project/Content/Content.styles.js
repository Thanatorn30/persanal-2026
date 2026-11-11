import styled from "styled-components";
import { colors, fonts, ease, media } from "@/styles/theme";

export const Main = styled.article`
  min-width: 0;
  padding: 0 48px 100px;

  ${media.ipad} {
    padding: 0 24px 80px;
  }

  ${media.mobile} {
    padding: 0 16px 64px;
  }
`;

// แต่ละหัวข้อ (anchor ของเมนูซ้าย) — scroll-margin เผื่อ navbar + แถบเมนู
export const Block = styled.section`
  padding: 64px 0;
  border-bottom: 1px solid ${colors.border};
  scroll-margin-top: 62px;

  &:last-of-type {
    border-bottom: 0;
  }

  ${media.ipad} {
    padding: 52px 0;
    scroll-margin-top: 112px;
  }

  ${media.mobile} {
    padding: 40px 0;
  }
`;

export const Crumbs = styled.nav`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  font-family: ${fonts.mono};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.muted};

  a:hover {
    color: ${colors.text};
  }
`;

export const Title = styled.h1`
  margin: 24px 0 16px;
  font-family: ${fonts.sans};
  font-size: 56px;
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: ${colors.text};

  ${media.ipad} {
    font-size: 44px;
  }

  ${media.mobile} {
    font-size: 34px;
  }
`;

export const Summary = styled.p`
  max-width: 640px;
  margin: 0;
  font-size: 18px;
  line-height: 1.6;
  color: ${colors.muted};

  ${media.mobile} {
    font-size: 16px;
  }
`;

export const MetaGrid = styled.dl`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 40px 0 24px;
  border-top: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};

  ${media.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const MetaItem = styled.div`
  padding: 16px 16px 16px 0;

  & + & {
    padding-left: 16px;
    border-left: 1px solid ${colors.border};
  }

  ${media.mobile} {
    &:nth-child(3) {
      padding-left: 0;
      border-left: 0;
    }
    &:nth-child(n + 3) {
      border-top: 1px solid ${colors.border};
    }
  }
`;

export const MetaLabel = styled.dt`
  margin-bottom: 4px;
  font-family: ${fonts.mono};
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.muted};
`;

export const MetaValue = styled.dd`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.text};
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
`;

export const Tag = styled.span`
  padding: 6px 10px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  font-family: ${fonts.mono};
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  text-transform: uppercase;
  color: ${colors.text};
`;

export const Cover = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  margin-top: 40px;
  border-radius: 10px;
  overflow: hidden;
  background: ${(p) => `linear-gradient(145deg, ${p.$tone[0]}, ${p.$tone[1]})`};

  img {
    /* position: absolute;
    inset: 0; */
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-position: top center; */
  }
`;

// placeholder อุปกรณ์ (แบบเดียวกับ ProjectCard)
export const Device = styled.div`
  width: 18%;
  aspect-ratio: 9 / 19;
  border: 6px solid rgba(255, 255, 255, 0.85);
  border-radius: 34px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.35));
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
  transform: rotate(-18deg);

  ${media.mobile} {
    width: 24%;
    border-width: 4px;
    border-radius: 20px;
  }
`;

export const Heading = styled.h2`
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin: 0 0 24px;
  font-family: ${fonts.sans};
  font-size: 36px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: ${colors.text};

  ${media.mobile} {
    font-size: 28px;
  }
`;

export const HeadingNo = styled.span`
  font-family: ${fonts.mono};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  color: ${colors.muted};
`;

export const Paragraph = styled.p`
  max-width: 720px;
  margin: 0 0 16px;
  font-size: 17px;
  line-height: 1.7;
  color: ${colors.muted};
`;

export const Bullets = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 720px;
  margin: 8px 0 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 20px;
    font-size: 17px;
    line-height: 1.6;
    color: ${colors.text};
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.7em;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: ${colors.text};
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 28px;

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Item = styled.div`
  height: 100%;
  padding: 24px;
  border-radius: 10px;
  background: ${colors.surface};
  transition: background 0.4s ${ease}, color 0.4s ${ease};

  &:hover {
    background: ${colors.text};
    color: ${colors.white};
  }
`;

export const ItemTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.02em;
`;

export const ItemDetail = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.75;
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 28px;
  border: 1px solid ${colors.border};
  border-radius: 10px;

  > div + div {
    border-left: 1px solid ${colors.border};
  }

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);

    > div + div {
      border-left: 0;
      border-top: 1px solid ${colors.border};
    }
  }
`;

export const Stat = styled.div`
  padding: 28px 24px;
`;

export const StatValue = styled.p`
  margin: 0 0 6px;
  font-size: 48px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${colors.text};

  ${media.mobile} {
    font-size: 40px;
  }
`;

export const StatLabel = styled.p`
  margin: 0;
  font-family: ${fonts.mono};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.muted};
`;

export const Pager = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding-top: 64px;
  border-top: 1px solid ${colors.border};

  ${media.mobile} {
    padding-top: 40px;
    gap: 10px;
  }
`;

export const PagerLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => (p.$right ? "flex-end" : "flex-start")};
  gap: 6px;
  padding: 24px;
  border: 1px solid ${colors.border};
  border-radius: 10px;
  color: ${colors.text};
  transition: background 0.4s ${ease}, color 0.4s ${ease};

  &:hover {
    background: ${colors.text};
    color: ${colors.white};
  }

  ${media.mobile} {
    padding: 16px;
  }
`;

export const PagerLabel = styled.span`
  font-family: ${fonts.mono};
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  opacity: 0.6;
`;

export const PagerName = styled.span`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.02em;

  ${media.mobile} {
    font-size: 18px;
  }
`;

// รูปประกอบในแต่ละ section (section.images = [{ src, caption, wide }])
export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-top: 28px;

  ${media.mobile} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Figure = styled.figure`
  margin: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 1px solid ${colors.border};
    background: ${colors.surface};
  }

  figcaption {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.5;
    opacity: 0.7;
  }
`;
