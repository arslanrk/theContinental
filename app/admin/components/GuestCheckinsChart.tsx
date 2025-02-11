"use client"


import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GuestCheckinsChart = () => {
  // Dummy data for guest check-ins and check-outs
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Days of the week
    datasets: [
      {
        label: "Guest Check-ins",
        data: [15, 22, 34, 18, 25, 40, 50], // Replace with real data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, // Curve for the line
      },
      {
        label: "Guest Check-outs",
        data: [10, 18, 30, 14, 22, 35, 45], // Replace with real data
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4, // Curve for the line
      },
    ],
  };

  // Graph options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 10 },
      },
    },
  };

  return (
    <div className="bg-[#191C24] rounded-lg p-5 flex flex-col gap-3 w-full">
        <span className="text-white font-heading text-lg">Operational Insights</span>
        <Line data={data} options={options} />
    </div>
  );
};

export default GuestCheckinsChart;
