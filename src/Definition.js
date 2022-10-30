import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import Meaning from "./Meaning";

import "./App.css";

export default function Definition(props) {
  if (props.results) {
    return (
      <div className="definition-section">
        <div className="phonetics-row">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            const audio = new Audio(phonetic.audio);
            function playSound() {
              audio.play();
            }
            if (phonetic.audio.length === 0) return <></>;
            return (
              <div className="phonetics" key={index}>
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  opacity="0.8"
                  fontSize={25}
                  onClick={playSound}
                  onTouchEnd={playSound}
                />
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
