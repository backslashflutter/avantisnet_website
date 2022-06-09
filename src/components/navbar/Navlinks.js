import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <>
      <HashLink
        className="px-4 ml-0 mr-0 font-semibold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600"
        smooth
        to="/#hero"
      >
        Home
      </HashLink>
      <HashLink
        className="px-4 ml-0 mr-0 font-semibold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600"
        smooth
        to="/#about-us"
      >
        About Us
      </HashLink>

      <HashLink
        className="px-4 ml-0 mr-0 font-semibold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600"
        smooth
        to="/#services"
      >
        Services
      </HashLink>
      <HashLink
        className="px-4 ml-0 mr-0 font-semibold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600"
        smooth
        to="/#portfolio"
      >
        Portfolio
      </HashLink>

      <HashLink
        className="hover:bg-blue-800 bg-blue-900 px-3 ml-0 mr-0 font-medium duration-100  text-white text-base lg:mr-6 transition-color hover:text-white rounded-xl  w-full  py-3 my-4  shadow-xl sm:w-auto sm:mb-0 md:my-4 md:text-center md:m-10"
        smooth
        to="/contact"
      >
        Contact Us
      </HashLink>
    </>
  );
};

export default NavLinks;
