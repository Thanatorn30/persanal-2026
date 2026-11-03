import XIcon from "@mui/icons-material/X";
import Avatar from "@/components/common/Avatar/Avatar";
import { Box, Quote, Author, Who, Name, Role, Social } from "./TestimonialCard.styles";

export default function TestimonialCard({ quote, name, role, avatar }) {
  return (
    <Box>
      <Quote>“ {quote} ”</Quote>
      <Author>
        <Avatar src={avatar} name={name} size={40} />
        <Who>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </Who>
        <Social>
          <XIcon />
        </Social>
      </Author>
    </Box>
  );
}
