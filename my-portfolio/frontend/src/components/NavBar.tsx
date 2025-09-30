import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const links = [
  { name: "home", href: "#home" },
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-500 p-6 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-semibold ">
          <span className="text-white">Saima</span>
          <span className="text-blue-500 ml-2">Portfolio</span>
        </p>

        <ul className="hidden md:flex flex-row space-x-6 text-xl font-normal text-amber-50">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-200">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-5xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col mt-4 space-y-2 md:hidden text-white">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-200"
              >
                {link.name}{" "}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
