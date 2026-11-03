import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import CodeIcon from "@mui/icons-material/Code";
import Section from "@/components/common/Section/Section";
import Reveal from "@/components/common/Reveal/Reveal";
import ServiceCard from "./ServiceCard";
import { services } from "../data";
import { Grid } from "./Services.styles";

const icons = {
  dashboard: <DashboardCustomizeOutlinedIcon />,
  brand: <CategoryOutlinedIcon />,
  target: <TrackChangesIcon />,
  code: <CodeIcon />,
};

export default function Services() {
  return (
    <Section id="services" tag="Services">
      <Grid>
        {services.map((service, i) => (
          <Reveal key={service.title} delay={(i % 2) * 0.1}>
            <ServiceCard icon={icons[service.icon]} index={i + 1} title={service.title} detail={service.detail} />
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
