import React from 'react'
import Explore from './Explore'
import HeadMenu from './HeadMenu'
import SecondHeadMenu from './SecondHeadMenu'
import Subcriptions from './Subcriptions'

const MenuList = () => {
  return (
    <div className=" p-5 m-2 w-48">
      <HeadMenu/>
      <SecondHeadMenu/>
      <Subcriptions/>
      <Explore/>
    </div>
  )
}

export default MenuList