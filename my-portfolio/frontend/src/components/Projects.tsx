import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "../types/project";
import { getProjectData } from "../services/FetchProjects";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const projectData = await getProjectData();
      setProjects(projectData);
    } catch (err) {
      console.error("failed to fetch", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (projects.length === 0) return <p>No projects Found</p>;
  return (
    <div className=" px-5  lg:px-5 md:px-5 lg:py-20">
      <div className="text-center mt-10  lg:mb-12">
        <h1 className="text-4xl lg:text-7xl md:text-4xl font-bold">
          <span>Featured</span>
          <span className="text-blue-600 ml-4">Projects</span>
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-4  lg:mt-30">
        {" "}
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white dark:bg-gray-900 rounded-2xl border-4 border-amber-500 hover:shadow-blue-900 sm:hover:shadow-amber-900 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 dark:border-gray-700  lg:p-2     "
          >
            {" "}
            <img src={project.image} className="w-full h-30 lg:h-49 " />
            <div className="p-2  lg:p-4 md:p-2">
              <h3 className="text-lg lg:text-2xl md:text-2xl font-bold text-gray-600 dark:text-gray-100 mb-2">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 ">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm lg:text-md md:text-md  bg-amber-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-2 py-2 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {project.description}
              </p>

              <div className="flex gap-3">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 text-sm"
                  >
                    <FiExternalLink /> Demo
                  </a>
                )}

                <a
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700 text-sm"
                >
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
