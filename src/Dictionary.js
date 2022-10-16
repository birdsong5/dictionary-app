import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import Photos from "./Photos";
import "./App.css";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelApiKey =
      "563492ad6f91700001000001792c58a3e95b408cacff4283a24d7564";
    let headers = { Authorization: `Bearer ${pexelApiKey}` };
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
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
      <Photos photos={photos} />
      <Definition results={results} />
    </div>
  );
}
