import React from "react";
import NavBar from "../components/navbar/Navbar";
import heroimage from "../images/web-dev.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div>
          <NavBar />
        </div>

        <div className="m-auto mt-20 max-full sm:mt- lg:mt-4 p-2 md:p-12  h-5/6">
          <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <h1 className="leading-relaxed lg:leading-[1.16] md:leading-snug my-10 md:my-4 md:text-5xl lg:text-5xl text-3xl font-bold text-blue-900 md:pt-20">
                We build digital solutions for your business
              </h1>
              <div className="text-base font-semibold tracking-tight mb-5 text-gray-600">
                AvantisNet is a team of highly motivated and skilled developers
                who deliver best and scalable software for your business.
              </div>
              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <Link
                  to="/contact"
                  className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center  px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:mb-0"
                >
                  Contact Us
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex lg:justify-end w-full lg:w-1/2 md:max-w">
              <img
                alt="card img"
                className="rounded-t float-right duration-1000 w-full"
                src={heroimage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
