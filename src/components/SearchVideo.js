
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { VIDEO_LIST } from '../utils/constants';
import VideoList from './VideoList'

const SearchVideo = () => {
  
  const [Videolist,setVideoList]= useState([]);
  const [searchParams]= useSearchParams([]);
  console.log(searchParams.get("q"));
  useEffect(()=>{
    getVideList();
  },[])

  async function getVideList()
  {
     const response= await fetch(VIDEO_LIST);
     const data= await response.json();
    //  console.log(data);
    
     setVideoList(data.items);
  }
  return (
    <div>
      {Videolist.map((v,index)=><VideoList key={index} data={v}/>)}
    </div>
  )
}

export default SearchVideo