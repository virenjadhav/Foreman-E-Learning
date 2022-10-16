import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
// import App from '../App';
import {UserContext} from '../contexts/UserContext'
import { useNavigate } from "react-router-dom";

function Navbar({user}) {

  const {logged_in,baseUrl,setUser,setLoggedIn} = useContext(UserContext);
  const navigate = useNavigate();

  
  const handleLogout = () => {
    setLoggedIn(false);
    setUser({});
    navigate("/login");
  };
  return (
    <div className="">
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light"> */}
  
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <NavLink className="navbar-brand" to="#">
          GATE
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
        {/* <div class="navbar-collapse collapse"> */}
        <div class="container-fluid ">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home 
                {/* <span className="sr-only">(current)</span> */}
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/add_teacher">
                Add Teacher 
                {/* <span className="sr-only">(current)</span> */}
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/notes">
                Notes 
                {/* <span className="sr-only">(current)</span> */}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/courses">
                Courses
              </NavLink>
            </li>

            {user.type_code === 'tc'? 
           
            <li className="nav-item">
              <NavLink className="nav-link" to="/my_courses">
                My Course
              </NavLink>
            </li>
             
            :
""
            }
            {user.type_code === 'tc'? 
             <li className="nav-item">
             <NavLink className="nav-link" to="/add_course">
               Add Course
             </NavLink>
           </li>
           
            :
""
            }

            <li className="nav-item">
            <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>

            <li className="nav-item active">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            
            
            {/* <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="#">
                  Action
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  Another action
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="#">
                  Something else here
                </NavLink>
              </div>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link disabled" to="#">
                Disabled
              </NavLink>
            </li> */}
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}

          {/* <form
            className="d-flex"
            role="search"
            style={{ justifyContent: "flex-right" }}
          >
            <div className="collapse navbar-collapse navbar-1">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               
                
                <li className="nav-item m-2 ">
                  <NavLink to="#" className="leftLink">
                    team
                  </NavLink>
                </li>

                <li className="nav-item m-2  ">
                  <NavLink className="leftLink" to="/login">
                    LogIn
                  </NavLink>
                </li>
                <li className="nav-item  m-2 ">
                  <NavLink className="leftLink" to="/sign_up">
                    SignUp
                  </NavLink>
                </li>
               
                <li className="nav-item  m-2 ">
                  <NavLink className="leftLink" to="/teacher_profile">
                    T Profile
                  </NavLink>
                </li>
              </ul>
            </div>
          </form> */}


    {/* <ul class="nav navbar-nav navbar-right">

      <li><a href="/login">login</a></li>
      <li><a href="/register">sign up</a></li>

  </ul> */}


<div class="nav navbar-right">
      {/* <li class="nav-item dropdown">
        <a class="btn btn-secondary btn-sm dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
          Manage
        </a>
      </li> */}

{logged_in?
<li className="nav-item">
  
              <NavLink className="nav-btn btn btn-primary btn-hover-dark" to="" onClick={handleLogout} style={{color: 'white'}}>
                Log Out
              </NavLink>
              
            </li>
            :""}
            
    </div>
        </div>
      </nav>
     
{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid ">

    <div class="navbar-header">
      <a class="navbar-brand" href="#">Recipes</a>
    </div>

    <div class="navbar-nav mr-auto">
      <ul class="nav navbar-nav">

        <a class="nav-item nav-link" href="#">Recipes</a>
        <a class="nav-item nav-link" href="#">Shopping</a>

      </ul>

    </div>

    **<div class="nav navbar-right">
      <li class="nav-item dropdown">
        <a class="btn btn-secondary btn-sm dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
          Manage
        </a>
        <div class="dropdown-content">
            <li><a class="dropdown-item" href="#">Save Data</a></li>
            <li><a class="dropdown-item" href="#">Load Data</a></li>
            <li><div class="dropdown-divider"></div></li>
            <li><a class="dropdown-item" href="#">Export Data</a></li>
      </div>
      </li>
    </div>
  </div>**
</nav> */}
    </div>
  );
}

export default Navbar;

// import React from 'react';
// import {NavLink} from 'react-router-dom';
// import '../css/Navbar.css'

// function Navbar() {
//   return (
//     <div>
//         <div className="container">
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark parikshaNavbar">
//             <div className="container-fluid">
//                 <NavLink className="navbar-brand NavbarLogo1" to="/">ParikshaBodh</NavLink>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                     <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
//                     </li>
//                     <li className="nav-item">
//                     <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
//                     </li>
//                     <li className="nav-item">
//                     <NavLink className="nav-link" to="/Link">Link</NavLink>
//                     </li>
//                     <li className="nav-item">
//                     <NavLink className="nav-link" to="/contact">Contact</NavLink>
//                     </li>
//                     <li className="nav-item dropdown">
//                     <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                         Dropdown
//                     </NavLink>
//                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                         <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
//                         <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
//                         <li><hr className="dropdown-divider" /></li>
//                         <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
//                     </ul>
//                     </li>
//                 </ul> */}
//                 {/* <form className="d-flex">
//                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success" type="submit">Search</button>
//                 </form> */}
//                 </div>
//             </div>
//             <form className="d-flex" role="search">
//             <div className="collapse navbar-collapse navbar-1">
// 				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 {/* <ul> */}
// 					<li className="nav-item m-2 ">
// 						<NavLink to="#about" className="leftLink">about</NavLink>
// 					</li>
// 					<li className="nav-item m-2 ">
// 						<NavLink to="#" className="leftLink">team</NavLink>
// 					</li>

// 					<li className="nav-item m-2  ">
//                     <NavLink className="leftLink" to="/login">LogIn</NavLink>
// 					</li>
// 					<li className="nav-item  m-2 ">
//                     <NavLink className="leftLink" to="/signup">SignUp</NavLink>
// 					</li>
//           </ul>
// 			</div>
//             </form>
//         </nav>
//         </div>
//     </div>
//   )
// }

// export default Navbar
