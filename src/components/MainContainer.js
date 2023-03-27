import React from 'react'
import { button } from '../utils/constants'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="col-span-11 mx-5 ">
        <ButtonList button={button}/>
        <VideoContainer />
    </div>
  )
}

export default MainContainer