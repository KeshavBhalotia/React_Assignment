import React from "react";
import accessories from "./accessories";

const Buttons = ({ menuItems, setItem }) => {
  return (
    <>
      {menuItems.map((category) => {
        return (
          <div>
            <button
              onClick={() => {
                setItem(
                  accessories.filter(
                    (currentAccessory) => currentAccessory.type === category
                  )
                );
              }}
            >
              {category}
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          setItem(accessories);
        }}
      >
        All
      </button>
    </>
  );
};

export default Buttons;
