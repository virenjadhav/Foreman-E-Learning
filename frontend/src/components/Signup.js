import React, { useState } from "react";
import axios from "axios";
import Login from "./Login";
import { NavLink } from "react-router-dom";
import Message from "./Message";
import signup from "../images/signup.jpg";

import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    // const {username, email, password, password_confirmation} = this.state

    if (
      email == "" ||
      password == "" ||
      password_confirmation == "" ||
      name == ""
    ) {
      setMessage("Mandatory field (*) cannot be blank");
      return;
    }
    let user = {
      full_name: name,
      username: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      // mobile_no: mobile,
      // address: address,
      user_type: "student",
      type_code: "st",
    };
    // console.log("sign up");
    // console.log(user);
    // axios.post('http://localhost:5000/sign_up', {user}, {withCredentials: true})
    const response = axios
      .post("http://localhost:5000/sign_up", { user })
      .then((response) => {
        if (response.data.status === "created") {
          props.handleLogin(response.data);
          // console.log("success")
          // console.log(response.data)
          // this.redirect()
          redirect();
        } else {
          setErrors(response.data);
          console.log("error");
          console.log(response.data.errors);
          setMessage(response.data.errors);
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log("api errors:", error);
        setMessage(error.message);
      });
  };

  const redirect = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <Message message={message} />
      </div>
      <section class="vh-100" style={{ backgroundColor: "#eee;" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px;" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                              style={{ border: "1px solid green" }}
                              placeholder="Enter Your Name (*)"
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              class="form-control"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                              style={{ border: "1px solid green" }}
                              placeholder="Enter Your Email (*)"
                            />
                            {/* <label class="form-label" for="form3Example3c">
                              Your Email
                            </label> */}
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                              style={{ border: "1px solid green" }}
                              placeholder="Enter Your Password (*)"
                            />
                            {/* <label class="form-label" for="form3Example4c">
                              Password
                            </label> */}
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              class="form-control"
                              onChange={(e) =>
                                setPasswordConfirmation(e.target.value)
                              }
                              value={password_confirmation}
                              style={{ border: "1px solid green" }}
                              placeholder="Confirm your password (*)"
                            />
                            {/* <label class="form-label" for="form3Example4cd">
                              Confirm your password
                            </label> */}
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example4cd"
                              class="form-control"
                              onChange={(e) => setAddress(e.target.value)}
                              value={address}
                              style={{ border: "1px solid green" }}
                              placeholder="Address"
                            />
                            {/* <label class="form-label" for="form3Example4cd">
                              Confirm your password
                            </label> */}
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example4cd"
                              class="form-control"
                              onChange={(e) => setMobile(e.target.value)}
                              value={mobile}
                              style={{ border: "1px solid green" }}
                              placeholder="Enter Mobile No"
                              min="1"
                              max="10"
                            />
                            {/* <label class="form-label" for="form3Example4cd">
                              Confirm your password
                            </label> */}
                          </div>
                        </div>

                        {/* <label for="type">Type (*):</label>

<select name="type" id="type" onChange={e => setType(e.target.value)} value={type}>
  <option value="">Student</option>
  <option value="teacher">Teachers</option>
</select> */}

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            class="btn btn-primary btn-lg"
                            onClick={handleSignup}
                          >
                            Sign Up
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        src={signup}
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
