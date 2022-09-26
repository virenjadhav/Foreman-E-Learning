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












import React,{useEffect, useState} from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import {Routes, Route} from 'react-router-dom';
import Link from './components/Link';
import Contact from './components/Contact';
import MainHeader from './components/MainHeader';
import Login from './components/Login';
import Header from './components/Header';
import Signup from './components/Signup';
import axios from 'axios';
import Home from './components/Home';

// const courseCategory = [
//   { id: 0, value: "Back-End" },
//   { id: 1, value: "Front-End" },
// ];




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    try{
    const loginStatus = async () => {
         
      const response = await axios.get('http://localhost:5000/logged_in');
      // const response = await(await fetch('http://localhost:5000/logged_in')).json();
      
      console.log(response.data.logged_in);
      setIsLoggedIn(response.data.logged_in);
      
    }
    loginStatus();
  }
  catch(e) {
    console.log('api errors:', e)
    }
  },[]);

  

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  }
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

      

      <Routes>
        <Route path="/" element={<MainHeader />}>
       
          <Route path="about" element={<About />} />
          <Route path="Link" element={<Link />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="login" element={<Login handleLogin={handleLogin} />} />
          <Route path="signup" element={<Signup handleLogin={handleLogin}/>} /> */}
          {/* <Route index element={categerios?categerios.map((cat) => (
     <CourseContainer key={cat.id} categeory={cat.name} />
  )):<div></div>} /> */}
          {/* <Route index element={isLoggedIn==true?renderedCourseContainer:<Login handleLogin={handleLogin} />} /> */}

          <Route index element={<Home />} />
          </Route>
      </Routes> 

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
               {/* <Route path="login" element={<Login handleLogin={handleLogin} />} />
              <Route path="signup" element={<Signup handleLogin={handleLogin}/>} /> */}
               {/* <Route index element={isLoggedIn==true?renderedCourseContainer:<Login handleLogin={handleLogin} />} /> */}
               {/* </Route>
           </Routes>  */}
    {/* );
  // }
  // return <Login handleLogin={handleLogin} />; */}

}

export default App;
