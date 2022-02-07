import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLinks from "../navbar/Navlinks";

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
              class="relative flex items-center inline-block h-5 h-full font-black leading-none"
            >
              <svg
                class="w-auto h-6 text-blue-700 fill-current"
                viewBox="0 0 194 116"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill-rule="evenodd">
                  <path d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z" />
                  <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z" />
                </g>
              </svg>
              <span class="ml-3 text-xl text-gray-800">
                AvantisNet<span class="text-pink-500">.</span>
              </span>
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
          <div className="hidden space-x-6 lg:inline-block">
            <NavLinks/>
          </div>

          <div
            className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white rounded-lg block lg:hidden shadow-xl top-14 ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <div className="flex flex-col space-y-6">
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
