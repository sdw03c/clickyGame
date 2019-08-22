import React from "react";
import "./style.css";

const Card = props => (
  <div className="card" onClick={() => props.clickImage(props.id)}>
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>
  </div>
);

export default Card;
