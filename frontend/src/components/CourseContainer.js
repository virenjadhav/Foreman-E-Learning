import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import useVideos from "../hooks/useVideos";
import youtube from "../apis/youtube";
import "../css/style.css";
// import '../data/videos.json';
import "../css/Home.css";
import axios from "axios";

const CourseContainer = ({ categeory }) => {
  //   const [videos, search] = useVideos("Data Stucture");
  // const [videos, setVideos] = useState([]);
const [courses, setCourses] = useState([]);
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

  useEffect(()=> {
    // console.log('CATEGORIES');
    // console.log(categeory);
    const getCourse = async () => {
      const response = await axios.get("http://localhost:5000/get_course",{params:{categerios_code : categeory}});
      // const response = await(await fetch('http://localhost:5000/logged_in')).json();

      // console.log(response.data.courses);
      setCourses(response.data.courses);
      // setIsLoggedIn(response.data.logged_in);
    }
    getCourse();
  },[categeory]);

  // const videosJson = require("../data/videos.json");
  return (
    // <div>
    //
    <div style={{ display: "inline-block", margin: "8px" }}>
      {/* <div>
        <h1 className=""> {categeory}</h1>
      </div> */}
      <CourseList courses={courses} />
      {/* <div className="course-btn-container">
        <button className="course-btn">Other Course</button>
      </div> */}
    </div>
  );
};
export default CourseContainer;
