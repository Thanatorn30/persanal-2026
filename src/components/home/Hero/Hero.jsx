import VerifiedIcon from "@mui/icons-material/Verified";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AdjustIcon from "@mui/icons-material/Adjust";
import BoltIcon from "@mui/icons-material/Bolt";
import CycloneIcon from "@mui/icons-material/Cyclone";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import WavesIcon from "@mui/icons-material/Waves";
import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import Reveal from "@/components/common/Reveal/Reveal";
import Avatar from "@/components/common/Avatar/Avatar";
import Button from "@/components/common/Button/Button";
import InfoItem from "@/components/common/InfoItem/InfoItem";
import Marquee from "@/components/common/Marquee/Marquee";
import { profile, brandLogos } from "../data";
import {
  Wrap,
  Center,
  AvatarWrap,
  NameRow,
  Name,
  Verified,
  Role,
  Meta,
  Bio,
  Actions,
  Logos,
  BrandLogo,
} from "./Hero.styles";

const logoIcons = [
  AllInclusiveIcon,
  AdjustIcon,
  BoltIcon,
  CycloneIcon,
  DiamondOutlinedIcon,
  WavesIcon,
  TokenOutlinedIcon,
  SpaOutlinedIcon,
];

export default function Hero() {
  return (
    <Wrap id="home">
      <Center>
        <Reveal onLoad delay={0.1}>
          <AvatarWrap>
            <Avatar src={profile.avatar} name={profile.fullName} size={120} />
          </AvatarWrap>
        </Reveal>

        <Reveal  onLoad delay={0.2}>
          <NameRow>
            <Name>{profile.fullName}</Name>
            <Verified>
              <VerifiedIcon />
            </Verified>
          </NameRow>
          <Role>{profile.role}</Role>
        </Reveal>

        <Reveal onLoad delay={0.3}>
          <Meta>
            <InfoItem icon={<PlaceOutlinedIcon />}>{profile.location}</InfoItem>
            <InfoItem icon={<PhoneInTalkOutlinedIcon />} href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}>
              {profile.phone}
            </InfoItem>
          </Meta>
        </Reveal>

        <Reveal onLoad delay={0.4}>
          <Bio>{profile.bio}</Bio>
        </Reveal>

       
      </Center>

      {/* <Reveal onLoad delay={0.7}>
        <Logos>
          <Marquee duration={28} gap={72}>
            {brandLogos.map((name, i) => {
              const Icon = logoIcons[i % logoIcons.length];
              return (
                <BrandLogo key={name}>
                  <Icon />
                  {name}
                </BrandLogo>
              );
            })}
          </Marquee>
        </Logos>
      </Reveal> */}
    </Wrap>
  );
}
