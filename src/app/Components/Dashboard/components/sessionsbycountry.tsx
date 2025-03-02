import React from 'react'
import WorldMap from './graph/WorldMap'

const Sessions = () => {
  return (
    <div className="bg-primary flex flex-col justify-between rounded-xl p-6 shadow-lg h-[464px] ">
      <h2 className="text-textcolor font-semibold">Sessions by Country</h2>
          <WorldMap/>
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

export default Sessions