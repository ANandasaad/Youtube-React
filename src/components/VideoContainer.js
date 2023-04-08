import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_API, YOUTUBE_API_KEY } from "../utils/constants";
import useInfiniteScrolling from "../utils/useInfiniteScrolling";
import Simmer from "./Simmer";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { CHANNEL_API } from "../utils/constants";
import { useSelector } from "react-redux";


const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [isFetching,setFetching]=useInfiniteScrolling(fetchData);
  const [pageToken,setPageToken]=useState(null);
  
 
const isMenuOpen= useSelector((store)=>store.app.isMenuOpen);
const  videoCategory=useSelector((store)=>store.app.videoCategory);  
const category=useSelector((store)=>store.app.selectCategory);

  async function getData() {
    let options={
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      maxResults: 48,
      regionCode: "IN",
      key: YOUTUBE_API_KEY,
     
      

    }
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?`+ new URLSearchParams(options));
    let data = await response.json();
    console.log(data.items);
    setPageToken(data?.nextPageToken);
   

    setVideos(data.items);
  }
 
   
  let options={
   
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      maxResults: 20,
      regionCode: "IN",
      key: YOUTUBE_API_KEY,
      
  }
  async function fetchData()
  {
    console.log("pageToken" +pageToken)
    if(!pageToken)
    {
  
      setFetching(false);
       return;
    }
   options={...options,pageToken}
    const newData= await fetch(`https://youtube.googleapis.com/youtube/v3/videos?`+ new URLSearchParams(options));
    const response= await newData.json();
    setVideos((prev)=>[...prev,...response.items]);
    setFetching(false);
    console.log(response?.nextPageToken)
    setPageToken(response?.nextPageToken);
  }
  useEffect(() => {
    window.scrollTo({ top: 0 });
    // window.addEventListener('resize',function(){
    //   console.log(window.innerWidth);
    // })
    
    getData();
  }, []);
  
  // async function getCategory()
  // {
  //   let options={
  //     part:'snippet,contentDetails,statistics',
  //     maxResults:48,
  //     chart:'mostPopular',
  //     q:category,
  //     key:YOUTUBE_API_KEY
  //   }
  //   const response=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?`+ new URLSearchParams(options));
  //   const data=await response.json();
  //   console.log(data.items);
  //  setVideos(data.items)
  //   setPageToken(data?.nextPageToken);

  // }

  // useEffect(()=>{
  //   getCategory();
  // },[videoCategory]);
 
 
 



  return videos?.length === 0?(
    <Simmer />
  ) : (
    
    <>

    <div className={"flex flex-wrap"}>
    
       {videos[0]&& <AdVideoCard info={videos[34]}/>}
        { videos.map((video,index) => (
          <Link key={index}  to={"/watch?v=" + video.id} className="inline-block">
            {" "}
            <VideoCard info={video} />
          </Link>
        ))}

      </div>

    </> 
  );
};

export default VideoContainer;
