export interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  gitHubLink: string;
  demoLink?: string;
}
