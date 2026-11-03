"use client";
import { useState } from "react";
import Reveal from "../Reveal/Reveal";
import { List, Item, Trigger, Question, Icon, Panel, PanelInner, Answer } from "./Accordion.styles";

// items = [{ question, answer }] — defaultOpen = index ที่เปิดไว้ตอนแรก
export default function Accordion({ items = [], defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <List>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.question} delay={i * 0.05}>
            <Item>
              <Trigger
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <Question>{item.question}</Question>
                <Icon $open={isOpen} />
              </Trigger>
              <Panel $open={isOpen}>
                <PanelInner>
                  <Answer $open={isOpen}>{item.answer}</Answer>
                </PanelInner>
              </Panel>
            </Item>
          </Reveal>
        );
      })}
    </List>
  );
}
