import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import { useState } from "react";


const App = () => {
  const [markdown, setMarkdown] = useState("");

  const handleEditorChange = (value) => {
    setMarkdown(value);
  };
  return (
    <div>
      <body className="bg-[#87b5b5] min-h-[100vh] flex flex-col items-center">
        <div className="p-4" />
        <div className="w-[60vw] h-full">
          <Editor onChange={handleEditorChange} />
        </div>
        <div className="mt-2 w-[80vw] h-full">
          <Preview markdown={markdown} />
        </div>
      </body>
    </div>
  );
};

export default App;
// w-full h-[30vh]
