import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_API } from "../utils/constants";
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
      

  async function getData() {
    let response = await fetch(YOUTUBE_API);
    let data = await response.json();
    console.log(data.items);
   

    setVideos(data.items);
  }
   
  async function fetchData()
  {
    if(!pageToken)
    {
      setFetching(false);
       return;
    }
    setFetching(true);
    const newData= await fetch(YOUTUBE_API);
    const response= await newData.json();
    setVideos((prev)=>[...prev,...response.items]);
    setFetching(false);
    setPageToken(response?.nextPageToken);
  }
  useEffect(() => {
    window.scrollTo({ top: 0 });
    // window.addEventListener('resize',function(){
    //   console.log(window.innerWidth);
    // })
    getData();
  }, []);
 
 




  return videos?.length === 0 ? (
    <Simmer />
  ) : (
    <>
  <div className={"flex flex-wrap"}>
       {videos[0]&& <AdVideoCard info={videos[34]}/>}
        {videos.map((video,index) => (
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
