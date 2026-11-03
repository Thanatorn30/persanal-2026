import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "@/components/common/Button/Button";
import Odometer from "@/components/common/Odometer/Odometer";
import {
  Box,
  Head,
  NameRow,
  Name,
  Badge,
  PriceRow,
  Price,
  Unit,
  Detail,
  Action,
  Features,
  FeaturesTitle,
  List,
  Feature,
} from "./PricingCard.styles";

// popular = true จะเป็นการ์ดพื้นดำ + ป้าย POPULAR
export default function PricingCard({ name, price, unit, detail, features = [], popular = false }) {
  return (
    <Box $dark={popular}>
      <Head>
        <NameRow>
          <Name>{name}</Name>
          {popular && <Badge>Popular</Badge>}
        </NameRow>
        <PriceRow>
          <Price>
            <Odometer value={price} />
          </Price>
          <Unit>{unit}</Unit>
        </PriceRow>
        <Detail $dark={popular}>{detail}</Detail>
      </Head>
      <Action>
        <Button href="#contact" variant={popular ? "light" : "dark"} fullWidth>
          Get started
        </Button>
      </Action>
      <Features $dark={popular}>
        <FeaturesTitle>Features</FeaturesTitle>
        <List>
          {features.map((feature) => (
            <Feature key={feature}>
              <CheckCircleIcon />
              {feature}
            </Feature>
          ))}
        </List>
      </Features>
    </Box>
  );
}
