import React from 'react';
import { NavLink } from "react-router-dom";

function Profile (){

    const navigateToAddCourse = url =>{
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className = "container">

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={require('../images/bg2.jpg')} className="d-block w-100" alt="..." style = {{height: '250px', opacity: '.5'}}/>
                    </div>
                </div>
            </div>

            <div className='row'>

                <div className='col'>
                    <div className="card mb-5" style ={{"width": "18rem", height : '32'}}>
                    <img src={require('../images/Olivier_1500_Trptch.jpg')} className="card-img-top" alt="..." style ={{"height": "15rem"}} />
                        <div className="card-body">
                            <p className="card-text">
                                <b>Name</b> : Yashwant Yadav
                            </p>
                            <p className="card-text">
                                <b>Faculty Of</b> : Computer Science
                            </p>
                            <p className="card-text">
                                <b>Experiance</b> : 15+ yrs
                            </p>
                            <p className="card-text">
                                <b>Email</b> : Yashwant.Yadav@mail.com
                            </p>
                            <p className="card-text">
                                <b>Phone</b> : +91 123-456-789
                            </p>
                            <p className="card-text">
                                <b>Position</b> : Teacher
                            </p>
                        </div>
                    </div>
                </div>
            
                <div className='col' style={{marginTop : '35px'}}>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Enter Video material link</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Enter Study material link</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>

                <div className='col mx-7' style={{marginTop : '35px'}}>
                {/* <button type="submit" class="btn btn-primary mb-3" onClick={() =>  ('127.0.0.1/AddCourse')}>Add Course</button> */}
                {/* <Link to="/add_course" className="btn btn-primary">Add course</Link> */}
                <NavLink className="btn btn-primary" to="/add_course">
                    Add Course
                </NavLink>

                <h2>Uploaded courses</h2>
                <ul>
                    <li>React</li>
                    <li>Rails</li>
                    <li>Java</li>
                    <li>Redux</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile;
