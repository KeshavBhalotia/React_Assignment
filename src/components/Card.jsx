import React, { useState } from "react";

//import button from "./button";

function Card({ item }) {
  const [showDescription, setShowDescription] = useState(false);
  function updateCard() {
    setShowDescription(() => !showDescription);
  }
  //console.log("Rendering Card : ", item);
  return (
    <div className="item">
      <h1>{item.name}</h1>
      <img src={item.imgURL} alt="Helmet" />

      <p> Price: {item.price}</p>
      <p> Brand: {item.brand}</p>
      <p> Type: {item.type}</p>
      {showDescription && <p>{item.description}</p>}
      <button onClick={updateCard}>
        {showDescription ? "Show Less" : "Know More"}
      </button>
    </div>
  );
}

export default Card;
