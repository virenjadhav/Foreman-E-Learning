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
import GenralSection from "./GenralSection";


const Courses = () => {
    const [categerios, setCategerios] = useState([]);
  const [selectCategory, setCategory] = useState([]);

  // const defaultSubject = {
  //   id: 8,
  //   name: 
  // }
  const [subject, setSubject] = useState([{code: "CS",
    id:8,
    name: "Computer Science and Information Technology",
    ranked: 1}]);

  useEffect(() => {
    const getCategerious = async () => {
      const categeriousResponse = await axios.get(
        "http://localhost:5000/get_categerious"
      );

      // console.log("categeriousResponse")
      // console.log(categeriousResponse.data.category);
      setCategerios(categeriousResponse.data.category);
      setCategory(categeriousResponse.data.category[0]);
      setSubject(categeriousResponse.data.category[0]);
      // console.log(categeriousResponse.data.category[0]);
    };
    getCategerious();
    // console.log("get")
    // console.log(subject);
  //   const category = [
  //     {
  //       id: 1,
  //       name: "Architecture and Planning",
  //       code: "AR",
  //     },
  //     {
  //       id: 2,
  //       name: "Computer Science and Information Technology",
  //       code: "CS",
  //     },
  //     {
  //       id: 3,
  //       name: "Chemical Engineering",
  //       code: "CH",
  //     },
  //     {
  //       id: 4,
  //       name: "Electrical Engineering",
  //       code: "EE",
  //     },
  //     {
  //       id: 5,
  //       name: "Mechanical Engineering",
  //       code: "ME",
  //     },
  //     {
  //       id: 6,
  //       name: "Civil Engineering",
  //       code: "CE",
  //     },
  //     {
  //       id: 7,
  //       name: "Mathematics",
  //       code: "MA",
  //     },
  //     {
  //       id: 8,
  //       name: "Aerospace Engineering",
  //       code: "AE",
  //     },
  //     {
  //       id: 9,
  //       name: "Agricultural Engineering",
  //       code: "AG",
  //     },
  //     {
  //       id: 10,
  //       name: "Electronics and Communication Engineering",
  //       code: "EC",
  //     },
  //     {
  //       id: 11,
  //       name: "Biotechnology",
  //       code: "BT",
  //     },
  //   ];
  //   setCategerios(category);
  },[]);
  return (
    <div className="container">
        {/* <UploadFile /> */}
        {/* {console.log("hello")} */}
        <GenralSection pageTitle="Courses" />
        <CategoryScroll categerios={categerios} setCategory={setCategory} setSubject={setSubject}/>
        {/* {console.log("'jljklj")}
        {console.log(selectCategory)} */}
        {/* {categerios?categerios.map((cat) => (
     <CourseContainer key={cat.id} categeory={cat.name} /> 
  )):<div></div>} */}
  
        {/* <CourseContainer categeory={selectCategory} /> */}
        {/* {subject ? <div><SubjectContainer subjects={subject}  /> hjhjkk</div> : 'njknkjn' } */}
        {/* <button onClick={onccc} > click</button> */}
        <SubjectContainer categeory={subject}  />
        </div>
  )
}

export default Courses;