"use client";
import PageFrame from "@/components/common/PageFrame/PageFrame";
import Navbar from "@/components/home/Navbar/Navbar";
import Footer from "@/components/home/Footer/Footer";
import { getProjectById, projects } from "@/components/home/data";
import useScrollSpy from "@/hooks/useScrollSpy";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import { Layout } from "./ProjectDetailPage.styles";

// หน้ารายละเอียด project: เมนูซ้าย (sticky) + เนื้อหาขวา
export default function ProjectDetailPage({ id }) {
  const project = getProjectById(id);
  const index = projects.findIndex((p) => p.id === id);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const sectionIds = ["intro", ...project.sections.map((s) => s.id)];
  const activeId = useScrollSpy(sectionIds);

  return (
    <PageFrame>
      <Navbar />
      <Layout id="home">
        <Sidebar project={project} projects={projects} activeId={activeId} />
        <Content project={project} prev={prev} next={next} />
      </Layout>
      <Footer />
    </PageFrame>
  );
}
