import React, { useEffect, useState } from 'react'
import { CHANNEL_API } from '../utils/constants';

const VideoCard = ({info}) => {
  const [data,setData]= useState(null);

  const {snippet, statistics}= info;
  const {channelTitle,title,thumbnails,channelId}=snippet;
  async function getData()
  {
    const response= await fetch(CHANNEL_API+channelId);
    const json= await response.json();
    console.log(json);
    setData(json);
  }
  useEffect(()=>{
     getData();
  },[]);
  return (
    <div className="p-2 m-2 w-72 h-80  hover:scale-105">
      <img className="rounded-3xl" src={thumbnails.medium.url} alt="thumbnails"/>
      <ul>
        {/* <li><img src={data?.items?.thumbnails?.default?.url} alt="img"/></li> */}
        <li className="font-bold py-2">{title.substring(0,60)}</li>
        <li className='text-[16px] font-semibold'>{channelTitle}</li>
        <li className='text-[12px] font-bold'>{Math.floor(statistics.viewCount)} views</li>
      </ul>

      
    </div>
  )
}

 export const AdVideoCard=({info})=>{


  return <div className=" p-1 m-1 border border-red-600">
  <VideoCard info={info}/>

  </div>
}

export default VideoCard