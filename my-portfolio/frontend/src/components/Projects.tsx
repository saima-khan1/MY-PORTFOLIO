import { FiExternalLink, FiGithub } from "react-icons/fi";
const projects = [
  {
    id: 1,
    title: "Large JSON Handler",
    description: "Efficiently handles and searches large JSON data.",
    tech: ["React", "Node.js", "TypeScript"],
    image: "https://picsum.photos/400/250",
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Flight Ticket Itinerary",
    description: "Modern UI for flight bookings and itineraries.",
    tech: ["React", "Tailwind", "TypeScript"],
    image: "https://picsum.photos/400/250",
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "Full-stack store with product search and cart.",
    tech: ["Next.js", "MongoDB", "Node.js"],
    image: "https://picsum.photos/400/250",
    demo: "#",
    github: "#",
  },
];
const Projects = () => {
  return (
    <div className=" md:px-20 py-30">
      <div className="text-center  lg:mb-12">
        <h1 className="text-5xl font-bold">
          <span className="text-blue-600">Projects</span>
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 mt-30">
        {" "}
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-900 rounded-2xl border-4 border-amber-500 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200  dark:border-gray-700 lg:p-10   "
          >
            {" "}
            <img src={project.image} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-600 dark:text-gray-100 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3 ">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-md  bg-amber-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-2 py-2 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.demo}
                  className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 text-sm"
                >
                  <FiExternalLink /> Demo
                </a>
                <a
                  href={project.github}
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
