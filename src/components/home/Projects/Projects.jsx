import Section from "@/components/common/Section/Section";
import Reveal from "@/components/common/Reveal/Reveal";
import Button from "@/components/common/Button/Button";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";
import { Grid, More } from "./Projects.styles";

export default function Projects() {
  return (
    <Section id="projects" tag="Project">
      <Grid>
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 0.1}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </Grid>
      
    </Section>
  );
}
