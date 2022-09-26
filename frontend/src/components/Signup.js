import React,{ useState} from 'react';
import axios from 'axios';

const Signup = (props) =>  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [name, setName] = useState('');
    const[errors, setErrors] = useState('');

    // const onSignupClick = (event) => {
          // const PushData = async () => {
            // const {user} = await (await fetch('http://localhost:5000/get_user')).json();

            
            // user.email = email
            // user.password = password
            // user.passwordConfirmation = passwordConfirmation
            // user.name = name
            // let user = {
            //   username: name,
            //   email: email,
            //   password: password,
            //   password_confirmation: password_confirmation
            // }
            // console.log(user) 
                // const data = await (
                //   await fetch(`http://localhost:5000/sign_up?user={email:"${email}", password: "${password}", password_confirmation: "${passwordConfirmation}", name: "${name}"}`)
                //   // await fetch(`http://localhost:5000/sign_up?user=${user}`)
                //   )
                // .json();
                // setPost(data);

                // await axios.post('http://localhost:3001/users', {user})
    // .then(response => {
    //   console.log(response);
    //   // if (response.data.status === 'created') {
    //   //   // this.props.handleLogin(response.data)
    //   //   // this.redirect()
    //   // } else {
    //   //   // this.setState({
    //   //   //   errors: response.data.errors
    //   //   // })
    //   // }
    // })
    // .catch(error => console.log('api errors:', error))
  // ;
                // console.log(data);

                // const response = await axios.post('http://localhost:5000/sign_up', {user})
      //           const BaseURL = "https://api.themoviedb.org/3/discover/movie?";
      //           const responce = await axios.get(
      //   BaseURL +
      //     "api_key=19f84e11932abbc79e6d83f82d6d1045" +
      //     "&language=en-US" +
      //     "&sort_by=popularity.desc" +
      //     "&include_adult=false" +
      //     "&include_video=false" +
      //     "&page=1" 
          
      // );
        //         console.log(response);
        //       }
        //       PushData();
        // console.log(email, password, name, password_confirmation)



        const handleSignup = () => {
        // event.preventDefault()
    // const {username, email, password, password_confirmation} = this.state
    let user = {
      username: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    console.log("sign up")
// axios.post('http://localhost:5000/sign_up', {user}, {withCredentials: true})
const response =  axios.post('http://localhost:5000/login', {user})
    .then(response => {
      if (response.data.status === 'created') {
        props.handleLogin(response.data)
        // this.redirect()
      } else {
          setErrors(response.data.errors);
      }
    })
    .catch(error => console.log('api errors:', error))
  
    }

  return (
    <div>
        {/* <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form>

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="text" id="firstName" class="form-control form-control-lg" />
                    <label class="form-label" for="firstName">First Name</label>
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="text" id="lastName" class="form-control form-control-lg" />
                    <label class="form-label" for="lastName">Last Name</label>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input type="text" class="form-control form-control-lg" id="birthdayDate" />
                    <label for="birthdayDate" class="form-label">Birthday</label>
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <h6 class="mb-2 pb-1">Gender: </h6>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" checked />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label class="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <input type="email" id="emailAddress" class="form-control form-control-lg" />
                    <label class="form-label" for="emailAddress">Email</label>
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <input type="tel" id="phoneNumber" class="form-control form-control-lg" />
                    <label class="form-label" for="phoneNumber">Phone Number</label>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-12">

                  <select class="select form-control-lg">
                    <option value="1" disabled>Choose option</option>
                    <option value="2">Subject 1</option>
                    <option value="3">Subject 2</option>
                    <option value="4">Subject 3</option>
                  </select>
                  <label class="form-label select-label">Choose option</label>

                </div>
              </div>

              <div class="mt-4 pt-2">
                <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

<section class="vh-100" style={{backgroundColor: "#eee;"}}>
  <div class="container h-100">
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
   { errors == '' ? '' : errors}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: "25px;"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input 
                      type="text" id="form3Example1c" class="form-control"
                      onChange={(e) => setName(e.target.value)}
                        value={name} 
                      />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input
                       type="email" id="form3Example3c" 
                       class="form-control"
                       onChange={(e) => setEmail(e.target.value)}
                        value={email}
                       />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" 
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}/>
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control"
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                      value={password_confirmation}
                      />
                      <label class="form-label" for="form3Example4cd">Confirm your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={handleSignup}>Sign Up</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Signup