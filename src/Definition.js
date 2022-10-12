import React from "react";

export default function Definition(props) {
  if (props.results) {
    return (
      <div className="definition-section">
        <h2>{props.results.word}</h2>
      </div>
    );
  } else {
    return null;
  }
}
