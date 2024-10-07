import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);


const LineChart = () => {
  const data = {
    labels: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'],
    datasets: [
      {
        label: 'rate',
        data: [1500, 3000, 5000, 2780, 1890, 2390, 3490],
        fill: false,
        backgroundColor: 'rgba(136, 132, 216, 0.5)',
        borderColor: 'rgba(136, 132, 216, 1)',
        tension: 0.1,
      },
      {
        label: 'Employee engagement',
        data: [2400, 1398, 9800, 3908, 4800, 3800, 7000],
        fill: false,
        backgroundColor: 'rgba(130, 202, 157, 0.5)',
        borderColor: 'rgba(130, 202, 157, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Project',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Rate',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;