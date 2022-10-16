import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import Meaning from "./Meaning";

import "./App.css";

export default function Definition(props) {
  console.log(props.results.phonetics);
  if (props.results) {
    return (
      <div className="definition-section">
        <div className="phonetics-row">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div className="phonetics" key={index}>
                <a href={phonetic.audio} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faPlayCircle} />
                </a>
                {"   "}
                <span className="phonetics-text">{phonetic.text}</span>
              </div>
            );
          })}
        </div>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
