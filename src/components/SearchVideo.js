import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { VIDEO_LIST } from "../utils/constants";
import VideoList from "./VideoList";

const SearchVideo = () => {
  const [Videolist, setVideoList] = useState([]);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("q"));
  useEffect(() => {
    getVideList();
  }, [searchParams]);

  async function getVideList() {
    const response = await fetch(VIDEO_LIST + searchParams);
    const data = await response.json();
    console.log(data);

    setVideoList(data.items);
  }
  return (
    <div>
      {Videolist.map((v, index) => (
        <Link to={"/watch?v="+v.id.videoId}>
          {" "}
          <VideoList key={index} data={v} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideo;
