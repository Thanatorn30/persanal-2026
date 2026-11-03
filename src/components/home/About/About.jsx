"use client";
import { useLayoutEffect, useRef } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { gsap } from "@/lib/gsap";
import Section from "@/components/common/Section/Section";
import Card from "@/components/common/Card/Card";
import Chip from "@/components/common/Chip/Chip";
import InfoItem from "@/components/common/InfoItem/InfoItem";
import Odometer from "@/components/common/Odometer/Odometer";
import TimelineRow from "./TimelineRow";
import { about, skills, experience, education, profile } from "../data";
import {
  Timeline,
  Line,
  LineFill,
  Text,
  Links,
  Stats,
  StatValue,
  StatLabel,
  ChipList,
  Stack,
  Entry,
  Period,
  EntryTitle,
  EntryText,
} from "./About.styles";

function EntryList({ items }) {
  return (
    <Card padding="8px">
      <Stack>
        {items.map((item) => (
          <Entry key={item.period + (item.company || item.title)}>
            <Period>{item.period}</Period>
            <EntryTitle>{item.company || item.title}</EntryTitle>
            <EntryText>{item.detail}</EntryText>
          </Entry>
        ))}
      </Stack>
    </Card>
  );
}

export default function About() {
  const timelineRef = useRef(null);
  const fillRef = useRef(null);

  // เส้น timeline ค่อย ๆ ยืดลงตามการ scroll
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(fillRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 60%",
          end: "bottom 60%",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Section id="about">
      <Timeline ref={timelineRef}>
        <Line>
          <LineFill ref={fillRef} />
        </Line>

        <TimelineRow tag="About my self">
          <Card>
            <Text>{about.text}</Text>
            <Links>
              <InfoItem mono icon={<FileDownloadOutlinedIcon />} href={profile.cvUrl}>
                Download CV
              </InfoItem>
              <InfoItem mono icon={<LanguageOutlinedIcon />} href={`https://${profile.portfolio}`}>
                {`Portfolio: ${profile.portfolio}`}
              </InfoItem>
              <InfoItem mono icon={<MailOutlineIcon />} href={`mailto:${profile.email}`}>
                {profile.email}
              </InfoItem>
            </Links>
            <Stats>
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <StatValue>
                    <Odometer value={stat.value} />
                  </StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </div>
              ))}
            </Stats>
          </Card>
        </TimelineRow>

        <TimelineRow tag="Skills">
          <Card>
            <ChipList>
              {skills.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </ChipList>
          </Card>
        </TimelineRow>

        <TimelineRow tag="Experience">
          <EntryList items={experience} />
        </TimelineRow>

        <TimelineRow tag="Education">
          <EntryList items={education} />
        </TimelineRow>
      </Timeline>
    </Section>
  );
}
