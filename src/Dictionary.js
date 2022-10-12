import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import "./App.css";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }
  return (
    <div className="container">
      <div className="search-section">
        <h2>Search for a word you want to look up</h2>
        <form onSubmit={search}>
          <input type="search" onChange={handleWordChange} />{" "}
          <input type="submit" />
        </form>
      </div>
      <div className="photos-section"></div>
      <Definition results={results} />
    </div>
  );
}
