import React, { useState, useRef } from "react";
import "../css/Login.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Signup from "./Signup";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const onLoginClick = () => {
  //     console.log(email,password)
  //     // const PushData = async () => {
  //     //         const data = await (await fetch("http://localhost:5000/user")).json();
  //     //         setPost(data);
  //     //       }
  // }

  const handleLogin = (event) => {
    event.preventDefault();

    let user = {
      email: email,
      password: password,
    };
    console.log(user);

    //       try {
    //       const loginFunction = async () => {
    //             // const response = await axios.post('http://localhost:5000/login', {user}, {withCredentials: true})
    //             const response = await axios.post('http://localhost:5000/login', {user});
    //   // const response = await(await fetch('http://localhost:5000/logged_in')).json();
    //   console.log("hello")
    //   console.log(response);

    //             if(response.data.logged_in) {
    //                 props.handleLogin(response.data);
    //                 setIsLoggedIn(true);
    //                 console.log(response.data.logged_in);
    //                 console.log(isLoggedIn);
    //                 redirect();
    //             }
    //             else{
    //                 setErrors(response.data.errors);
    //                 console.log(errors)
    //             }
    //       }

    //     loginFunction();
    //     // console.log("jjj")
    //     // console.log(isLoggedIn);
    // }
    // catch (e) {
    //     console.log('api errors:', e)
    // }
    redirect();
  };

  const redirect = () => {
    // props.history.push('/');
    // console.log("hello")
    // console.log(props)
    // props.history.push("/");
    // return <Redirect to="/home" />;
    // return <NavLink to="/"> </NavLink>
    // window.history.pushState({}, "", "/");
    window.location.href = "/";
  };

  const onRegisterClick = () => {
    return <Signup />;
  };

  return (
    <div>
      <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div class="card card0 border-0">
          {/* <div class="alert alert-warning alert-dismissible fade show" role="alert">
   { errors == '' ? '' : errors}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div> */}
          <div class="row d-flex">
            <div class="col-lg-6">
              <div class="card1 pb-5">
                <div class="row">
                  <img src="https://i.imgur.com/CXQmsmF.png" class="logo" />
                </div>
                <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <img src="https://i.imgur.com/uNGdWHi.png" class="image" />
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card2 card border-0 px-4 py-5">
                {/* <div class="row mb-4 px-3">
                        <h6 class="mb-0 mr-4 mt-2">Sign in with</h6>
                        <div class="facebook text-center mr-3"><div class="fa fa-facebook"></div></div>
                        <div class="twitter text-center mr-3"><div class="fa fa-twitter"></div></div>
                        <div class="linkedin text-center mr-3"><div class="fa fa-linkedin"></div></div>
                    </div> */}
                {/* <div class="row px-3 mb-4">
                        <div class="line"></div>
                        <small class="or text-center">Or</small>
                        <div class="line"></div>
                    </div> */}
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Email Address</h6>
                  </label>
                  <input
                    class="mb-4"
                    type="text"
                    name="email"
                    placeholder="Enter a valid email address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Password</h6>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div class="row px-3 mb-4">
                  <div class="custom-control custom-checkbox custom-control-inline">
                    <input
                      id="chk1"
                      type="checkbox"
                      name="chk"
                      class="custom-control-input"
                    />
                    <label for="chk1" class="custom-control-label text-sm">
                      Remember me
                    </label>
                  </div>
                  <a href="#" class="ml-auto mb-0 text-sm">
                    Forgot Password?
                  </a>
                </div>
                <div class="row mb-3 px-3">
                  <NavLink to={isLoggedIn ? "/" : "/login"}>
                    <button
                      type="submit"
                      class="btn btn-blue text-center"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </NavLink>
                </div>
                <div class="row mb-4 px-3">
                  <small class="font-weight-bold">
                    Don't have an account?{" "}
                    <NavLink
                      class="text-danger "
                      to="/sign_up"
                      onClick={onRegisterClick}
                    >
                      Register
                    </NavLink>
                  </small>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="bg-blue py-4">
            <div class="row px-3">
                <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                <div class="social-contact ml-4 ml-sm-auto">
                    <span class="fa fa-facebook mr-4 text-sm"></span>
                    <span class="fa fa-google-plus mr-4 text-sm"></span>
                    <span class="fa fa-linkedin mr-4 text-sm"></span>
                    <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
                </div>
            </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
