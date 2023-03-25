import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import Comments from "./Comments";

const WatchPage = () => {
  let [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();

   async function getComment()
  {
     const response= await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${searchParams.get("v")}&key=AIzaSyCNUxWnmfTQkzgIKgW8KxsoFI72jCTEJfA`);
     const data= await response.json();
     console.log(data);
  }
   

  useEffect(() => {
    getComment();
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col">
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
    <Comments/>
    </div>
  );
};

export default WatchPage;
