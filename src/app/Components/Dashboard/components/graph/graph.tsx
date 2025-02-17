"use client";

import React, { useState, useEffect, useMemo } from "react";
import Chart from "react-apexcharts";
import "../../../../globals.css";

const getThemeColors = () => {
  const root = document.documentElement;
  const colors = {
    primary: getComputedStyle(root).getPropertyValue("--primary").trim(),
    secondary: getComputedStyle(root).getPropertyValue("--secoundary").trim(), // Ensure correct spelling in CSS
    bar: "#ff6c2f",
    tertiary: getComputedStyle(root).getPropertyValue("--tertiary").trim(),
    background: getComputedStyle(root).getPropertyValue("--background").trim(),
  };

  console.log("Updated Theme Colors:", colors); // ✅ Logs theme colors
  return colors;
};

const Graph: React.FC = () => {
  const [themeColors, setThemeColors] = useState({
    primary: "",
    secondary: "",
    bar: "#ff6c2f",
    tertiary: "",
    background: "",
  });

  useEffect(() => {
    const updateThemeColors = () => {
      const newColors = getThemeColors();
      setThemeColors(newColors);
      console.log("Theme Colors Updated in State:", newColors); // ✅ Logs theme colors in state
    };

    updateThemeColors(); // Set colors on mount

    // Listen for dark mode changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateThemeColors);

    return () => {
      mediaQuery.removeEventListener("change", updateThemeColors);
    };
  }, []);

  const options = useMemo(
    () => ({
      chart: {
        id: "sales-chart",
      },
      xaxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        ],
        labels: {
          style: {
            colors: themeColors.bar,
            fontSize: "14px",
            fontWeight: 500,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: themeColors.bar,
            fontSize: "14px",
            fontWeight: 500,
          },
        },
      },
      dataLabels: {
        style: {
          colors: [themeColors.bar],
          fontSize: "14px",
          fontWeight: "500",
        },
      },
      colors: [themeColors.bar],
      plotOptions: {
        bar: {
          borderRadius: 5,
          columnWidth: "40%",
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
    }),
    [themeColors] // Recompute options when colors change
  );

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
