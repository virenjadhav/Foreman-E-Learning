import React from "react";
import GenralSection from "./GenralSection";
import CourseInfo from "./CourseInfo";
import CourseBlog from "./CourseBlog";

const CourseDetails = () => {
  return (
    <div>
      <GenralSection />

      {/* <section className="container"> */}
      <CourseInfo />
      {/* </section> */}
      {/* <CourseBlog /> */}
    </div>
  );
};

export default CourseDetails;
