import React, { useState, useEffect } from "react";
import useVideos from "../hooks/useVideos";
import Course from "./Course";
import youtube from "../apis/youtube";

const CourseList = ({ videos }) => {
  //   const [videos, search] = useVideos(type);
  //   const [videos, setVideos] = useState([]);

  //   useEffect(() => {
  //     const onSearchSubmit = async (term) => {
  //       console.log(type);
  //       const { data } = await youtube.get("/search", {
  //         params: {
  //           q: term,
  //         },
  //       });
  //       //   console.log(data);
  //       //   //   setSelectedVideo(data.items[0]);
  //       setVideos(data.items);
  //     };
  //     onSearchSubmit(type);
  //     // console.log(type);
  //   }, []);

  //   console.log(videos);
  //   key={video.id.videoId}
  const imageType = "full"
  const renderedCourse = Object.keys(videos).map((key, i) => {
    if (i != 4 && i != 5) {
      return <Course key={key} video={videos[i]} imageType={imageType} />;
    }
  });
  //     return <Course video={video} />;
  //   });

  {
    /* <div>
      {Object.keys(sampleJSON).map((key, i) => (
        <p key={i}>
          <span>Key Name: {key}</span>
          <span>Value: {sampleJSON[key]}</span>
        </p>
      ))}
    </div> */
  }

  // for (var key in json) {
  //   json.forEach((obj) => { console.log(obj.id); });

  return (
    <div>
      {/* {console.log(videos[0].id.videoId)} */}
      {/* )} */}
      {renderedCourse}
    </div>
  );
};

export default CourseList;
