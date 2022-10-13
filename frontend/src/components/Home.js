import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import CourseContainer from "./CourseContainer";
import SubjectContainer from "./SubjectContainer";
import CategoryScroll from "./CategoryScroll";
import Testimonial from "./Testimonial";
import Team from "./Team.js";
import testimonialBackgroundImage from "../images/testimonial_background_image.jpg";
// import CourseCounting from "./CourseCounting";
import "../css/Home.css";
import UploadFile from "./UploadFile";
function Home() {
  const [categerios, setCategerios] = useState([]);
  const [selectCategory, setCategory] = useState("");

  useEffect(() => {
    const getCategerious = async () => {
      const categeriousResponse = await axios.get(
        "http://localhost:5000/get_categerious"
      );

      // console.log("categeriousResponse")
      // console.log(categeriousResponse.data.category);
      setCategerios(categeriousResponse.data.category);
      setCategory(categeriousResponse.data.category[0].code);
    };
    // getCategerious();
    const category = [
      {
        id: 1,
        name: "Architecture and Planning",
        code: "AR",
      },
      {
        id: 2,
        name: "Computer Science and Information Technology",
        code: "CS",
      },
      {
        id: 3,
        name: "Chemical Engineering",
        code: "CH",
      },
      {
        id: 4,
        name: "Electrical Engineering",
        code: "EE",
      },
      {
        id: 5,
        name: "Mechanical Engineering",
        code: "ME",
      },
      {
        id: 6,
        name: "Civil Engineering",
        code: "CE",
      },
      {
        id: 7,
        name: "Mathematics",
        code: "MA",
      },
      {
        id: 8,
        name: "Aerospace Engineering",
        code: "AE",
      },
      {
        id: 9,
        name: "Agricultural Engineering",
        code: "AG",
      },
      {
        id: 10,
        name: "Electronics and Communication Engineering",
        code: "EC",
      },
      {
        id: 11,
        name: "Biotechnology",
        code: "BT",
      },
    ];
    setCategerios(category);
  }, []);

  const subjects =
    // {
    // cs:
    [
      [
        "Engineering Mathematics",
        "Digital Logic",
        "Computer Organization and Architecture",
        "Programming and Data Structures",
        "Algorithms",
        "Theory of Computation",
        "Compiler Design",
        "Operating System",
        "Databases",
        "Computer Networks",
      ],
      // me:
      [
        "Engineering Mathematics",
        "Applied Mechanics and Design",
        "Materials, Manufacturing and Industrial Engineering",
        " Fluid Mechanics and Thermal Sciences",
      ],
    ];
  // };

  return (
    <div>
      <Header />
      <div className="container">
        {/* <UploadFile /> */}
        <CategoryScroll categerios={categerios} setCategory={setCategory} />
        {/* {categerios?categerios.map((cat) => (
     <CourseContainer key={cat.id} categeory={cat.name} /> 
  )):<div></div>} */}
        {/* <CourseContainer categeory={selectCategory} /> */}
        <SubjectContainer subjects={subjects} />
        {/* <div className="testimonial-container">
           <img
            className="testimonial-background-image"
            src={testimonialBackgroundImage}
            alt=""
          /> 
          <h2 className="testimonial-title">TESTIMONIALS</h2>
          <h1 className="testimonial-text">What Our Users Say About Us</h1>
          <div className="testimonial-card">
            <SlideShow />
          </div>
        </div> */}
        <div className="testimonial-container">
          <Testimonial />
        </div>
        <section className="ourTeam">
          <Team />
        </section>
        {/* <section className="courseCounting">
          <CourseCounting />
        </section> */}
      </div>
    </div>
  );
}

export default Home;
