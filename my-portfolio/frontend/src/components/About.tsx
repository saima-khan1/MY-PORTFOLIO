import myphoto from "./../assets/myphoto.png";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    // <div className="flex flex-col items-center p-15 lg:p-50">
    //   <img
    //     src={myphoto}
    //     alt="Saima"
    //     className="w-40  lg:w-100 lg:h-100 rounded-full border-4 border-blue-500"
    //   />
    //   <h1 className="text-2xl lg:text-5xl font-bold mt-4">
    //     Hi, I'm <span className="text-blue-500 ">Saima</span>
    //     <span className="text-white text-glow text-foreground ml-2">Khan</span>
    //   </h1>
    //   <p className="text-sm md:text-xl lg:text-2xl text-gray-700 leading-relaxed mt-6 max-w-3xl text-center ">
    //     A passionate{" "}
    //     <span className="font-semibold text-blue-600">
    //       Fullstack Web Developer
    //     </span>{" "}
    //     specializing in{" "}
    //     <span className="font-semibold text-blue-600"> React.js, Node.js</span>{" "}
    //     , and modern web technologies.{" "}
    //     <span className="font-semibold text-blue-600">
    //       fast, scalable, and user-friendly
    //     </span>{" "}
    //     I love building applications that{" "}
    //     <span className="font-semibold text-blue-600">
    //       solve real-world problems.
    //     </span>{" "}
    //     With experience across{" "}
    //     <span className="font-semibold text-blue-600">
    //       frontend and backend development,
    //     </span>{" "}
    //     I enjoy turning ideas into interactive digital experiences.
    //   </p>
    //   <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
    //     Dowmload CV
    //   </button>
    // </div>
    <div className="flex flex-col items-center justify-center gap-10 lg:gap-20 py-16 px-6 lg:px-20">
      <div className="flex justify-center lg:justify-center w-full lg:w-1/3">
        <img
          src={myphoto}
          alt="Saima"
          className="w-40  lg:w-100 lg:h-100 rounded-full border-4 border-blue-500"
        />
      </div>

      <div className="text-center flex flex-col items-center lg:text-left w-full  lg:w-2/3">
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600">Saima</span>{" "}
          <span className="text-amber-600">Khan</span>
        </h1>

        <p className="text-base md:text-lg lg:text-2xl  leading-relaxed mb-6">
          I’m a{" "}
          <span className="font-semibold text-blue-600">
            Fullstack Web Developer
          </span>{" "}
          specializing in{" "}
          <span className="font-semibold text-blue-600">React.js</span> and{" "}
          <span className="font-semibold text-blue-600">Node.js</span>. I’m
          passionate about building{" "}
          <span className="font-semibold text-blue-600">
            fast, scalable, and user-friendly
          </span>{" "}
          applications that solve real-world problems.
        </p>

        <div className=" text-base md:text-lg lg:text-2xl space-y-2 mb-6">
          <p>
            🎓 <span className="font-semibold">Degree:</span> Bachelor’s in
            Computer Science
          </p>
          <p>
            💼 <span className="font-semibold">Experience:</span> 1+ year in
            Fullstack Development
          </p>
          <p>
            🌍 <span className="font-semibold">Location:</span> Helsingborg,
            Sweden
          </p>
        </div>

        <button className="mt-4 px-10 py-4 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300 flex items-center gap-2">
          <FaDownload className="text-xl" />
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Home;
