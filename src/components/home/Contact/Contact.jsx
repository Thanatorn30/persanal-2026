import Section from "@/components/common/Section/Section";
import Reveal from "@/components/common/Reveal/Reveal";
import ContactForm from "./ContactForm";
import { Grid, Visual, Screen, ScreenText } from "./Contact.styles";

export default function Contact({ image }) {
  return (
    <Section id="contact" tag="Get in touch.">
      <Grid>
        <Reveal style={{ height: "100%" }}>
          <Visual>
            {image ? (
              <img src={image} alt="Contact" />
            ) : (
              <Screen>
                <ScreenText>HELLO</ScreenText>
              </Screen>
            )}
          </Visual>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </Grid>
    </Section>
  );
}
