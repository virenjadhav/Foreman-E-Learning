import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import useVideos from "../hooks/useVideos";
import youtube from "../apis/youtube";
// import '../data/videos.json';

const CourseContainer = ({ categeory }) => {
  //   const [videos, search] = useVideos("Data Stucture");
  const [videos, setVideos] = useState([]);

  //   useEffect(() => {
  //     const onSearchSubmit = async (term) => {
  //       //   console.log(type);
  //       const { data } = await youtube.get("/search", {
  //         params: {
  //           q: term,
  //         },
  //       });
  //       console.log(data);
  //       //   //   //   setSelectedVideo(data.items[0]);
  //       setVideos(data.items);
  //     };
  //     onSearchSubmit(categeory);
  //     // console.log(type);
  //   }, []);

  //   const renderedList = categeory.map((cat) => {
  //     return <CourseList videos={videos} />;
  //   });

  const videosJson = require("../data/videos.json");
  return (
    // <div>
    //
    <div style={{ display: "inline-block", margin: "8px" }}>
      <div>
        <h1 className=""> {categeory}</h1>
      </div>
      <CourseList videos={videosJson} />
    </div>
  );
};
export default CourseContainer;
