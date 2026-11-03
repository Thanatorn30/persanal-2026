import Section from "@/components/common/Section/Section";
import Reveal from "@/components/common/Reveal/Reveal";
import PricingCard from "./PricingCard";
import { pricing } from "../data";
import { Grid } from "./Pricing.styles";

export default function Pricing() {
  return (
    <Section id="pricing" tag="Pricing">
      <Grid>
        {pricing.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.1} style={{ height: "100%" }}>
            <PricingCard {...plan} />
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
