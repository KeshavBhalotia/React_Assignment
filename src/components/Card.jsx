import React, { useState } from "react";

//import button from "./button";

function Card(props) {
  const [showDescription, setShowDescription] = useState(false);
  function updateCard() {
    setShowDescription(() => !showDescription);
  }
  return (
    <div className="item">
      <h1>{props.name}</h1>
      <img src={props.imgURL} alt="Helmet" />

      <p> Price: {props.price}</p>
      <p> Brand: {props.brand}</p>
      <p> Type: {props.type}</p>
      {showDescription && <p>{props.description}</p>}
      <button onClick={updateCard}>
        {showDescription ? "Show Less" : "Know More"}
      </button>
    </div>
  );
}

export default Card;
