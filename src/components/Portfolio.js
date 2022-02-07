import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="my-4 py-4" id="portfolio">
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
          Portfolio
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-2 border-blue-900 mb-8"></div>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-2xl text-center">
                  MoliEats
                </h4>
                <div className="text-md font-medium">
                  <p className="text-left">
                    Complete Restaurant Management App created in Xamarin
                    Technology.
                  </p>
                  <p className="text-left pt-2">
                    There is Owner, Admin, Customer and Our Delivery Boy for
                    peforming respective tasks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-2xl text-center">
                  FlutterFirebase
                </h4>
                <div className="text-md font-medium">
                  <p className="text-left">
                   Todo App created in Flutter and Firebase Framework.
                  </p>
                  <p className="text-left pt-2">
                    Through this app, you can easily make Todo and keep check of your schedule. 
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h4 className="font-semibold my-4 text-2xl text-center">
                  Pengu Inventive
                </h4>
                <div className="text-md font-medium">
                  <p className="text-left">
                    Beautiful, Durable and Multi Purpose 
                  </p>
                  <p className="text-left pt-2">
                    Pengu Inventive is a direct to customer brand. Which started with mission to be leader in Space saving furniture. 
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-sm">
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  GPS Tracker
                </h2>
                <div className="text-md font-medium">
                  <p className="text-left">
                    Easily Track the location by fetching the current coordinates of the user. 
                  </p>
                  <p className="text-left pt-2">
                    We can easily get the Lattitude and Longitude that will help to fetch the user current location. This is design in Flutter Framework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
