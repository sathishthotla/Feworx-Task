


import React, { useState } from "react";

const ToolsTable = ({ data }) => {
  const [search, setSearch] = useState("");

  const filtered = data.filter(t =>
    t.tool_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h3>Tools Table</h3>

      <input
        placeholder="Search Tool..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "6px", width: "300px" }}
      />

      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Tool Name</th>
            <th>Vendor</th>
            <th>Sub Category</th>
            <th>Short Description</th>
            <th>Key Use Case</th>
            <th>Deployment</th>
            <th>Business Size</th>
            <th>Pricing</th>
            <th>Integration</th>
            <th>Website</th>
            <th>Status</th>
            <th>Feature</th>
            {/* <th>Category</th>
            <th>Industries</th> */}
          </tr>
        </thead>

        <tbody>
          {filtered.map((t) => (
            <tr key={t.tool_id}>
              <td>{t.tool_name}</td>
              <td>{t.vendor_company_name}</td>
              <td>{t.sub_category}</td>
              <td>{t.short_description}</td>
              <td>{t.key_use_case}</td>
              <td>{t.deployment_type}</td>
              <td>{t.business_size_fit}</td>
              <td>{t.pricing_model}</td>
              <td>{t.integration_capability}</td>
              <td>
                <a href={t.website_demo_link} target="_blank" rel="noreferrer">
                  Link
                </a>
              </td>
              <td>{t.status}</td>
              <td>{t.feature}</td>
              {/* <td>{t.category?.category_name}</td>
              <td>
                {t.industries?.map(i => i.industry_name).join(", ")}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ToolsTable;
