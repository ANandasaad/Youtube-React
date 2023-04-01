import React from 'react'

const VideoCard = ({info}) => {
 
  const {snippet, statistics}= info;
  const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className="p-2 m-2 w-72 h-80  hover:scale-105">
      <img className="rounded-3xl" src={thumbnails.medium.url} alt="thumbnails"/>
      <ul>
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