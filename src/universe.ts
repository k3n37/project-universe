export type ProjectCard = {
  repo: string;
  category: string;
  flagship: boolean;
};

export function featuredProjects(): ProjectCard[] {
  return [
    { repo: "orbit", category: "Products", flagship: true },
    { repo: "skill-os-ui", category: "Core", flagship: true },
    { repo: "synapse", category: "Data & AI", flagship: false },
  ];
}
