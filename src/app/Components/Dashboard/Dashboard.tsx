import React from "react";
import Infocard from "./components/infocard";
import Graph from "./components/graph/graph";
import CircularProgressBar from "./components/CircularProgressBar";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-6 items-start justify-center">
        <div className="w-full ">
          <div className="w-full bg-hilights text-messagetext rounded-xl p-3 text-sm mb-5">
            <p>
              We regret to inform you that our server is currently experiencing
              technical difficulties.
            </p>
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
      <div className="flex items-center justify-between">
        <div>
          <CircularProgressBar/>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
