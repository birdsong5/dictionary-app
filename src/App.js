import React from "react";

import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <div className="container">
        <Dictionary />
        <div className="photos-section"></div>
        <div className="definition-section"></div>
      </div>
    </div>
  );
}

export default App;
