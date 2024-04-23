import React from 'react'
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa6";
import { IoIosBatteryFull } from "react-icons/io";

const Navbar = () => {
    const time =  new Date().toLocaleTimeString
  return (
    <div className='flex justify-between items-center font-medium	'>
      <div>9:13</div>
      <div className='flex gap-1'>
      <FaWifi />
      <FaSignal/>
      <IoIosBatteryFull/>
      </div>
      
    </div>
  )
}

export default Navbar
