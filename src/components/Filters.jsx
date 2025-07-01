import React from "react";
import { useState, useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce";
import accessories from "./accessories";
import { ProductFilters } from "./ProductFilters";

export default function Filters({ onChange }) {
  const [search, setSeach] = useState();
  const debouncedSearch = useDebounce(search);

  const [category, setCategory] = useState();
  const [maxPrice, setMaxPrice] = useState();

  useEffect(() => {
    onChange({ category, maxPrice, search: debouncedSearch });
  }, [category, debouncedSearch, maxPrice]);

  return (
    <>
      <div>
        <input
          type="text"
          value={search || ""}
          onChange={(e) => setSeach(e.target.value)}
          placeholder="Seach with me....."
        ></input>
        {/* dropdown menu for accessory type */}
        <select
          value={category || ""}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="helmet">Helmet</option>
          <option value="seat cover">Seat Cover</option>
          <option value="mobile holder">Mobile Holder</option>
          <option value="cover">Cover</option>
          <option value="riding gear">Riding Gear</option>
          <option value="luggage">Luggage</option>
          <option value="maintenance">Maintenance</option>
          <option value="performance">Performance</option>
          <option value="electronics">Electronics</option>
        </select>

        {/* dropdown menu for max price */}
        <select
          value={maxPrice || ""}
          onChange={(e) =>
            setMaxPrice(e.target.value ? parseInt(e.target.value) : undefined)
          }
        >
          <option value="">Select Maximum Price</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
          <option value="4000">4000</option>
          <option value="5000">5000</option>
          <option value="6000">6000</option>
          <option value="7000">7000</option>
          <option value="8000">8000</option>
          <option value="9000">9000</option>
          <option value="10000">10000</option>
          <option value="11000">11000</option>
          <option value="12000">12000</option>
          <option value="13000">13000</option>
          <option value="14000">14000</option>
        </select>
      </div>
    </>
  );
}
