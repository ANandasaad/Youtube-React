import React from 'react'
import { buttons } from '../utils/constants'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen= useSelector((store)=>store.app.isMenuOpen);

  return (
    <div className={"w-full mr-10 " +(!isMenuOpen && "mx-28 w-full")}>
        <ButtonList button={buttons} />
        <VideoContainer />
    </div>
  )
}

export default MainContainer