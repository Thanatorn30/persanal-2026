import Section from "@/components/common/Section/Section";
import Accordion from "@/components/common/Accordion/Accordion";
import { faqs } from "../data";

export default function Faq() {
  return (
    <Section id="faq" tag="FAQ’s">
      <Accordion items={faqs} defaultOpen={0} />
    </Section>
  );
}
