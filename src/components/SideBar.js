import React from 'react'
import { useSelector } from 'react-redux'
import MenuList from './MenuList'


const SideBar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  //Early return
  if(!isMenuOpen) return null;
  return (
    <div className="w-1/5">
      <MenuList/>
      </div>
  )
}

export default SideBar