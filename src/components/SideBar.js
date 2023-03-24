import React from 'react'
import { useSelector } from 'react-redux'
import MenuList from './MenuList'


const SideBar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  //Early return
  if(!isMenuOpen) return null;
  return (
    <div className="col-span-1">
      <MenuList/>
      </div>
  )
}

export default SideBar