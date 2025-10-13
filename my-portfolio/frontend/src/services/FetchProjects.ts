import type { Project } from "../types/project";

const url = import.meta.env.VITE_BASE_URL;

export const getProjectData = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`${url}`);
    if (!response.ok) {
      throw new Error("not found");
    }
    const json = await response.json();
    return json.data as Project[];
  } catch (err) {
    console.error("failed to fetch data ", err);
    throw err;
  }
};
