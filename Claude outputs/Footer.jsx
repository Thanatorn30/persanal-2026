import Link from "next/link";
import Reveal from "@/components/common/Reveal/Reveal";
import Button from "@/components/common/Button/Button";
import RollText from "@/components/common/RollText/RollText";
import BigName from "./BigName";
import { footer, profile } from "../data";
import {
  Wrap,
  Top,
  Intro,
  Headline,
  Columns,
  Column,
  ColTitle,
  FooterLink,
  NameWrap,
  Bottom,
  Copy,
  BackTop,
} from "./Footer.styles";

function LinkColumn({ title, links }) {
  return (
    <Column>
      <ColTitle>{title}</ColTitle>
      {links.map((link) => (
        <FooterLink as={Link} key={link.label} href={link.href} className="roll-host">
          <RollText>{link.label}</RollText>
        </FooterLink>
      ))}
    </Column>
  );
}

export default function Footer() {
  const contactLinks = [
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: profile.location, href: "#" },
    { label: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}` },
  ];

  return (
    <Wrap>
      <Top>
        <Reveal>
          <Intro>
            <Headline>{footer.headline}</Headline>
            <Button href={profile.cvUrl} download>
              Download CV
            </Button>
          </Intro>
        </Reveal>
        <Reveal delay={0.1}>
          <Columns>
            <LinkColumn title="Menu" links={footer.menu} />
            <LinkColumn title="Contact" links={contactLinks} />
            {/* <LinkColumn title="Social" links={footer.social} /> */}
          </Columns>
        </Reveal>
      </Top>

      <NameWrap>
        <BigName>{profile.fullName}</BigName>
      </NameWrap>

      <Bottom>
        <Copy>
          © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
        </Copy>
        <BackTop href="#home" className="roll-host">
          <RollText>Back to top ↑</RollText>
        </BackTop>
      </Bottom>
    </Wrap>
  );
}
