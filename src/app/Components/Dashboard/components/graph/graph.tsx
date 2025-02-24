"use client";

import React, { useState, useEffect, useMemo } from "react";
import Chart from "react-apexcharts";
import "../../../../globals.css";

//NEED TO FIX COLOR THEME******************************************************
const getThemeColors = () => {
  const root = document.documentElement;
  const colors = {
    primary: getComputedStyle(root).getPropertyValue("--primary").trim(),
    secondary: getComputedStyle(root).getPropertyValue("--secoundary").trim(), 
    bar: "#ff6c2f",
    line: "#2c353e",
    tertiary: getComputedStyle(root).getPropertyValue("--tertiary").trim(),
    background: getComputedStyle(root).getPropertyValue("--background").trim(),
  };

  console.log("Updated Theme Colors:", colors); 
  return colors;
};

const Graph: React.FC = () => {
  const [themeColors, setThemeColors] = useState({
    primary: "",
    secondary: "",
    bar: "#ff6c2f",
    tertiary: "",
    background: "",
    line: "#2c353e",
  });

  useEffect(() => {
    const updateThemeColors = () => {
      const newColors = getThemeColors();
      setThemeColors(newColors);
      console.log("Theme Colors Updated in State:", newColors);
    };

    updateThemeColors();   ``

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
        toolbar: {
          show: false,
        }
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
            fontFamily: "inherit",
            fontWeight: 400,
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
          borderRadius: 3,
          columnWidth: "35%",
          grouped: true,
        },
      },
      grid: {
        borderColor: themeColors.line,
        strokeDashArray: 5,
        opacity: 0.7,
      },
      tooltip: {
        enabled: true,
        theme: "dark",

      },
    }),
    [themeColors] 
  );

  const series = [
    {
      name: "Sales",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 83, 24, 62, 78],
    },
  ];

  return (
    <div className="app bg-primary xl:p-2.5 rounded-xl shadow-lg w-full h-full -z-10">
      <div className="row">
        <div className="mixed-chart w-full">
          <Chart options={options} series={series} type="bar" width="100%" height="393" />
        </div>
      </div>
    </div>
  );
};

export default Graph;
