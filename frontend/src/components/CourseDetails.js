import React from "react";
import GenralSection from "./GenralSection";
import CourseInfo from "./CourseInfo";
import CourseBlog from "./CourseBlog";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";



const CourseDetails = () => {
  const [course, setCourse] = useState();
  const location = useLocation();
  useEffect(() => {
    
    // console.log(location.state.course);
    if(location.state.course)
    setCourse(location.state.course);
  },[course]);
  
  
  return (
    <div>
      <GenralSection pageTitle="Course Details" />
      {/* <section className="container"> */}
      {/* {console.log("Course")}
      {console.log(course)} */}
      {course!=null ? <CourseInfo course={course} courseImg={location.state.courseImg} teacherProfile={location.state.teacherProfile}/> : ""}
      {/* // <CourseInfo course={course} /> */}
      {/* </section> */}
      {/* <CourseBlog /> */}
    </div>
  );
};

export default CourseDetails;
