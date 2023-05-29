import React, { useEffect, useState } from "react";
import { FaExpand, FaFreebsd } from "react-icons/fa";
import { marked } from "marked";

const Preview = ({ markdown }) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const convertedHtml = marked(markdown);
    setHtml(convertedHtml);
  }, [markdown]);

  return (
    <div className="flex-1 w-full h-full">
      <div className="bg-[#4aa3a3] flex justify-between">
        <div className="ml-2 flex items-center">
          <FaFreebsd className="mr-2" />
          <h2 className="p-1">Previewer</h2>
        </div>
        <button>
          <FaExpand className="mr-2" />
        </button>
      </div>
      <div
        id="preview"
        className="w-full h-full bg-[#c0d8d8] min-h-[20vh] p-5"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
};

export default Preview;
