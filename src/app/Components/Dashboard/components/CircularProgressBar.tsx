// components/CircularProgressBar.tsx
import React from 'react';

const CircularProgressBar: React.FC = () => {
  // Progress value (65.2% as in your image)
  const progress = 60.2;
  const radius = 85.27; // Matching the radius from your path (approx. 85.27px)
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference * (3 / 4); // Adjust for 3/4 circle

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 p-4 rounded-lg">
      {/* 3/4 Circular Progress Container (top 270 degrees) */}
      <div className="relative w-[200px] h-[150px] overflow-hidden"> {/* Adjusted for 3/4 circle */}
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {/* Clip path to show only top 3/4 of the circle */}
          <defs>
            <clipPath id="threeQuarterClip">
              <path
                d="M 100 20 A 85.27 85.27 0 0 1 185.27 100 A 85.27 85.27 0 0 1 100 185.27 A 85.27 85.27 0 0 1 14.73 100 A 85.27 85.27 0 0 1 100 20 Z"
                fill="none"
              />
            </clipPath>
          </defs>

          {/* Background 3/4 Circle (clipped, matching your path style) */}
          <path
            d="M 100 20 A 85.27 85.27 0 0 1 185.27 100 A 85.27 85.27 0 0 1 100 185.27 A 85.27 85.27 0 0 1 14.73 100 A 85.27 85.27 0 0 1 100 20"
            fill="none"
            stroke="#4a5568" // Dark gray for unfilled portion
            strokeWidth="33.09" // Matching your path's stroke-width
            strokeLinecap="butt"
            clipPath="url(#threeQuarterClip)"
          />

          {/* Progress 3/4 Circle (clipped, segmented effect with stroke-dasharray) */}
          <path
            d="M 100 20 A 85.27 85.27 0 0 1 185.27 100 A 85.27 85.27 0 0 1 100 185.27 A 85.27 85.27 0 0 1 14.73 100 A 85.27 85.27 0 0 1 100 20"
            fill="none"
            stroke="#f97316" // Orange color (Tailwind's orange-500)
            strokeWidth="33.09" // Matching your path's stroke-width
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="butt" // Square ends for segmented look
            clipPath="url(#threeQuarterClip)"
          />
        </svg>

        {/* Progress Text */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
          {progress}%
        </div>

        {/* Label */}
        <div className="absolute bottom-4 w-full text-center text-white text-sm font-medium">
          Returning Customer
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;