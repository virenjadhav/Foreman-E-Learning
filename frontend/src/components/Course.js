import React from "react";
import GenralSection from "./GenralSection";
import "../css/style.css";
import CourseBlog from "./CourseBlog";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Course(props) {
  const location = useLocation();
  useEffect(() => {
    console.log("hello");
    // console.log(props);
    // console.log(props.location);
    console.log(location);
  }, []);
  return (
    <div>
      <div className="GenralSection">
        <GenralSection />
      </div>
      <div className="courseBlogArea">
        <CourseBlog />
      </div>
    </div>
  );
}

export default Course;
