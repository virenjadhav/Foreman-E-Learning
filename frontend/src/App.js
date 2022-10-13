// import React,{useEffect, useState} from "react";
// import CourseContainer from "./components/CourseContainer";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import About from "./components/About";
// import {Routes, Route} from 'react-router-dom';
// import Link from './components/Link';
// import Contact from './components/Contact';
// import MainHeader from './components/MainHeader';
// import Login from './components/Login';
// import Header from './components/Header';
// import Signup from './components/Signup';

// const courseCategory = [
//   { id: 0, value: "Back-End" },
//   { id: 1, value: "Front-End" },
// ];

// const renderedCourseContainer = courseCategory.map((cat) => {
//   return <CourseContainer key={cat.id} categeory={cat.value} />;
// });

// function App() {

//   // const [post, setPost] = useState([]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const data = await (await fetch("http://localhost:5000/posts")).json();
//   //     setPost(data);
//   //   }
//   //   fetchData();
//   //   }, []);

//   return (
//     <div>

//       <Navbar />
//       {/* <Header /> */}
//       {/* <Login /> */}
//       <Signup />

//       {/* <Routes>
//         <Route path="/" element={<MainHeader />}>

//           <Route path="about" element={<About />} />
//           <Route path="Link" element={<Link />} />
//           <Route path="contact" element={<Contact />} />
//           <Route index element={renderedCourseContainer} />
//           </Route>
//       </Routes>  */}

//       {/* <div>
//       <h1>Posts</h1>
//         {post.map ( pos =>{
//           return <div key={pos.id}>
//             <h1>{pos.title}</h1>
//             <p>{pos.body}</p>
//           </div>;
//         }
//         )}

//     </div>     */}
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";

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

import { useNavigate } from "react-router-dom";
// const courseCategory = [
//   { id: 0, value: "Back-End" },
//   { id: 1, value: "Front-End" },
// ];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const loginStatus = async () => {
        const response = await axios.get("http://localhost:5000/logged_in");
        // const response = await(await fetch('http://localhost:5000/logged_in')).json();

        console.log(response.data.logged_in);
        setIsLoggedIn(response.data.logged_in);
      };
      loginStatus();
    } catch (e) {
      console.log("api errors:", e);
    }
    // navigate("/login");
  }, []);

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await (await fetch("http://localhost:5000/posts")).json();
  //     setPost(data);
  //   }
  //   fetchData();
  //   }, []);

  // const renderedCourseContainer = categerios.map((cat) => {
  //   return <CourseContainer key={cat.id} categeory={cat.name} />;
  // });

 

  return (
    <div>
      {/* //     <Navbar /> */}
      {/* <Header /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* {console.log(isLoggedIn)}
      {isLoggedIn? */}
      {/* {window.history.pushState({}, "", '/login')} */}
      {/* {window.location.href = "/login"} */}
      <Routes>
        {/* <Route path="/login" element={<Login handleLogin={handleLogin}/>} /> */}
        {/* <Route path="/sign_up" element={<Signup handleLogin={handleLogin} />} /> */}
        <Route path="/" element={<MainHeader />}>
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/sign_up"
            element={<Signup handleLogin={handleLogin} />}
          />
          <Route path="about" element={<About />} />
          <Route path="Link" element={<Link />} />
          <Route path="contact" element={<Contact />} />

          <Route path="profile" element={<Profile />} />

          <Route path="course" element={<Course />} />
          <Route path="course_detail" element={<CourseDetails />} />
          {/* <Route path="login" element={<Login handleLogin={handleLogin} />} />
          <Route path="signup" element={<Signup handleLogin={handleLogin}/>} /> */}
          {/* <Route index element={categerios?categerios.map((cat) => (
     <CourseContainer key={cat.id} categeory={cat.name} />
  )):<div></div>} /> */}
          {/* <Route index element={isLoggedIn==true?renderedCourseContainer:<Login handleLogin={handleLogin} />} /> */}

          <Route index element={<Home />} />
        </Route>
      </Routes>
      {/* : */}

      {/* <Routes>
      <Route path="/sign_up" element={<Signup handleLogin={handleLogin} />} />
      {/* <NavLink to="/login"> 
      {window.history.pushState({}, "", '/login')}
      <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
      </NavLink>
      </Routes> */}

      {/* } */}

      {/* <div>
  //     <h1>Posts</h1>
  //       {post.map ( pos =>{
  //         return <div key={pos.id}>
  //           <h1>{pos.title}</h1>
  //           <p>{pos.body}</p>
  //         </div>;
  //       }
  //       )}
        
  //   </div>     */}
      {/* <Footer /> */}
    </div>
  );

  // if (isLoggedIn) {
  // return (
  //   <Routes>
  //          <Route path="/" element={<MainHeader />}>

  //            <Route path="about" element={<About />} />
  //            <Route path="Link" element={<Link />} />
  //            <Route path="contact" element={<Contact />} />
  {
    /* <Route path="login" element={<Login handleLogin={handleLogin} />} />
              <Route path="signup" element={<Signup handleLogin={handleLogin}/>} /> */
  }
  {
    /* <Route index element={isLoggedIn==true?renderedCourseContainer:<Login handleLogin={handleLogin} />} /> */
  }
  {
    /* </Route>
           </Routes>  */
  }
  {
    /* );
  // }
  // return <Login handleLogin={handleLogin} />; */
  }
}

export default App;
