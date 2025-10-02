import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGooglecloud,
  SiJest,
  SiTailwindcss,
  //   SiMaterialui,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-sky-500" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <FaNodeJs className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  {
    name: "REST API / GraphQL",
    icon: <FaDatabase className="text-gray-600" />,
  },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  // { name: "Material UI", icon: <SiMaterialui className="text-indigo-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "GCP", icon: <SiGooglecloud className="text-blue-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "Git/GitHub", icon: <FaGitAlt className="text-red-500" /> },
  {
    name: "Testing (Jest, Supertest)",
    icon: <SiJest className="text-pink-500" />,
  },
];

const Skills = () => {
  return (
    <div className=" md:px-20 py-30">
      <div className="text-center  lg:mb-12">
        <h1 className="text-5xl font-bold">
          My <span className="text-blue-600">Skills</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 py-20">
        {skills.map((skill, index) => (
          <div
            key={index}
            className=" text-2xl  flex flex-col items-center p-4 bg-gray-100 rounded-2xl border-4 border-amber-500   hover:scale-105 transition"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="font-semibold text-gray-700 dark:text-gray-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
