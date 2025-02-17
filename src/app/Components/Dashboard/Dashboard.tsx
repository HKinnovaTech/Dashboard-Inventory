import React from "react";
import Infocard from "./components/infocard";
import Graph from "./components/graph/graph";

const Dashboard = () => {
  return (
    <div className="flex gap-6 items-end justify-center">
      <div className="w-[70%] ">
        <div className="w-full bg-[#ffdacb]/90 text-[#972b51] rounded-xl p-3 text-sm my-5">
          <p>We regret to inform you that our server is currently experiencing technical difficulties.</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Infocard />
          <Infocard />
          <Infocard />
          <Infocard />
        </div>
      </div>

      <Graph />
    </div>
  );
};

export default Dashboard;
