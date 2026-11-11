import Link from "next/link";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Reveal from "@/components/common/Reveal/Reveal";
import SectionTag from "@/components/common/SectionTag/SectionTag";
import Button from "@/components/common/Button/Button";
import GrowthChart from "./GrowthChart";
import FlowDiagram from "./FlowDiagram";
import {
  Main,
  Block,
  Crumbs,
  Title,
  Summary,
  MetaGrid,
  MetaItem,
  MetaLabel,
  MetaValue,
  Tags,
  Tag,
  Cover,
  Device,
  Heading,
  HeadingNo,
  Paragraph,
  Bullets,
  Items,
  Item,
  ItemTitle,
  ItemDetail,
  Stats,
  Stat,
  StatValue,
  StatLabel,
  Gallery,
  Figure,
  Pager,
  PagerLink,
  PagerLabel,
  PagerName,
} from "./Content.styles";

const metaLabels = { client: "Client", role: "Role", year: "Year", duration: "Duration" };

function ProjectSection({ section, index }) {
  return (
    <Block id={section.id}>
      <Reveal>
        <Heading>
          <HeadingNo>{String(index + 2).padStart(2, "0")}</HeadingNo>
          {section.title}
        </Heading>
      </Reveal>

      {section.body?.map((text, i) => (
        <Reveal key={i}>
          <Paragraph>{text}</Paragraph>
        </Reveal>
      ))}

      {section.list && (
        <Reveal>
          <Bullets>
            {section.list.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </Bullets>
        </Reveal>
      )}

      {section.flow && <FlowDiagram steps={section.flow} />}

      {section.items && (
        <Items>
          {section.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Item>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDetail>{item.detail}</ItemDetail>
              </Item>
            </Reveal>
          ))}
        </Items>
      )}

      {section.images && (
        <Gallery>
          {section.images.map((img, i) => (
            <Reveal key={img.src} delay={(i % 2) * 0.08} style={img.wide ? { gridColumn: "1 / -1" } : undefined}>
              <Figure>
                <img src={img.src} alt={img.caption || section.title} loading="lazy" />
                {img.caption && <figcaption>{img.caption}</figcaption>}
              </Figure>
            </Reveal>
          ))}
        </Gallery>
      )}

      {/* {section.stats && (
        <Stats>
          {section.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <Stat>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </Stat>
            </Reveal>
          ))}
        </Stats>
      )} */}

      {section.chart && (
        <Reveal>
          <GrowthChart chart={section.chart} />
        </Reveal>
      )}
    </Block>
  );
}

// เนื้อหาด้านขวาของหน้า project
export default function Content({ project, prev, next }) {
  return (
    <Main>
      <Block id="intro">
        <Reveal onLoad>
          <Crumbs>
            <Link href="/#projects">Projects</Link>
            <span>/</span>
            <span>{project.name}</span>
          </Crumbs>
          <SectionTag as="p">{project.name}</SectionTag>
          <Title>{project.title}</Title>
          <Summary>{project.summary}</Summary>
        </Reveal>

        <Reveal onLoad delay={0.1}>
          <MetaGrid>
            {Object.entries(metaLabels).map(([key, label]) =>
              project.meta?.[key] ? (
                <MetaItem key={key}>
                  <MetaLabel>{label}</MetaLabel>
                  <MetaValue>{project.meta[key]}</MetaValue>
                </MetaItem>
              ) : null
            )}
          </MetaGrid>
          <div>
            <MetaLabel>Tech Stack</MetaLabel>
            {project.stack?.length > 0 && (
              <Tags>
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </Tags>
            )}
          </div>

          {project.liveUrl && (
            <Button href={project.liveUrl} icon={<NorthEastIcon fontSize="small" />} target="_blank" rel="noreferrer">
              View Production
            </Button>
          )}
        </Reveal>

        <Reveal onLoad delay={0.2}>
          <Cover $tone={project.tone}>{project.image ? <img src={project.image} alt={project.title} /> : <Device />}</Cover>
        </Reveal>
      </Block>

      {project.sections.map((section, i) => (
        <ProjectSection key={section.id} section={section} index={i} />
      ))}

     
    </Main>
  );
}
