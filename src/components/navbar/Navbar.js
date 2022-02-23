import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLinks from "../navbar/Navlinks";
import avantisLogo from "../../images/avantisLogo.png";

const NavBar = () => {
  // use state
  const [top, setTop] = useState(true);
  const [isOpen, setisOpen] = React.useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${
        !top && "bg-white shadow-lg"
      }`}
    >
      <div className="flex flex-row justify-between items-center  py-6 px-2">
        <div class="flex flex-row h-full mx-16 sm:justify-between xl:px-0">
          {/* AvantisNet Logo  */}

          <Link to="/">
            <a
              href="/"
              class="relative items-center inline-block h-full font-black"
            >
              <img
                src={avantisLogo}
                className="h-12 lg:h-18 md:h-12"
                alt="avantisLogo"
              />
            </a>
          </Link>
        </div>

        <div className="group flex flex-col items-center">
          <button
            className="p-2 rounded-lg lg:hidden text-blue-900"
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
          <div className="hidden space-x-6 md:space-x-0 lg:inline-block">
            <NavLinks />
          </div>

          <div
            className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white rounded-lg block lg:hidden shadow-xl top-14 ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <div className="flex flex-col space-y-6 md:space-y-0">
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
