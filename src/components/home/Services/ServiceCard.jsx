import { Box, Top, IconBox, Number, Title, Text } from "./ServiceCard.styles";

export default function ServiceCard({ icon, index, title, detail }) {
  return (
    <Box>
      <Top>
        <IconBox>{icon}</IconBox>
        <Number>{String(index).padStart(2, "0")}</Number>
      </Top>
      <Title>{title}</Title>
      <Text>{detail}</Text>
    </Box>
  );
}
