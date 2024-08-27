import React, { useState, useEffect } from "react";

const App = () => {
  const [text, setText] = useState(""); // State to store markdown text

  // Handler for updating the text state when textarea value changes
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="app">
      <div className="markdown-container">
        {/* Textarea for writing markdown */}
        <textarea
          className="textarea"
          onChange={handleTextChange}
          placeholder="Enter your markdown here..."
        ></textarea>
        
        {/* Preview section */}
        <div className="preview">
          <h1>Markdown Preview</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
