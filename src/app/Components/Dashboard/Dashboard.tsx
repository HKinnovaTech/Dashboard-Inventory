import React from "react";
import Infocard from "./components/infocard";
import Graph from "./components/graph/graph";
import RadialBarChart from "./components/graph/RadialBarChart";
import Weeklystats from "./components/weeklystats";
import Sessions from "./components/sessionsbycountry";
import Toppages from "./components/Toppages";
import Recentorders from "./components/Recntorders";

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
            <Infocard lable="Total Orders" value="20,430" ratio="2.1" time="Last Week"/>
            <Infocard lable="New Leads" value="9,393" ratio="2.4" time="Last Month"/>
            <Infocard lable="Deals" value="923" ratio="3.1" time="Last Month"/>
            <Infocard lable="Booked Revenue" value="$123.6K" ratio="2.3" time="Last month"/>
          </div>
        </div>
        <Graph />
      </div>
      <div className="flex flex-col xl:flex-row h-[464px] items-center gap-6 justify-center w-full mt-6 -z-10">
        <div className="flex-1">
          <Weeklystats />
        </div>
        <div className="flex-1">
          <Sessions />
        </div>
        <div className="flex-1">
          <Toppages />
        </div>
      </div>
      <div className="mt-6">
        <Recentorders/>
      </div>
    </div>
  );
};

export default Dashboard;
