import React from 'react'
import { buttons } from '../utils/constants'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen= useSelector((store)=>store.app.isMenuOpen);

  return (
    <div className={" mr-10 " +(!isMenuOpen && "mx-28 w-full max-sm:mx-0  ")}>
        <ButtonList button={buttons} />
    
        <VideoContainer />
      
      
    </div>
  )
}

export default MainContainer