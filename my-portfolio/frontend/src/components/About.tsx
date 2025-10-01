import myphoto from "./../assets/myphoto.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center p-15 lg:p-50">
      <img
        src={myphoto}
        alt="Saima"
        className="w-40  lg:w-100 lg:h-100 rounded-full border-4 border-blue-500"
      />
      <h1 className="text-2xl lg:text-5xl font-bold mt-4">
        Hi, I'm <span className="text-blue-500 ">Saima</span>
        <span className="text-white text-glow text-foreground ml-2">Khan</span>
      </h1>
      <p className="text-sm md:text-xl lg:text-2xl text-gray-700 leading-relaxed mt-6 max-w-3xl text-center ">
        A passionate{" "}
        <span className="font-semibold text-blue-600">
          Fullstack Web Developer
        </span>{" "}
        specializing in{" "}
        <span className="font-semibold text-blue-600"> React.js, Node.js</span>{" "}
        , and modern web technologies.{" "}
        <span className="font-semibold text-blue-600">
          fast, scalable, and user-friendly
        </span>{" "}
        I love building applications that{" "}
        <span className="font-semibold text-blue-600">
          solve real-world problems.
        </span>{" "}
        With experience across{" "}
        <span className="font-semibold text-blue-600">
          frontend and backend development,
        </span>{" "}
        I enjoy turning ideas into interactive digital experiences.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
        Dowmload CV
      </button>
    </div>
  );
};

export default Home;
