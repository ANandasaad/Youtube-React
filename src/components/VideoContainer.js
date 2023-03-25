import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../utils/constants";
import Simmer from "./Simmer";
import VideoCard, { AdVideoCard } from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  async function getData() {
    let response = await fetch(YOUTUBE_API);
    let data = await response.json();
    console.log(data);

    setVideos(data.items);
  }

  useEffect(() => {
    getData();
  }, []);

  return videos?.length === 0 ? (
    <Simmer />
  ) : (
    <>
      <div className="flex flex-wrap">
       {videos[0]&& <AdVideoCard info={videos[34]}/>}
        {videos.map((video) => (
          <Link key={video.id}  to={"/watch?v=" + video.id} className="inline-block">
            {" "}
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
