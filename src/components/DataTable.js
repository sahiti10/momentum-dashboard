import React from 'react';

const DataTable = ({ rows }) => {
  return (
    <div className="data-table-container">
      <h3>Recent Signups</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.location}</td>
              <td>{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;