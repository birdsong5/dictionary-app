import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import Definition from "./Definition";
import Photos from "./Photos";
import "./App.css";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  let searchValue = `<FontAwesomeIcon icon="fa-regular fa-magnifying-glass" />Search`;

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelApiKey =
      "563492ad6f91700001000001792c58a3e95b408cacff4283a24d7564";
    let headers = { Authorization: `Bearer ${pexelApiKey}` };
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    axios.get(pexelApiUrl, { headers: headers }).then(handlePexelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (word.length > 0) {
      search();
    } else {
      alert("Please enter a word.");
    }
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="search-section">
          <h2>Search for a word you want to look up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleWordChange}
              defaultValue={props.defaultWord}
            />{" "}
            <input type="submit" value="Search" />
          </form>
        </div>
        <Photos photos={photos} />
        <Definition results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
