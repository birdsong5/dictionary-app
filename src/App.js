import React from "react";

import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>

      <Dictionary />
      <div className="author">
        <a
          className="git"
          href="https://github.com/birdsong5/dictionary-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/inna-troian-772168239/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inna Troian
        </a>
      </div>
    </div>
  );
}

export default App;
