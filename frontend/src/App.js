import React, { useEffect, useState, useContext, Fragment } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Link from "./components/Link";
import Contact from "./components/Contact";
import MainHeader from "./components/MainHeader";
import Login from "./components/Login";
import Header from "./components/Header";
import Signup from "./components/Signup";
import axios from "axios";
import Home from "./components/Home";
import Course from "./components/Course";
import CourseInfo from "./components/CourseInfo";
import CourseDetails from "./components/CourseDetails";
import Profile from "./components/Profile";
import { NavLink } from "react-router-dom";
import Courses from './components/Courses'
import AddCourse from "./components/AddCourse"
import TeacherProfile from "./components/TeacherProfile"
import MyCourses from "./components/MyCourses"
import AddTeacher from './components/AddTeacher'
import NotesPage from "./components/NotesPage"

import UserContextProvider from './contexts/UserContext'
import {UserContext} from './contexts/UserContext'

import { useNavigate } from "react-router-dom";


function App() {
  const {user,logged_in,baseUrl,setUser,setLoggedIn} = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // try {
    //   const loginStatus = async () => {
    //     const response = await axios.get("http://localhost:5000/logged_in");
    //     // const response = await(await fetch('http://localhost:5000/logged_in')).json();

    //     // console.log(response.data);
    //     setIsLoggedIn(response.data.logged_in);
    //   };
    //   loginStatus();
    // } catch (e) {
    //   console.log("api errors:", e);
    // }
    // logged_in? navigate("/"): navigate("/login");
    // console.log(logged_in)
  }, [logged_in]);

  const handleLogin = (data) => {
    setLoggedIn(true);
    setUser(data.user);
    // console.log("data")
    // console.log(data)
  };
  

  const handleLogout = () => {
    setLoggedIn(false);
    setUser({});
  };
  const navigateHome = (e) => {
    navigate('/');
  }
 

  return (
    <div>
      {/* {logged_in ? */}
      <Routes>
        
        <Route path="/" element={<MainHeader  />}>
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/sign_up"
            element={<Signup handleLogin={handleLogin} />}
          />
          <Route path="about" element={<About />} />
          <Route path="Link" element={<Link />} />
          <Route path="courses" element={<Courses />} />
          <Route path="my_courses" element={<MyCourses />} />
          <Route path="contact" element={<Contact />} />

          <Route path="profile" element={<Profile />} />

          <Route path="course" element={<Course />} />
          {/* <Route path="courses" element={<Courses />} /> */}
          <Route path="add_course" element={<AddCourse />} />
          <Route path="teacher_profile" element={<TeacherProfile />} />
          <Route path="course_detail" element={<CourseDetails />} />
          <Route path="add_teacher" element={<AddTeacher handleLogin={handleLogin}/>} />
          <Route path="notes" element={<NotesPage />} />          
          <Route index element={<Home />} />
         
        </Route>
      </Routes>
      {/* :
      <Routes>
       <Route path="/login" element={<Login handleLogin={handleLogin} />} />
       <Route
             path="/sign_up"
             element={<Signup handleLogin={handleLogin} />}
           />
       </Routes>
      } */}
      
    </div>
  );
}

export default App;
