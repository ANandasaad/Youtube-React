import React from 'react'

const VideoList = ({data}) => {
    // console.log(Videolist.items[0]);
    const video=data?.snippet?.thumbnails?.medium?.url;
    const Title=data?.snippet?.title;
    const description=data?.snippet?.description;
    const channelTitle=data?.snippet?.channelTitle;
    const date=data?.snippet?.publishedAt;
    const date1=new Date(date);
    const year=date1.getFullYear();
    let diff=2023-Number(year);

     
    
  return (
    <div className='flex w-full'>
     <div className='w-96   rounded-lg  ' >
        <img  className='px-2 py-3 rounded-3xl ' src={video}/>  
      </div>
      
      <div  className='w-full'>
        <h2 className='px-3 py-3 mx-5 font-bold'>{Title}</h2>
         <span className=' px-3 py-3 mx-5 text-[10px] font-bold'>{diff} years ago</span>
        <h6 className=' px-3 py-3 mx-5 text-[14px] font-bold '>{channelTitle} </h6> 
        <h3 className='px-3 py-3 mx-5 text-[10px]'>{description}</h3>

      </div>
      
     </div>
  )
}

export default VideoList