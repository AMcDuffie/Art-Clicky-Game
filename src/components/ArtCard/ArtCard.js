//sets up the reusable ArtCard component
import React from "react";
import "./style.css";

//pass the image into each card so all 12 are rendered
const ArtCard = props => (
  <div class="wrapper">
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
    <img alt={props.image.replace(".jpg", "")} src={props.image} />
    </div>
  </div>
  </div>
);

export default ArtCard;