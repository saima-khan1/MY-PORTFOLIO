// const api=process.env.API_KEY

import type { Project } from "../types/project";

export const getProjectData = async (): Promise<Project[]> => {
  try {
    const response = await fetch("http://localhost:5005/api/projects");
    if (!response.ok) {
      throw new Error("not found");
    }
    const json = await response.json();
    console.log(json, "data");
    return json.data as Project[];
  } catch (err) {
    console.error("failed to fetch data ", err);
    throw err;
  }
};
