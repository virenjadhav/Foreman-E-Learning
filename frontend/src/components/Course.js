import React from "react";
import Course01 from "../images/courses-01.jpg";
import Author01 from "../images/author-01.jpg";

import { GiOpenBook } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";

import "../css/style.css";

const Course = ({ video }) => {
  console.log(video.snippet);
  // return (
  //   <div
  //     className="card m-2 text-center"
  //     style={{ width: "15rem", display: "inline-block" }}
  //   >
  //     {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
  //     <img
  //       alt={video.snippet.title}
  //       className="card-img-top  "
  //       src={video.snippet.thumbnails.medium.url}
  //       style={{
  //         height: "10rem",
  //         borderRadius: "50%",
  //         width: "60%",
  //       }}
  //     />
  //     <div className="card-body m-0">
  //       <h5
  //         className=""
  //         style={{ fontSize: "15px", height: "40px", overflow: "hidden" }}
  //       >
  //         {video.snippet.title.length > 50
  //           ? video.snippet.title.slice(0, 50) + "..."
  //           : video.snippet.title}
  //         {/* recommand for you */}
  //       </h5>
  //       <p
  //         className="card-text"
  //         style={{ fontSize: "13px", height: "50px", border: "" }}
  //       >
  //         {video.snippet.description.length > 95
  //           ? video.snippet.description.slice(0, 95) + "..."
  //           : video.snippet.description}
  //       </p>
  //       <a href="#" className="btn btn-primary">
  //         Go somewhere
  //       </a>
  //     </div>
  //   </div>
  // );

  return (
    <div className="card my-card">
      <div className="my-card-img-div">
        <img
          className="card-img-top my-card-img-top"
          src={Course01}
          alt="Card image cap"
        />
      </div>
      <div className="card-body my-card-body">
        <div className="my-card-profile-detail">
          <div className="my-card-profile card-columns">
            <img src={Author01} alt="" className="my-card-profile-img" />
            <h3 className="my-card-profile-text">Jason Williams</h3>
          </div>
          <h1 className="my-card-sub-tag">Science</h1>
        </div>
        <h5 className="card-title my-card-title">
          Data Science and Machine Learning with Python - Hands On!
        </h5>
        {/* <p className="card-text my-card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p> */}
        <div className="my-card-course">
          <div className="my-card-time">
            <AiOutlineClockCircle />
            08 hr 15 mins
          </div>
          <div className="my-card-lecture">
            <GiOpenBook />
            29 Lectures
          </div>
        </div>
        {/* <a href="#" className="btn btn-primary my-card-btn">
          Go somewhere
        </a> */}
        {/* full star : MdOutlineStar
        half star : MdOutlineStarHalf
        empty star : MdOutlineStarOutline */}
        <div className="my-card-bottom">
          <h1>$385.00</h1>
          <h2>$440.00</h2>
          <h4>4.9</h4>
          <span className="rating">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStarHalf />
            <MdOutlineStarOutline />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Course;
