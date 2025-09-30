import "tailwindcss";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <h1 className="text-5xl text-blue-500 bg-yellow-200">Hello world!</h1>
      <Home />
    </div>
  );
};

export default App;
