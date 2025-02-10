import React from 'react'

const functionbutton = (props:any) => {
  return (
    <button className='w-5 grayscale hover:grayscale-0 transition duration-300'>
        <img src={`/images/${props.icon}.png`} alt="" />
    </button>
  )
}

export default functionbutton
