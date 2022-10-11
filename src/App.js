import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <div className="container">
        <div className="search-section">
          <h3>Search for a word you want to look up</h3>
          <form>
            <input type="search" />
            <input type="submit" />
          </form>
        </div>
        <div className="photos-section"></div>
        <div className="definition-section"></div>
      </div>
    </div>
  );
}

export default App;
