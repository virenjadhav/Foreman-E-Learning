import React, { useEffect, useContext,useState,createContext } from "react";
import axios from "axios";
import {UserContext} from '../contexts/UserContext'
// import axios from 'axios'
import UploadFile from './UploadFile'
import defaultUser from '../images/defaultUser.jpg'

// export const AppContext =
export const AppContext = createContext(null);

const Profile = () => {
  const  {logged_in, user, baseUrl} = useContext(UserContext);
  const [changeState, setChangeState] = useState('');
  const [changeConfirmPassword, setChangeConfirmPassword] = useState('');
  const [ profileUser, setProfileUser] = useState([]);
  const [message, setMessage] = useState('');
  // const [image_path, setImagePath] = useState(AppContext);
  const [image_path, setImagePath] = useState('');
  

  useEffect(() => {
    try {
      const loginStatus = async () => {
        const response = await axios.post("http://localhost:5000/get_user",{user});
        // const response = await(await fetch('http://localhost:5000/logged_in')).json();

        // console.log(response.data);
        setProfileUser(response.data.user);
        if(response.data.result === 'error'){
          setMessage(response.data.message);
        }
        // setIsLoggedIn(response.data.logged_in);
      };
      loginStatus();

      const getImage = async () => {
        
        
        const post = {
          content_type: 'user',
          content_id: user.id,
        }
        const {data} = await axios.post("http://localhost:5000/get_image",{post});
        console.log(data);
        
        setImagePath(data.featured_image_url);
      }
      getImage();
    } catch (e) {
      console.log("api errors:", e);
    }
    // setUser([1,2])
    console.log("hello")
    console.log(user)
    // console.log(logged_in)
  },[]);
  const onModalClick = (e) => {
    // console.log(e);
    // console.log(e.target.id);
    // console.log(changeState);
    if(!logged_in){
      setMessage(`first login`);
      return;
    }
    const changeType = e.target.id;
    const value = changeState;
    let confirmValue = '';
    let request = '';
    if(changeType === 'changeEmail')
    {
      request = '/change_email'
    }
    else if(changeType === 'changeName'){
      request = '/change_name'
    }
    else if (changeType === 'changeMobile'){
      request = '/change_mobile'
    }
    else if (changeType === 'changeAddress'){
      request = '/change_address'
    }
    else if (changeType === 'changePassword'){
      request = '/change_password';
      confirmValue = changeConfirmPassword;
    }
    const changeUser = {
      password: value,
      password_confirmation: changeConfirmPassword
    }
    
    try{
    const changeService = async () => {
      const response = await axios.patch(`${baseUrl}${request}`,{value,confirmValue, user, changeUser});
      console.log("response");
      console.log(response);
      setMessage(response.data.message);
    }
    changeService();
  }
  catch (e) {
      console.log("api errors:", e);
  }
  }
  const onModalCloseClick = (e) => {
    setChangeState('');
    setChangeConfirmPassword('');
    setProfileUser([]);
  }
  return (
    <div>
        {/* <h1>{`${logged_in}`}</h1> */}
        {/* {console.log("image_path")}
        {image_path==''?"(console.log(image_path))":"byy"}
        {console.log(image_path)} */}
      <div class="container m-3">
        {/* <button
          type="button"
          class="btn btn-primary btn-hover-dark review-btn"
          data-bs-toggle="modal"
          data-bs-target="#reviewsModal"
        >
          Write A Review
        </button> */}

{message != '' ? 
<div class="alert alert-success" role="alert">
  {/* This is a success alert—check it out! */}
  {message}
</div>
 : ""}

        <div class="main-body">
          <div class="row">
            <div class="col-lg-4">
              <div class="row">
              <div class="col-lg-12">
                
              <div class="card">
              <h4 className="text-center card-header">Profile</h4>
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img
                      // src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      src={image_path==''?'https://bootdey.com/img/Content/avatar/avatar6.png':image_path}
                      alt="Admin"
                      class="rounded-circle p-1 bg-primary"
                      width="110"
                    />
                    <div class="mt-3">
                      {/* <h4>John Doe</h4> */}
                      <h4>{profileUser.username}</h4>
                      {/* <p class=" mb-1">Full Stack Developer</p> */}
                      <p class="text-muted font-size-sm">
                        {/* Bay Area, San Francisco, CA */}
                        {profileUser.address}
                      </p>
                      {/* <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary">Message</button> */}
                    </div>
                  </div>
                  {/* <hr class="my-4" /> */}
                  {/* <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-globe me-2 icon-inline"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        Website
                      </h6>
                      <span class="text-secondary">https://bootdey.com</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-github me-2 icon-inline"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Github
                      </h6>
                      <span class="text-secondary">bootdey</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-twitter me-2 icon-inline text-info"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                        Twitter
                      </h6>
                      <span class="text-secondary">@bootdey</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-instagram me-2 icon-inline text-danger"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        Instagram
                      </h6>
                      <span class="text-secondary">bootdey</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-facebook me-2 icon-inline text-primary"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        Facebook
                      </h6>
                      <span class="text-secondary">bootdey</span>
                    </li>
                  </ul> */}
                </div>
              </div>
              </div>
              </div>
              <div class="row" style={{marginTop: "2%"}}>
              <div class="col-lg-12">
              {/* <div class="card">
                <div class="card-body">
                  
                  <h3 className="text-center">Upload Image</h3>
                <div>
                <input type="file" 
                style={{border: "none", marginTop: "2%"}}
                />
                <button 
                
                className="btn btn-primary btn-hover-dark justify-content-center"
                style={{color: "white", backgroundColor: "#309255", border: "1px solid green", margin: "3% 5%"}}
                >Upload</button>
              </div>
                </div>
              </div> */}
              <UploadFile contentType="user" contentId={user.id} title="Upload/Change Profile Image" setImagePath={setImagePath} setMessage={setMessage}/>
              </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card">
              <h4 className="text-center card-header">Details</h4>
                <div class="card-body">
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        // value="John Doe"
                        value={profileUser.username}
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        // value="john@example.com"
                        value={profileUser.email}
                      />
                    </div>
                  </div>
                  {/* <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        value="(239) 816-9029"
                      />
                    </div>
                  </div> */}
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        // value="(320) 380-4539"
                        value={profileUser.mobile_no}
                      />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="text"
                        class="form-control"
                        // value="Bay Area, San Francisco, CA"
                        value={profileUser.address}
                      />
                    </div>
                  </div>
                  {/* <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-9 text-secondary">
                      <input
                        type="button"
                        class="btn btn-primary px-4"
                        value="Save Changes"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-sm-12">
                  <div class="card">
                  <h4 className="text-center card-header">Links</h4>
                    <div class="card-body">
                      {/* <h5 class="d-flex align-items-center mb-3">Links</h5> */}
                      
                      {/* <hr class="my-4" /> */}
                      {/* <p>Change Email</p> */}
                      <button
                        type="button"
                        class="btn btn-primary btn-hover-dark review-btn m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#emailModal"
                      >
                        Change Email Address
                      </button>
                      {/* <div class="progress mb-3" style={{ height: "5px" }}>
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div> */}
                      {/* <hr class="my-4" /> */}
                      {/* <p>Change Password</p> */}
                      <button
                        type="button"
                        class="btn btn-primary btn-hover-dark review-btn m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#passwordModal"
                      >
                        Change Password
                      </button>

                      {/* <p>Change Name</p> */}
                      <button
                        type="button"
                        class="btn btn-primary btn-hover-dark review-btn m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#nameModal"
                      >
                        Change Your Name
                      </button>
                      <hr class="my-4" />
                      {/* <hr class="my-4" /> */}
                      {/* <p>Change Mobile No</p> */}
                      <button
                        type="button"
                        class="btn btn-primary btn-hover-dark review-btn m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#mobileModal"
                      >
                        Change Mobile No
                      </button>

                      {/* <a
                        style={{
                          textDecoration: "none",
                          border: "none",
                          background: "none",
                        }}
                      >
                        Change Address
                      </a> */}
                      <button
                        type="button"
                        class="btn btn-primary btn-hover-dark review-btn m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#addressModal"
                      >
                        Change Address
                      </button>
                      {/* <p>Website Markup</p>
                      <div class="progress mb-3" style={{ height: "5px" }}>
                        <div
                          class="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p>One Page</p>
                      <div class="progress mb-3" style={{ height: "5px" }}>
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p>Mobile Template</p>
                      <div class="progress mb-3" style={{ height: "5px" }}>
                        <div
                          class="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <p>Backend API</p>
                      <div class="progress" style={{ height: "5px" }}>
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div> */}
                    </div>
                  </div>
                  <div class="modal fade" id="emailModal">
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Change Email Address</h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={e=> {  onModalCloseClick(e)}}
                          ></button>
                        </div>

                        {/* <!-- Reviews Form Start --> */}
                        <div class="modal-body reviews-form">
                          <form action="" onSubmit={e => e.preventDefault()}>
                            <div class="row">
                              {/* <div class="col-md-6">
                               
                                <div class="single-form">
                                  <input
                                    type="text"
                                    placeholder="Enter your name"
                                  />
                                </div>
                               
                              </div> */}
                              <div class="col-md-12">
                                {/* <!-- Single Form Start --> */}
                                <div class="single-form">
                                  <input
                                    type="text"
                                    placeholder="Enter your New Email"
                                    value={changeState}
                                    onChange={e => setChangeState(e.target.value)}
                                  />
                                </div>
                                {/* <!-- Single Form End --> */}
                              </div>
                              
                              
                              <div class="col-md-12">
                                {/* <!-- Single Form Start --> */}
                                <div class="single-form">
                                  <button class="btn btn-primary btn-hover-dark" onClick={e=> { onModalClick(e); onModalCloseClick(e)}} data-bs-dismiss="modal"
                            aria-label="Close" id="changeEmail">
                                    Change Email
                                  </button>
                                </div>
                                {/* <!-- Single Form End --> */}
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* <!-- Reviews Form End --> */}
                      </div>
                    </div>  
                  </div>
                  <div class="modal fade" id="passwordModal">
                  <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Change Password</h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        {/* <!-- Reviews Form Start --> */}
                        <div class="modal-body reviews-form">
                           <form action="" onSubmit={e => e.preventDefault()}>
                            <div class="row">
                              {/* <div class="col-md-6">
                               
                                <div class="single-form">
                                  <input
                                    type="text"
                                    placeholder="Enter your name"
                                  />
                                </div>
                               
                              </div> */}
                              <div class="col-md-12">
                                {/* <!-- Single Form Start --> */}
                                <div class="single-form">
                                  <input
                                    type="password"
                                    placeholder="Enter your New Password"
                                    value={changeState}
                                    onChange={e => setChangeState(e.target.value)}
                                  />
                                </div>
                                {/* <!-- Single Form End --> */}
                              </div>
                              <div class="col-md-12">
                                {/* <!-- Single Form Start --> */}
                                <div class="single-form">
                                  <input
                                    type="password"
                                    placeholder="Confirm your Password"
                                    value={changeConfirmPassword}
                                    onChange={e => setChangeConfirmPassword(e.target.value)}
                                  />
                                </div>
                                {/* <!-- Single Form End --> */}
                              </div>
                              
                              
                              <div class="col-md-12">
                                {/* <!-- Single Form Start --> */}
                                <div class="single-form">
                                  <button class="btn btn-primary btn-hover-dark" onClick={e=> { onModalClick(e); onModalCloseClick(e)}} data-bs-dismiss="modal"
                            aria-label="Close" id="changePassword">
                                    Change Password
                                  </button>
                                </div>
                                {/* <!-- Single Form End --> */}
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* <!-- Reviews Form End --> */}
                      </div>
                    </div>  
                  </div>
                  <div class="modal fade" id="nameModal">
                  <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Change Your Name</h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        {/* <!-- Reviews Form Start --> */}
                        <div class="modal-body reviews-form">
                           <form action="" onSubmit={e => e.preventDefault()}>
                            <div class="row">
                              {/* <div class="col-md-6">
                               
                                <div class="single-form">
                                  <input
                                    type="text"
                                    placeholder="Enter your name"
                                  />
                                </div>
                               
                              </div> */}
                              <div class="col-md-12">
                                {/* <!-- Single Form Start --> */}
                                <div class="single-form">
                                  <input
                                    type="text"
                                    placeholder="Enter your New Name"
                                    value={changeState}
                                    onChange={e => setChangeState(e.target.value)}
                                  />
                                </div>
                                {/* <!-- Single Form End --> */}
                              </div>
                              
                              
                              <div class="col-md-12">
                                {/* <!-- Single Form Start --> */}
                                <div class="single-form">
                                  <button class="btn btn-primary btn-hover-dark" onClick={e=> { onModalClick(e); onModalCloseClick(e)}}  data-bs-dismiss="modal"
                            aria-label="Close" id="changeName">
                                    Change Name
                                  </button>
                                </div>
                                {/* <!-- Single Form End --> */}
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* <!-- Reviews Form End --> */}
                      </div>
                    </div> 
                  </div>
                  <div class="modal fade" id="mobileModal">
                  <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Change Mobile No</h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        {/* <!-- Reviews Form Start --> */}
                        <div class="modal-body reviews-form">
                           <form action="" onSubmit={e => e.preventDefault()}>
                            <div class="row">
                              {/* <div class="col-md-6">
                               
                                <div class="single-form">
                                  <input
                                    type="text"
                                    placeholder="Enter your name"
                                  />
                                </div>
                               
                              </div> */}
                              <div class="col-md-12">
                                {/* <!-- Single Form Start --> */}
                                <div class="single-form">
                                  <input
                                    type="text"
                                    placeholder="Enter your New Mobile No"
                                    value={changeState}
                                    onChange={e => setChangeState(e.target.value)}
                                  />
                                </div>
                                {/* <!-- Single Form End --> */}
                              </div>
                              
                              
                              <div class="col-md-12">
                                {/* <!-- Single Form Start --> */}
                                <div class="single-form">
                                  <button class="btn btn-primary btn-hover-dark" onClick={e=> { onModalClick(e); onModalCloseClick(e)}}  data-bs-dismiss="modal"
                            aria-label="Close" id="changeMobile">
                                    Change Mobile No
                                  </button>
                                </div>
                                {/* <!-- Single Form End --> */}
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* <!-- Reviews Form End --> */}
                      </div>
                    </div> 
                  </div>
                  <div class="modal fade" id="addressModal">
                  <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Change  Address</h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        {/* <!-- Reviews Form Start --> */}
                        <div class="modal-body reviews-form">
                           <form action="" onSubmit={e => e.preventDefault()}>
                            <div class="row">
                              {/* <div class="col-md-6">
                               
                                <div class="single-form">
                                  <input
                                    type="text"
                                    placeholder="Enter your name"
                                  />
                                </div>
                               
                              </div> */}
                              <div class="col-md-12">
                                {/* <!-- Single Form Start --> */}
                                <div class="single-form">
                                  <input
                                    type="text"
                                    placeholder="Enter your New Address"
                                    value={changeState}
                                    onChange={e => setChangeState(e.target.value)}
                                  />
                                </div>
                                {/* <!-- Single Form End --> */}
                              </div>
                              
                              
                              <div class="col-md-12">
                                {/* <!-- Single Form Start --> */}
                                <div class="single-form">
                                  <button class="btn btn-primary btn-hover-dark" onClick={e=> { onModalClick(e); onModalCloseClick(e)}} data-bs-dismiss="modal"
                            aria-label="Close" id="changeAddress">
                                    Change Address
                                  </button>
                                </div>
                                {/* <!-- Single Form End --> */}
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* <!-- Reviews Form End --> */}
                      </div>
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
