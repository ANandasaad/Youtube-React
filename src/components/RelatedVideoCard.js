import React from 'react'

const RelatedVideoCard = ({data}) => {
    const video=data?.snippet?.thumbnails?.medium?.url;
    const Title=data?.snippet?.title;
  
    const channelTitle=data?.snippet?.channelTitle;
    const date=data?.snippet?.publishedAt;
    const date1=new Date(date);
    const year=date1.getFullYear();
    let diff=2023-Number(year);

     
    
  return (
    <div className='flex '>
       
     <div >
        <img  className='px-2 py-3 rounded-3xl ' src={video}/>  
      </div>
      
      <div  className='w-full'>
        <h2 className='px-1 py-1 mt-2 font-medium'>{Title.substring(0,30)}</h2>
         <span className=' px-1 py-1 mx-1 text-[10px] '>{diff} years ago</span>
        <h6 className=' px-1 py-1 mx-1 text-[10px] font-semibold '>{channelTitle} </h6> 
       

      </div>
   
      
     </div>
  )
}

export default RelatedVideoCard