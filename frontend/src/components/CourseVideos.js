import React from "react";

import React, { useState, useEffect } from "react";
// import SearchBar from "./SearchBar";
// import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
// import useVideos from "../hooks/useVideos";

const CourseVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  //   const [videos, search] = useVideos("Data Stucture");

  const videos = [
    {
      id: {
        videoId: 123,
      },
      snippet: {
        title: "Data Stucture",
        description: "lorem ipsum dolor sit amet, consectetur",
        thumbnails: {
          medium: {
            url: "",
          },
        },
      },
    },
    {
      id: {
        videoId: 1234,
      },
      snippet: {
        title: "Data Stucture and algorithm",
        description: "lorem ipsum dolor sit amet, consectetur dfsfwert4",
        thumbnails: {
          medium: {
            url: "",
          },
        },
      },
    },
  ];

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      {/* onSubmit={search} */}
      <SearchBar />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideos;
