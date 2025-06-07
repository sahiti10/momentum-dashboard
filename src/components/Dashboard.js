import React, { useState, useEffect } from 'react';
import KpiCard from './KpiCard';
import LineChart from './LineChart';
import DataTable from './DataTable';
import { fetchData } from '../services/mockApi';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    // Fetch initial data
    getData();

    // Set up interval to fetch data every 3 seconds
    const interval = setInterval(() => {
      getData();
    }, 3000); // 3-second interval for "real-time" feel

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  if (!data) {
    return <div>Loading Dashboard...</div>;
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Momentum Dashboard</h1>
        <p>Live Analytics Overview</p>
      </header>

      <div className="kpi-grid">
        <KpiCard title="Total Users" value={data.totalUsers.toLocaleString()} icon="👥" />
        <KpiCard title="Active Sessions" value={data.sessions.toLocaleString()} icon="💻" />
        <KpiCard title="Conversion Rate" value={`${data.conversionRate}%`} icon="🎯" />
      </div>

      <div className="main-content">
        <div className="chart-container">
          <LineChart chartData={data.campaignPerformance} />
        </div>
        <DataTable rows={data.recentSignups} />
      </div>
    </div>
  );
};

export default Dashboard;