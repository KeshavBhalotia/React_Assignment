import React from "react";
import Card from "./Card";

function CreateCard({ item }) {
  // console.log("Rendering CreateCard : ", item);
  return <Card item={item} />;
}

export default CreateCard;
