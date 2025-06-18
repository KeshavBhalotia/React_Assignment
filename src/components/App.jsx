import React from "react";
import Card from "./Card";
import accessories from "./accessories";
import Search from "./Search";

function App() {
  return (
    <div>
      <header>
        <h1>Hero Motocorp</h1>
      </header>
      <h2>Welcome to our Accessory Shop</h2>
      <Search />
    </div>
  );
}

export default App;
