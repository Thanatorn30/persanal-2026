"use client";
import { useState } from "react";
import RollText from "@/components/common/RollText/RollText";
import Button from "@/components/common/Button/Button";
import { navLinks, profile } from "../data";
import {
  Bar,
  Inner,
  Logo,
  Links,
  NavLink,
  Cta,
  OnlineDot,
  Burger,
  MobileMenu,
  MobileLink,
  MobileCta,
} from "./Navbar.styles";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Bar>
      <Inner>
        <Logo href="/#home" className="roll-host" onClick={close}>
          <RollText lineHeight="1.3em">{profile.shortName}</RollText>
          <sup>®</sup>
        </Logo>

        <Links>
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} className="roll-host">
                <RollText>{link.label}</RollText>
              </NavLink>
            </li>
          ))}
        </Links>

        <Cta href={profile.cvUrl} download className="roll-host">
          <OnlineDot />
          <RollText>Download CV</RollText>
        </Cta>

        <Burger
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          $open={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </Burger>
      </Inner>

      <MobileMenu $open={open}>
        {navLinks.map((link, i) => (
          <MobileLink key={link.href} href={link.href} $open={open} $delay={0.05 * i + 0.1} onClick={close}>
            {link.label}
          </MobileLink>
        ))}
        <MobileCta>
          <Button href={profile.cvUrl} download fullWidth onClick={close}>
            Download CV
          </Button>
        </MobileCta>
      </MobileMenu>
    </Bar>
  );
}
