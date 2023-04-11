import React from 'react'

const VideoCard = ({query}) => {
  if(!query) return null; 
  return (
    <div className={"grid col-span-11  px-2"}>
    <iframe
    
      width="1000"
      height="500"
      src={"https://www.youtube.com/embed/"+query+"?autoplay=1"}
      title="YouTube video player"
     
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    
    ></iframe>
    </div>
  )
}

export default VideoCard