import { wait } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'
import VideoList from './VideoList'

const SearchVideo = () => {
  
  const [Videolist,setVideoList]= useState([]);
  useEffect(()=>{
    getVideList();
  },[])

  async function getVideList()
  {
     const response= await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=sport&key=AIzaSyCifsxEgFS40AX84KOkEV0I_00CrkXLqXQ")
     const data= await response.json();
     console.log(data);
     setVideoList(data);
  }
  return (
    <div><VideoList data={Videolist}/></div>
  )
}

export default SearchVideo