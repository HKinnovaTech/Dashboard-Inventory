'use client';

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts"; 

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RadialBarChart: React.FC = () => {
  const [secondaryColor, setSecondaryColor] = useState("#2c343e");
  const [textcolor, settextcolor] = useState("#2c343e");

  useEffect(() => {
    const updateColor = () => {
      const root = getComputedStyle(document.documentElement);
      const color = root.getPropertyValue("--secondary2").trim();
      const textcolor = root.getPropertyValue("--foreground").trim();
      setSecondaryColor(color); 
      settextcolor(textcolor); 
    };

    updateColor();

    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "radialBar",
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          size: "45%",
        },
        track: {
          background: secondaryColor, 
        },
        dataLabels: {
          name: {
            fontSize: "16px",
            color: textcolor,
            offsetY: 100,
          },
          value: {
            offsetY: 56,
            fontSize: "22px",
            color: textcolor,
            formatter: function (val: number) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
        colorStops: [
          { offset: 0, color: "#ff6c2f", opacity: 1 },
          { offset: 100, color: "#ff6c2f", opacity: 1 }, 
        ],
      },
    },
    stroke: {
      dashArray: 4,
      colors: [secondaryColor],
    },
    labels: ["Median Ratio"],
  };

  const [series, setSeries] = useState<number[]>([67]);

  return (
    <div className="rounded-lg max-w-[400px] mx-auto transition-colors duration-300 ">
      <Chart options={options} series={series} type="radialBar" height={300} />
    </div>
  );
};

export default RadialBarChart;
