import React, { useEffect, useState } from "react";
import { getAllTools } from "../api/api";
import ToolsTable from "../components/ToolsTable";
import CategoryTable from "../components/CategoryTable";
import IndustryTable from "../components/IndustryTable";
import FilterBox from "../components/FilterBox";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState("tools");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllTools().then((res) => setData(res.data));
  }, []);

  const filtered = data.filter((d) =>
    d.tool_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Marketplace Dashboard</h2>

      <select onChange={(e) => setView(e.target.value)}>
        <option value="tools">Tools Table</option>
        <option value="category">Category Table</option>
        <option value="industry">Industry Table</option>
      </select>

      <br /><br />

      <FilterBox setSearch={setSearch} />

      {view === "tools" && <ToolsTable data={filtered} />}
      {view === "category" && <CategoryTable data={filtered} />}
      {view === "industry" && <IndustryTable data={filtered} />}
    </div>
  );
};

export default Dashboard;
