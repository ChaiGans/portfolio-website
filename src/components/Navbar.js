import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [navbarStatus, setNavbarStatus] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <nav className="flex px-4 justify-between bg-gray-800 min-w-screen items-center relative z-10">
        <div className="text-white font-manropebold py-5 text-lg relative hover:scale-110 duration-300 transition ease-in-out delay-150 hover:cursor-pointer">
          Elbert Chailes
        </div>
        <div
          onClick={() => setNavbarStatus(!navbarStatus)}
          className="hover:cursor-pointer"
        >
          <GiHamburgerMenu color="white" size={25} />
          <span class="absolute rounded-full h-2 w-2 bg-red-600 animate-ping top-5 right-3"></span>
          <span class="absolute rounded-full h-2 w-2 bg-red-600 top-5 right-3"></span>
        </div>
      </nav>
      {navbarStatus && (
        <div>
          <div
            onClick={() => setNavbarStatus(!navbarStatus)}
            className="bg-black bg-opacity-50 z-4 absolute top-0 bottom-0 left-0 right-0 hover:cursor-pointer"
          ></div>
          <ul className="flex absolute bg-gray-800 flex-col w-full text-white items-center space-y-4 border-t-2 border-white py-5 font-poppins animate-slidetopbot">
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => scrollToSection("experiences")}
              >
                Experiences
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => scrollToSection("projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => scrollToSection("skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection("contacts")}>
                Contacts
              </a>
            </li>
            <li className=" hover:cursor-not-allowed">Blog</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
