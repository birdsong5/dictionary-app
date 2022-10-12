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
      <div className="photos-section"></div>
    </div>
  );
}

export default App;
