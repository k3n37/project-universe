export type ProjectCard = {
  repo: string;
  category: string;
  flagship: boolean;
};

export function featuredProjects(): ProjectCard[] {
  return [
    { repo: "master-platform", category: "Products", flagship: true },
    { repo: "skill-os-ui", category: "Core", flagship: true },
    { repo: "ai-platform", category: "Data & AI", flagship: false },
  ];
}
