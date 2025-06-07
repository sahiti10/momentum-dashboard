// This service simulates a real-time API connection.
// In a real application, this would be replaced with a WebSocket or a polling mechanism.

const initialData = {
  totalUsers: 14278,
  sessions: 3504,
  conversionRate: 12.53,
  campaignPerformance: {
    labels: ['9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM'],
    datasets: [{
      label: 'User Signups',
      data: [65, 59, 80, 81, 56, 55, 60],
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.4,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    }]
  },
  recentSignups: [
    { id: 1, name: 'John Doe', location: 'New York, USA', time: '2 mins ago' },
    { id: 2, name: 'Jane Smith', location: 'London, UK', time: '3 mins ago' },
    { id: 3, name: 'Sam Green', location: 'Tokyo, JP', time: '5 mins ago' },
    { id: 4, name: 'Emily White', location: 'Sydney, AU', time: '8 mins ago' },
  ]
};

// Function to generate random data updates
export const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      // Simulate KPI changes
      initialData.totalUsers += Math.floor(Math.random() * 5);
      initialData.sessions += Math.floor(Math.random() * 10);

      // Simulate chart data update
      const newChartData = [...initialData.campaignPerformance.datasets[0].data];
      newChartData.shift(); // Remove the oldest data point
      newChartData.push(Math.floor(Math.random() * (90 - 50 + 1)) + 50); // Add a new one
      initialData.campaignPerformance.datasets[0].data = newChartData;
      
      const newLabels = [...initialData.campaignPerformance.labels];
      newLabels.shift();
      const lastTime = newLabels[newLabels.length-1];
      const newHour = (parseInt(lastTime) % 12) + 1;
      newLabels.push(`${newHour}:00${newHour > 8 ? 'PM' : 'AM'}`);
      initialData.campaignPerformance.labels = newLabels;


      resolve({ ...initialData });
    }, 500); // Simulate network latency
  });
};