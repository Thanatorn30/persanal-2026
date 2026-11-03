import Reveal from "../Reveal/Reveal";
import SectionTag from "../SectionTag/SectionTag";
import { StyledSection, Head } from "./Section.styles";

/**
 * กล่อง section มาตรฐาน (เส้นคั่นบน + padding responsive)
 * ส่ง tag มาเพื่อแสดงป้ายหัวข้อด้านบนอัตโนมัติ
 */
export default function Section({
  id,
  tag,
  children,
  noBorder = false,
  padding,
  paddingIpad,
  paddingMobile,
}) {
  return (
    <StyledSection
      id={id}
      $noBorder={noBorder}
      $padding={padding}
      $paddingIpad={paddingIpad}
      $paddingMobile={paddingMobile}
    >
      {tag && (
        <Head>
          <Reveal>
            <SectionTag>{tag}</SectionTag>
          </Reveal>
        </Head>
      )}
      {children}
    </StyledSection>
  );
}
