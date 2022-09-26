import React from 'react';

import '../css/style.css';

import HeaderImage from "../images/slider.webp"; 

import '../css/Header.css'

function Header() {
  return (
    <div className="header">
        <div className="header-left">
            <h4>Start your favourite course</h4>
            <h1>Now learning from anywhere, and build your bright career.</h1>
            <p>It has survived not only five centuries but also the leap into electronic typesetting.</p>
            <button className='crsbtn crs-btn-primary btn-hover-dark startCourseBtn'>Start A Course</button>
        </div>


        <img src = {HeaderImage} alt="" className = "header-right"/>

    </div>
  )
}

export default Header