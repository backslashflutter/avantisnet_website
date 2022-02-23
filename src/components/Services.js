import React from "react";

// images
import img from "../images/services/itconsultancy_image.png";
import img2 from "../images/services/workplaceeducation_image.png";
import img3 from "../images/services/ecommerce_image.png";
import img4 from "../images/services/hwmaintenance_image.png";

const Services = () => {
  return (
    <div id="services">
      {/* 4 Cards  */}
      <section className="bg-gray-100 py-12">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Services
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-2 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-base md:text-xl lg:text-2xl font-semibold text-blue-900">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        <div className="px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t h-20 w-auto justify-self-center"
                  src={img}
                />
                <h2 className="font-semibold my-7 text-2xl text-left md:my-6">
                  IT CONSULTING
                </h2>
                <p className="text-md font-medium">
                  All of our professionals knowledge and insight is at your
                  disposal to provide you with the information you need to
                  successfully design and manage.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t h-20 w-auto justify-self-center"
                  src={img2}
                />
                <h2 className="font-semibold my-3 text-2xl text-left md:my-2">
                  WORKPLACE EDUCATION
                </h2>
                <p className="text-md font-medium">
                  Today’s generation of workers have put employee education and
                  development high on their list of the most-desired benefits
                  that a company can offer.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t h-20 w-auto justify-self-center"
                  src={img3}
                />
                <h2 className="font-semibold my-7 text-2xl text-left md:my-6">
                  E-COMMERCE
                </h2>
                <p className="text-md font-medium">
                  Get an E-commerce Web Design that will attract new customers
                  and really sell to increase your business. We will take care
                  of everything.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t h-20 w-auto justify-self-center"
                  src={img4}
                />
                <h2 className="font-semibold my-6 text-2xl text-left md:my-5">
                  H/W Maintenance
                </h2>
                <p className="text-md font-medium">
                  <div>
                    <p className="text-md font-medium md:text-left pb-1">
                      We will get everything done for you.
                    </p>
                    <p className="text-md font-medium md:text-left">
                      From maintaining PC, implementing network equipments, and
                      other devices like Fax and Printers. PC, network
                      equipements, fax, printers
                    </p>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process  */}
      <section>
        <div className="m-auto max-w-6xl p-4 md:p-12 h-5/6">
          <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left">
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                  <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
                </svg>
              </div>
              <h3
                className="text-3xl  text-blue-900 
                            font-bold"
              >
                Analysis & <span className="font-semibold">Strategy</span>
              </h3>
              <div>
                <p className="my-3 text-base mx-2  text-gray-600 font-medium">
                  We don’t only listen to your needs, we dive deep into historic
                  performance data and identify what works and what doesn’t.
                  This fuels our information architecture, content strategy, and
                  design.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                </svg>
              </div>
              <h3 className="text-3xl  text-blue-900 font-bold">
                Post <span className="font-semibold">Launch</span>
              </h3>
              <div>
                <p className="my-4 text-base text-gray-600 font-medium mx-2">
                  Post-launch on digital marketing efforts, web design changes,
                  development improvements, or simply keeping their website
                  up-to-date with the latest browser and security updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
