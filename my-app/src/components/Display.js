import React from 'react'
import { Tilt } from 'react-tilt'

export default function Display() {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  }

  return (
    <div>
      <Tilt
        options={defaultOptions}
        className="hover:bg-gray-100 transition duration-75 ease-in-out group">
        <div className="shadow-lg px-[20px] py-[30px] ">
          <div className="flex place-content-center py-[10px] gap-[10px]">
            <h1 className="text-[30px] font-medium group-hover:text-gray-600 truncate">
              one
            </h1>
          </div>
          <div className="flex place-content-center gap-[10px] py-[10px]">
            <h1 className="text-[18px] font-medium group-hover:text-gray-600 truncate">
              one
            </h1>
          </div>
          <div className="flex place-content-center gap-[10px] py-[10px]">
            <h1 className="text-[18px] font-medium group-hover:text-gray-600 truncate">
              one
            </h1>
          </div>
        </div>
      </Tilt>
    </div>
  )
}
