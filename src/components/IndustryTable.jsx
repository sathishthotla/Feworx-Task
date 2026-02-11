import React from "react";

const IndustryTable = ({ data }) => {
  return (
    <>
      <h3>Industry Table</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Industries</th>
          </tr>
        </thead>
        <tbody>
          {data.map((t, index) => (
            <tr key={index}>
              <td>
                {t.industries?.map((i) => i.industry_name).join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default IndustryTable;
