"use client";

import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import '../../../../globals.css';


const getThemeColors = () => {
  const root = document.documentElement;
  return {
    primary: getComputedStyle(root).getPropertyValue("--primary").trim(),
    secondary: getComputedStyle(root).getPropertyValue("--secondary").trim(), 
    bar: "#ff6c2f",
    tertiary: getComputedStyle(root).getPropertyValue("--tertiary").trim(),
    background: getComputedStyle(root).getPropertyValue("--background").trim() 
  };
};
const Graph: React.FC = () => {

  const [themeColors, setThemeColors] = useState(getThemeColors());

  useEffect(() => {
    const updateThemeColors = () => setThemeColors(getThemeColors());

    window.addEventListener("DOMContentLoaded", updateThemeColors);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateThemeColors);

    return () => {
      window.removeEventListener("DOMContentLoaded", updateThemeColors);
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", updateThemeColors);
    };
  }, []);

  const options = {
    chart: {
      id: "sales-chart",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: {
        style: {
          colors: themeColors.secondary, 
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    colors: [themeColors.bar],
    plotOptions: {
      bar: {
        borderRadius: 5,
      },
    },
    grid: {
      borderColor: themeColors.primary,
      strokeDashArray: 5,
      opacity: 0.7,
    },
    tooltip: {
      style: {
        fontSize: "14px",
      },
    },
  };

  const series = [
    {
      name: "Sales",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 83, 24, 62, 78],
    },
  ];

  return (
    <div className="app bg-primary p-4 rounded-lg max-w-[853px]">
      <div className="row">
        <div className="mixed-chart w-full h-auto">
          <Chart options={options} series={series} type="bar" width="100%" height="393" />
        </div>
      </div>
    </div>
  );
};

export default Graph;
