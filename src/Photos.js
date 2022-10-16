import React from "react";
import "./App.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="photos-section">
        {props.photos.map(function (photo, index) {
          return <img key={index} src={photo.src.tiny} alt={photo.alt} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
