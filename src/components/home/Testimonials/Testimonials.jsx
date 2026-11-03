import Section from "@/components/common/Section/Section";
import Reveal from "@/components/common/Reveal/Reveal";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../data";
import { Grid } from "./Testimonials.styles";

export default function Testimonials() {
  return (
    <Section id="testimonial" tag="Testimonial">
      <Grid>
        {testimonials.map((item, i) => (
          <Reveal key={item.name} delay={(i % 3) * 0.1} style={{ height: "100%" }}>
            <TestimonialCard {...item} />
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
