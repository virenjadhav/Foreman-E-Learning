import React from "react";

import Course01 from "../images/courses-01.jpg";
import Author01 from "../images/author-01.jpg";
import "../css/style.css";
import "../css/Home.css";

import { GiOpenBook } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const Review = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* <!-- Carousel indicators --> */}
      {/* <ol className="carousel-indicators">
          <li
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol> */}

      {/* <!-- Wrapper for carousel items --> */}
      <div className="carousel-inner">
        {/* <div className="carousel-item active">
            <img
              src={Author01}
              className="d-block w-100"
              alt="Slide 1"
              width="20px"
            /> */}
        {/* <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some placeholder content for the first slide.</p>
            </div> */}
        {/* </div> */}
        {/* <div className="carousel-item">
            <img
              src={Author01}
              className="d-block w-100"
              alt="Slide 2"
              width="20px"
            />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some placeholder content for the second slide.</p>
            </div> */}
        {/* </div> */}
        {/* <div className="carousel-item">
            <img
              src={Author01}
              className="d-block w-100"
              alt="Slide 3"
              width="20px"
            /> */}
        {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some placeholder content for the third slide.</p>
            </div> */}
        {/* </div>{" "} */}

        {/* <div className={`carousel-item ${index == 0 ? "active" : ""}`}> */}
        {/* <div className="row"> */}

        {/* // <div className="col-6"> */}

        {/* //   <img
              //     src={Course01}
              //     className="d-block w-100"
              //     alt="Slide 3"
              //   /> */}

        {/* <p>{color}</p> */}

        {/* <p>{index}</p> */}
        {/* <div className="feedbackCorouselContainer">
                <p className="corosouel-para">
                  lorem ipsum You can also add captions to carousel slides
                  easily with the .carousel-caption element within any
                  .carousel-item. You can optionally use display utility classes
                  to hide captions on smaller viewports. Let's try out the
                  following example to understand how it basically works:
                </p>
                <img
                  src={Course01}
                  className="d-block w-100 corosouel-profile-image"
                  alt="Slide 3"
                />
                <h1 className="Corousel-name">Anna Gunn</h1>
              </div> */}

        {/* <div className="card-group"> */}

        {colors.map((color, index) => (
          <div className={`carousel-item ${index == 0 ? "active" : ""}`}>
            <div className="testimonial-container">
              <div class="card testimonial-card">
                <img
                  class="card-img-top testimonial-image"
                  src={Author01}
                  alt="Card image cap"
                />

                <h5 class="card-title mt-3 text-center">Sara Alexender</h5>
                <span className="rating">
                  <MdOutlineStar size="15" />
                  <MdOutlineStar size="15" />
                  <MdOutlineStar size="15" />
                  <MdOutlineStarHalf size="15" />
                  <MdOutlineStarOutline size="15" />
                </span>

                <div class="card-body container">
                  {/* <h5 class="card-title">Card title</h5> */}
                  <p class="card-text my-card-para">
                    "This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.The background-image property sets one or
                    more background images for an element. By default, a
                    background-image is placed at the top-left corner of an
                    element, and (but not the margin)."
                  </p>
                  {/* <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p> */}
                  {/* <p class="card-title m-0 text-center">Card title</p> */}
                </div>
              </div>
              {/* <div className={`carousel-item ${index == 0 ? "active" : ""}`}>
                <div className="card testimonial-card">
                  <div className="card testimonial-card">
                    <img
                      className="card-img-top"
                      src="..."
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>

                  <img
                    className="card-img-top"
                    src="..."
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div> */}
              {/* </div> */}

              {/* <div className="card">
                  <img className="card-img-top" src="..." alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div> */}
              {/* <div className="card">
                  <img className="card-img-top" src="..." alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                */}
            </div>
          </div>
        ))}
        {/* </div> */}
        {/* </div> */}
      </div>

      {/* <!-- Carousel controls --> */}
      <a
        className="carousel-control-prev"
        href="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
};

export default Review;
