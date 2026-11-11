import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/project/ProjectDetailPage";
import { projects, getProjectById, profile } from "@/components/home/data";

// สร้างหน้า static ให้ทุก project ตอน build
export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return {};
  return {
    title: `${project.name} — ${profile.fullName}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  if (!getProjectById(id)) notFound();
  return <ProjectDetailPage id={id} />;
}
