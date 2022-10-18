import React, { useState, useEffect } from "react";
import useVideos from "../hooks/useVideos";
import CourseCard from "./CourseCard";
import youtube from "../apis/youtube";

const CourseList = ({ courses }) => {
  
  //   const [videos, search] = useVideos(type);
  //   const [videos, setVideos] = useState([]);

    useEffect(() => {
      // const onSearchSubmit = async (term) => {
      //   console.log(type);
      //   const { data } = await youtube.get("/search", {
      //     params: {
      //       q: term,
      //     },
      //   });
      //   //   console.log(data);
      //   //   //   setSelectedVideo(data.items[0]);
      //   setVideos(data.items);
      // };
      // onSearchSubmit(type);
      // console.log(type);
      console.log(courses);
    }, []);

  //   console.log(videos);
  //   key={video.id.videoId}
  const imageType = "full";
  const renderedCourse = Object.keys(courses).map((key, i) => {
    // if (i == 4 && i == 5) {
    return (
      // <div class="row">
      //   <div class="col-4">
      <CourseCard key={key} course={courses[i]} imageType={imageType} />
      //   </div>
      // </div>
    );
    // }
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
