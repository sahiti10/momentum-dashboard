import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Live Campaign Performance',
      font: {
        size: 18,
      }
    },
  },
   scales: {
    y: {
      beginAtZero: true
    }
  }
};

const LineChart = ({ chartData }) => {
  return <Line options={options} data={chartData} />;
};

export default LineChart;