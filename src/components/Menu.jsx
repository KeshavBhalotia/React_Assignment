import React, { useState, useEffect } from "react";
import accessories from "./accessories";
import Buttons from "./Buttons";
import CreateCard from "./createCard";

function Menu({ filters }) {
  const { search, category, maxPrice } = filters;
  //const menuItems = [...new Set(accessories.map((currItem) => currItem.type))];

  //item hook
  const [item, setItem] = useState(accessories);

  useEffect(() => {
    let filteredItems = accessories;

    //Apply search filter
    if (search && search.trim() !== "") {
      filteredItems = filteredItems.filter((acc) => {
        return acc.name.toLowerCase().includes(search.toLowerCase());
      });
    }

    //Apply category filter
    console.log(typeof category);
    if (category) {
      filteredItems = filteredItems.filter((acc) => {
        return acc.type.toLowerCase() === category.toLowerCase();
      });
    }

    //Apply price filter
    if (maxPrice !== undefined) {
      filteredItems = filteredItems.filter((acc) => acc.price <= maxPrice);
    }
    setItem(filteredItems);
  }, [filters]);

  return (
    <div>
      {item.map((currentAccessory) => {
        return <CreateCard key={currentAccessory.id} item={currentAccessory} />;
      })}
    </div>
  );
}

export default Menu;
