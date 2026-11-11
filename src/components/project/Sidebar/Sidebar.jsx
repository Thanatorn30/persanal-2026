import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RollText from "@/components/common/RollText/RollText";
import { Aside, Inner, Group, GroupTitle, Menu, MenuLink, Count, ProjectGroup, Back } from "./Sidebar.styles";

// เมนูด้านซ้าย: หัวข้อในหน้านี้ (scroll-spy) + รายการ project ทั้งหมด
export default function Sidebar({ project, projects, activeId }) {
  const pageLinks = [{ id: "intro", title: "Introduction" }, ...project.sections];

  return (
    <Aside aria-label="Project navigation">
      <Inner>
        <Group>
          <GroupTitle>{project.name}</GroupTitle>
          <Menu>
            {pageLinks.map((item, i) => (
              <li key={item.id}>
                <MenuLink href={`#${item.id}`} $active={activeId === item.id} aria-current={activeId === item.id ? "location" : undefined}>
                  <Count>{String(i + 1).padStart(2, "0")}</Count>
                  {item.title}
                </MenuLink>
              </li>
            ))}
          </Menu>
        </Group>

        <ProjectGroup>
          <GroupTitle>All projects</GroupTitle>
          <Menu>
            {projects.map((p) => (
              <li key={p.id}>
                <MenuLink as={Link} href={`/project/${p.id}`} $active={p.id === project.id} aria-current={p.id === project.id ? "page" : undefined}>
                  {p.name}
                </MenuLink>
              </li>
            ))}
          </Menu>
        </ProjectGroup>

        <Back as={Link} href="/#projects" className="roll-host">
          <ArrowBackIcon fontSize="small" />
          <RollText>Back to home</RollText>
        </Back>
      </Inner>
    </Aside>
  );
}
