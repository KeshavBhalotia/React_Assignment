import React, { useState } from "react";
import accessories from "./accessories";
import Card from "./Card";

function createCard(currentAccessory) {
  return (
    <Card
      key={currentAccessory.id}
      imgURL={currentAccessory.imgURL}
      name={currentAccessory.name}
      price={currentAccessory.price}
      brand={currentAccessory.brand}
      type={currentAccessory.type}
      description={currentAccessory.description}
    />
  );
}

//function updateSearch(curr) {}

function Search() {
  //creating a hook
  //const [store, setStore] = useState(accessories);

  const [data, setData] = useState("");

  let filteredData = accessories.filter((currValue) => {
    return currValue.type.toLowerCase().includes(data);
  });

  function getData(event) {
    setData(event.target.value);
  }

  return (
    <div className="container">
      <input type="text" placeholder="Search here...." onChange={getData} />
      {filteredData.map(createCard)}
      {/* {accessories.map(createCard)} */}
    </div>
  );
}

export default Search;
