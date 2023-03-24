import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API} from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  async function getData() {
    let response = await fetch(YOUTUBE_API);
    let data = await response.json();

    setVideos(data.items);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-wrap overflow-y-scroll ...">
      {videos.map((video) => (
    <Link to={"/watch?v="+video.id} className="inline-block"> <VideoCard key={video.id} info={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
