import myphoto from "./../assets/myphoto.png";
import { FaDownload } from "react-icons/fa";
import myResume from "./../assets/_SaimaKhan-Resume-Junior FullStack Developer.pdf";

const Home = () => {
  return (
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
          <span className="font-semibold text-blue-600">
            Fullstack Web Developer
          </span>{" "}
          specializing in{" "}
          <span className="font-semibold text-blue-600">React.js</span> and{" "}
          <span className="font-semibold text-blue-600">Node.js</span>.
          passionate about building{" "}
          <span className="font-semibold text-blue-600">
            fast, scalable, and user-friendly
          </span>{" "}
          applications that solve real-world problems.
        </p>

        <div className=" text-base md:text-lg lg:text-2xl space-y-2 mb-6">
          <p>
            🎓 <span className="font-semibold">Degree:</span> Bachelor of
            Engineering(IT)
          </p>
          <p>
            🎓 <span className="font-semibold">Certification:</span> Full Stack
            Web Development
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

        <a
          href={myResume}
          download="SaimaKhan-Resume.pdf"
          className="mt-4 px-10 py-4 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300 flex items-center gap-2"
        >
          <FaDownload className="text-xl" />
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
