import React from "react";
import img from "../images/webdev.svg";

const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about-us">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 md:justify-items-center flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-t float-right" src={img} />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl text-blue-900 font-bold sm:text-2xl">
              We're a local GTA IT consulting company that will guide you to
              your success
            </h3>
            <div>
              <p className="my-3 text-base text-gray-600 font-semibold">
                Our team is well vast in software development and is ready to
                develop the applications of your choice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
