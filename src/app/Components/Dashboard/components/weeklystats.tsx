import React from 'react'
import RadialBarChart from './graph/RadialBarChart'

const Weeklystats = () => {
  return (
    <div className="bg-primary rounded-xl p-6 shadow-lg h-[464px]">
      <h2 className="text-textcolor font-semibold">Conversions</h2>
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
          <button className='w-full text-white py-2 mt-6 bg-secondary2 rounded-xl'>view details</button>
        </div>
  )
}

export default Weeklystats