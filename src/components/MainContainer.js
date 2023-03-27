import React from 'react'
import { button } from '../utils/constants'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="w-full mr-10">
        <ButtonList button={button}/>
        <VideoContainer />
    </div>
  )
}

export default MainContainer