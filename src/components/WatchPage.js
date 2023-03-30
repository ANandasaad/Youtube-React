import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { COMMENT_API } from "../utils/constants";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  
  let [searchParams] = useSearchParams();
  const [commentsData, setData]=useState([]);
  console.log(searchParams.get("v"));
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
  return (
    <div className="flex flex-col w-full">
      <div className="flex">
    <div className="grid col-span-11  px-4">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      
      ></iframe>
    </div>
    <div className="w-full mr-3 ">
      <LiveChat/>
    </div>
    </div>
    <Comments data={commentsData}/>
    </div>
  );
};

export default WatchPage;
