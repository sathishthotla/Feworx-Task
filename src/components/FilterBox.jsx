import React from "react";

const FilterBox = ({ setSearch }) => {
  return (
    <input
      placeholder="Search..."
      onChange={(e) => setSearch(e.target.value)}
      style={{ padding: "8px", width: "300px", marginBottom: "15px" }}
    />
  );
};

export default FilterBox;

