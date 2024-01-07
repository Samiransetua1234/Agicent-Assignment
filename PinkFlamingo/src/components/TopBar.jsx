import React from 'react'
import BgTop from '../assets/BgTopBar.svg'
import { GiCancel } from "react-icons/gi";

export default function TopBar({setTopbar}) {
  return (
    <div className={`bg-no-repeat bg-center bg-cover flex flex-row align-middle  items-center justify-around py-2 px-5`} style={{backgroundImage:`url(${BgTop})`}}>
        <div>QUICK BUY! Get up to 25% off on All Stones</div>
        <span onClick={()=>{
          setTopbar(false)
        }}>
          <GiCancel/>
        </span>
    </div>
  )
}
