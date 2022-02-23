import React from "react";
import Notice from "./Notice";
import { Link } from "react-router-dom";

const Notices = ({ notices }) => {
  return (
    <div className="my-4 py-4 bg-gray-100" id="notices">
      <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
        Notice/Updates
      </h2>
      <div className="flex justify-center">
        <div className="w-24 border-2 border-blue-900 mb-8"></div>
      </div>
      <div className="overflow-x-scroll flex">
        {notices.map((notice) => (
          <div className="inline-block py-2 px-3">
            <Notice notice={notice} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
          <Link
            to="/notices"
            className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center  px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:mb-0"
          >
            <h2>See More</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notices;
