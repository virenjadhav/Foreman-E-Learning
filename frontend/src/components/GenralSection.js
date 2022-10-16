import React from "react";
import "../css/style.css";
import shape1 from "../images/shape/shape-1.webp";
import shape2 from "../images/shape/shape-2.webp";
import shape3 from "../images/shape/shape-3.webp";
import shape4 from "../images/shape/shape-4.webp";
import shape5 from "../images/shape/shape-5.webp";
import shape6 from "../images/shape/shape-6.webp";
import shape8 from "../images/shape/shape-8.webp";
import shape12 from "../images/shape/shape-12.webp";
import shape13 from "../images/shape/shape-13.svg";
import shape14 from "../images/shape/shape-14.webp";
import shape18 from "../images/shape/shape-18.webp";
import shape19 from "../images/shape/shape-19.webp";
import shape20 from "../images/shape/shape-20.webp";
import shape21 from "../images/shape/shape-21.webp";
import shape22 from "../images/shape/shape-22.webp";
import shape23 from "../images/shape/shape-23.webp";
import shape24 from "../images/shape/shape-24.webp";
import author11 from "../images/author/author-11.webp";
import "../css/styles.css";
// import "../css/About.scss";
function GenralSection({pageTitle}) {
  return (
    <div className="GenralSectionContainer">
      {/* <div className="container mt-0">
        <img className="shape-1 animation-round" src={shape1} alt="shape" />
        <img className="shape-2" src={shape2} alt="shape" />
        <div className="container">
          <div className="page-banner-content">
            <ul className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">
                
                About
              </li>
            </ul>
            <h2 className="title">
              About
              <span>E-pariksha</span>
            </h2>
          </div>
        </div>
        <div className="shape-icon-box">

        </div>
      </div> */}
      {/* <!-- Page Banner Start --> */}
      <div class="section page-banner">
        <img class="shape-1 animation-round" src={shape8} alt="Shape" />

        <img class="shape-2" src={shape23} alt="Shape" />

        <div class="container">
          {/* <!-- Page Banner Start --> */}
          <div class="page-banner-content">
            {/* <ul class="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li class="active">About</li>
            </ul> */}
            <h2 class="title">
              {/* About */}
              {pageTitle}
               {/* <span>EduLe.</span> */}
            </h2>
          </div>
          {/* <!-- Page Banner End --> */}
        </div>

        {/* <!-- Shape Icon Box Start --> */}
        <div class="shape-icon-box">
          <img class="icon-shape-1 animation-left" src={shape5} alt="Shape" />

          <div class="box-content">
            <div class="box-wrapper">
              <i class="flaticon-badge"></i>
            </div>
          </div>

          <img class="icon-shape-2" src={shape6} alt="Shape" />
        </div>
        {/* <!-- Shape Icon Box End --> */}

        <img class="shape-3" src={shape24} alt="Shape" />

        <img class="shape-author" src={author11} alt="Shape" />
      </div>
      {/* <!-- Page Banner End --> */}
      {/* </img> */}
    </div>
  );
}

export default GenralSection;
