"use client";

import React, { useState, useEffect, useMemo } from "react";
import Chart from "react-apexcharts";
import "../../../../globals.css";

//NEED TO FIX COLOR THEME******************************************************

const Graph: React.FC = () => {
  const [primary, setprimary] = useState("");
  const [secondary, setsecondary] = useState("");
  const [tertiary, settertiary] = useState("");
  const [background, setbackground] = useState("");
  const [textcolor, settextcolor] = useState("");
  const [bar, setbar] = useState("");

  useEffect(() => {
    const updateThemeColors = () => {
      const root = getComputedStyle(document.documentElement);
      const primary = root.getPropertyValue("--primary").trim();
      const secondary = root.getPropertyValue("--secoundary").trim();
      const tertiary = root.getPropertyValue("--tertiary").trim();
      const background = root.getPropertyValue("--background").trim();
      const textcolor = root.getPropertyValue("--foreground").trim();
      const bar = "#ff6c2f";
      setprimary(primary);
      setsecondary(secondary);
      settertiary(tertiary);
      setbackground(background);
      settextcolor(textcolor); 
      setbar(bar)
    };

    updateThemeColors();
    const observer = new MutationObserver(updateThemeColors);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const options = useMemo(
    () => ({
      chart: {
        id: "sales-chart",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            colors: textcolor,
            fontSize: "14px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: textcolor,
            fontSize: "14px",
            fontWeight: 500,
          },
        },
      },
      dataLabels: {
        style: {
          colors: [bar],
          fontSize: "10px",
          fontWeight: "500",
        },
      },
      colors: [bar],
      plotOptions: {
        bar: {
          borderRadius: 3,
          columnWidth: "35%",
          grouped: true,
        },
      },
      grid: {
        borderColor: background,
        strokeDashArray: 5,
        opacity: 0.7,
      },
      tooltip: {
        enabled: true,
        theme: "dark",
      },
    }),
    [textcolor]
  );

  const series = [
    {
      name: "Sales",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 83, 24, 62, 78],
    },
  ];

  return (
    <div className="app bg-primary rounded-xl shadow-lg w-full -z-10">
      <div className="row">
        <div className="mixed-chart w-full">
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height="393"
          />
        </div>
      </div>
    </div>
  );
};

export default Graph;
