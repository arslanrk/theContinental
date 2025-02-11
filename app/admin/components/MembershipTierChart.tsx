"use client"

import React from "react";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";

// Register the necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

const MembershipTierChart = () => {

  // Dummy data for membership tiers
  const data = {
    labels: ["Standard", "Gold", "Platinum", "Elite"], // Membership Tiers
    datasets: [
      {
        label: "Membership Distribution",
        data: [50, 30, 15, 5], // Replace with real percentages or counts
        backgroundColor: [
          "#4CAF50", // Standard - Green
          "#FFD700", // Gold - Golden Yellow
          "#9C27B0", // Platinum - Purple
          "#EB1616", // Elite - Red-Orange
        ],
        borderColor: "#fff", // Border color for bars
        borderWidth: 1,
      },
    ],
  };

 // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw;
            return `${value}%`; // Adding % to each tooltip
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Membership Tier",
        },
      },
      y: {
        title: {
          display: true,
          text: "Percentage (%)",
        },
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="bg-[#191C24] rounded-lg p-5 flex flex-col gap-3 w-full">
        <span className="text-white font-heading text-lg">Membership Insights</span>
        <Bar data={data} options={options} />
    </div>
  );
};

export default MembershipTierChart;
