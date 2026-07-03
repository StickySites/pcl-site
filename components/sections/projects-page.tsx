import { PageProjects } from "@/components/figma-generated/page-projects";

type ProjectsPageProps = {
  category?: string;
};

export function ProjectsPage({ category }: ProjectsPageProps) {
  return <PageProjects activeCategory={category} />;
}
