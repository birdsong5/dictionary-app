import React from "react";
import "./App.css";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <div className="synonyms">
        {" "}
        Synonyms:{" "}
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index} className="synonym-word">
              {synonym}{" "}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
