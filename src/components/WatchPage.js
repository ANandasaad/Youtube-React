import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { COMMENT_API } from "../utils/constants";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import RelatedVideo from "./RelatedVideo";
import { addItem } from "../utils/watchSlice";

const WatchPage = () => {
  
  let [searchParams] = useSearchParams();
  const [commentsData, setData]=useState([]);
  const isMenuOpen= useSelector((store)=>store.app.isMenuOpen);

  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
//comment data 
   async function getComment()
  {
     const response= await fetch(COMMENT_API+searchParams.get("v"));
     const data= await response.json();
    //  console.log(data);
     setData(data.items);
  }
   

  useEffect(() => {
    getComment();
    dispatch(closeMenu());
  }, []);

  const handleWatchLater=()=>{
       dispatch(addItem(searchParams.get("v")));
  }
  return (
    <div className="flex flex-col w-full">
      <div className="flex">
    <div className={"grid col-span-11  px-2"}>
      <iframe
        className={isMenuOpen  && "w-[900px]"}
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?autoplay=1"}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      
      ></iframe>
      <div className="w-32 ">
        <button className="font-bold bg-green-400 rounded-md p-2" onClick={()=>handleWatchLater()}>Watch Later</button>
      </div>
      <Comments data={commentsData}/>
    </div>
    <div className={"w-full  " }>
      {/* <LiveChat/> */}
      <RelatedVideo/>
    </div>
    </div>
    
    
    
    </div>
  );
};

export default WatchPage;
