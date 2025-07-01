import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import accessories from "./accessories";
import Search from "./Search";
import Menu from "./Menu";
import Filters from "./Filters";
import ProductFilters from "./ProductFilters";

function App() {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    maxPrice: undefined,
  });

  return (
    <div class="flex flex-col gap-2">
      <header>
        <h1>Hero Motocorp</h1>
      </header>
      <h2>Welcome to our Accessory Shop</h2>
      {/* <Search /> */}
      <Filters
        onChange={(newFilters) => {
          setFilters(newFilters);
        }}
      />
      <Menu filters={filters} />
    </div>
  );
}

export default App;
