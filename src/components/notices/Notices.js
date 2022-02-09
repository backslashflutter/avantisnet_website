import React from "react";
import Notice from "./Notice";

const Notices = ({ notices }) => {
  return (
    <div className="my-4 py-4 bg-gray-100" id="notices">
      <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
        Notice/Updates
      </h2>
      <div className="flex justify-center">
        <div className="w-24 border-2 border-blue-900 mb-8"></div>
      </div>

      {/* main design for card  */}
      <div className="px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {notices.map((notice, index) => (
            <Notice notice={notice} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;
