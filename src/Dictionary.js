import React, { useState } from "react";
import "./App.css";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searchg for ${word}`);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }
  return (
    <div className="search-section">
      <h3>Search for a word you want to look up</h3>
      <form onSubmit={search}>
        <input type="search" onChange={handleWordChange} />
        <input type="submit" />
      </form>
    </div>
  );
}
