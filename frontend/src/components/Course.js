import React from "react";
import GenralSection from "./GenralSection";
import "../css/style.css";
import CourseBlog from "./CourseBlog";

function Course() {
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
