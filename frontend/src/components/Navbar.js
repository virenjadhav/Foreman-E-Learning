import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="#">
          Navbar
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="course">
                Course
              </NavLink>
            </li>
            <li className="nav-item dropdown">
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
            </li>
            <li className="nav-item">
              <NavLink className="nav-link disabled" to="#">
                Disabled
              </NavLink>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}

          <form
            className="d-flex"
            role="search"
            style={{ justifyContent: "flex-right" }}
          >
            <div className="collapse navbar-collapse navbar-1">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <ul> */}
                <li className="nav-item m-2 ">
                  <NavLink to="#about" className="leftLink">
                    about
                  </NavLink>
                </li>
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
                  <NavLink className="leftLink" to="/signup">
                    SignUp
                  </NavLink>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
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
