

import React, { useState } from "react";

const CategoryTable = ({ data }) => {
  const [search, setSearch] = useState("");

 
  const filtered = data.filter((t) =>
    t.category?.category_name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <h3>Category Table</h3>

      <input
        placeholder="Search Category..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "6px", width: "300px" }}
      />

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Description</th>
            <th>Business Function</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((t, index) => (
            <tr key={index}>
              <td>{t.category?.category_name}</td>
              <td>{t.category?.description}</td>
              <td>{t.category?.business_function}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CategoryTable;
