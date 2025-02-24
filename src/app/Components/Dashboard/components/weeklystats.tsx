import React from 'react'
import RadialBarChart from './graph/RadialBarChart'

const Weeklystats = () => {
  return (
    <div className="bg-primary rounded-xl">
          <RadialBarChart/>
          <div  className="flex justify-around">
            <div>
              <p>This Week</p>
              <h2 className="text-2xl font-semibold">12.5k</h2>
            </div>
            <div>
              <p>Last Week</p>
              <h2 className="text-2xl font-semibold">15.5k</h2>
            </div>
          </div>
        </div>
  )
}

export default Weeklystats