import React from 'react';

const KpiCard = ({ title, value, icon }) => {
  return (
    <div className="kpi-card">
      <div className="kpi-icon">{icon}</div>
      <div className="kpi-info">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default KpiCard;