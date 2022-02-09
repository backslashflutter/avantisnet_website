import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import dateFormat from "dateformat";
const Notice = ({ notice }) => {
  const { date, notice_title, description } = notice.fields;
  const final_date = dateFormat(date, "isoDateTime");
  return (
    <div className="p-10 bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700    rounded-lg shadow-2xl">
      <div className="m-2 text-justify text-sm">
        <h4 className="font-semibold my-4 text-2xl text-center text-blue-900  ">
          {notice_title}
        </h4>
        <div className="text-md font-medium">
          <p className="text-left">{documentToReactComponents(description)}</p>
        </div>
        <div className="text-md font-medium">
          <p className="text-left">{final_date.slice(0, 10)}</p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
