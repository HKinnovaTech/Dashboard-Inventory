import React from "react";
import Infocard from "./components/infocard";
import Graph from "./components/graph/graph";

const Dashboard = () => {
  return (
    <div className="flex flex-row min-md:flex-col gap-6 items-start justify-center">
      <div className="w-full xl:w-[80%]">
        <div className="w-full bg-hilights text-messagetext rounded-xl p-3 text-sm mb-5">
          <p>We regret to inform you that our server is currently experiencing technical difficulties.</p>
        </div>
        <div className="grid grid-cols-2 gap-5 ">
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
