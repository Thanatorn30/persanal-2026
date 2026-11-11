import Link from "next/link";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { CardLink, Media, Image, Device, View, Name, Title } from "./ProjectCard.styles";

// กดการ์ดแล้วไปหน้ารายละเอียด /project/[id]
export default function ProjectCard({ id, name, title, image, tone = ["#8d8d8d", "#d9d9d9"] }) {
  return (
    <CardLink as={Link} href={`/project/${id}`}>
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
