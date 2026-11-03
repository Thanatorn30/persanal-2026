import NorthEastIcon from "@mui/icons-material/NorthEast";
import { CardLink, Media, Image, Device, View, Name, Title } from "./ProjectCard.styles";

export default function ProjectCard({ name, title, image, tone = ["#8d8d8d", "#d9d9d9"], href = "#" }) {
  return (
    <CardLink href={href}>
      <Media>
        <Image $tone={tone}>{image ? <img src={image} alt={title} /> : <Device />}</Image>
        <View>
          <NorthEastIcon fontSize="small" />
        </View>
      </Media>
      <Name>{name}</Name>
      <Title>{title}</Title>
    </CardLink>
  );
}
