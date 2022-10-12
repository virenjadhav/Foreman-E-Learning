import React, { useState } from "react";

import "../css/course.css";

import { HiOutlinePlay } from "react-icons/hi";
import { IoPlayOutline } from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImFilm } from "react-icons/im";
import { BsBarChartLine } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { RiSkypeLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";

import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";

import playImg from "../images/courses/circle-shape.png";
import detailImg from "../images/courses/courses-details.jpg";
import author1 from "../images/author/author-01.jpg";
import author2 from "../images/author/author-02.jpg";
import author3 from "../images/author/author-03.jpg";
import author4 from "../images/author/author-04.jpg";
import author6 from "../images/author/author-06.jpg";
import author7 from "../images/author/author-07.jpg";
import Review from "./Review";

const CourseInfo = () => {
  const [starValue, setStarValue] = useState(0);
  const onStarClick = (event) => {
    // console.log(event.nativeEvent.path[2]);
    console.log(event.nativeEvent.path[2].dataset.value);
    // console.log(event.nativeEvent);
    // console.log(event);
  };
  return (
    <div class="section-course section-padding mt-n10">
      {/* <!-- Courses Start --> */}
      <div class="container">
        <div class="row gx-10">
          <div class="col-lg-8">
            {/* <!-- Courses Details Start --> */}
            <div class="courses-details">
              <div class="courses-details-images">
                <img src={detailImg} alt="Courses Details" />
                <span class="tags">Finance</span>

                <div class="courses-play">
                  <img src={playImg} alt="Play" />
                  <a
                    class="play video-popup"
                    href="https://www.youtube.com/watch?v=Wif4ZkwC0AM"
                  >
                    <i>
                      <IoPlayOutline size="40" className="flaticon-play" />
                    </i>
                  </a>
                </div>
              </div>

              <h2 class="title">
                Finance & Investment Series: Learn to Budget and Calculate Your
                Net Worth.
              </h2>

              <div class="courses-details-admin">
                <div class="admin-author">
                  <div class="author-thumb">
                    <img src={author1} alt="Author" />
                  </div>
                  <div class="author-content">
                    <a class="name" href="#">
                      Pamela Foster
                    </a>
                    <span class="Enroll">286 Enrolled Students</span>
                  </div>
                </div>
                {/* <div class="admin-rating">
                  <span class="rating-count">4.9</span>
                  <span class="rating-star">
                    <span class="rating-bar" style={{ width: "80%;" }}></span>
                  </span>
                  <span class="rating-text">(5,764 Rating)</span>
                </div> */}
                <span className="my-card-rating">
                  <h4 className="rating-count">4.9</h4>
                  <span className="rating">
                    <MdOutlineStar size="15" />
                    <MdOutlineStar size="15" />
                    <MdOutlineStar size="15" />
                    <MdOutlineStarHalf size="15" />
                    <MdOutlineStarOutline size="15" />
                  </span>
                  <h4 className="rating-text">(5,764 Rating)</h4>
                </span>
              </div>

              {/* <!-- Courses Details Tab Start --> */}
              <div class="courses-details-tab">
                {/* <!-- Details Tab Menu Start --> */}
                <div class="details-tab-menu">
                  <ul class="nav justify-content-center">
                    <li>
                      <button
                        class="active"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                      >
                        Description
                      </button>
                    </li>
                    <li>
                      <button
                        data-bs-toggle="tab"
                        data-bs-target="#instructors"
                      >
                        Instructors
                      </button>
                    </li>
                    <li>
                      <button data-bs-toggle="tab" data-bs-target="#reviews">
                        Reviews
                      </button>
                    </li>
                  </ul>
                </div>
                {/* <!-- Details Tab Menu End --> */}

                {/* <!-- Details Tab Content Start --> */}
                <div class="details-tab-content">
                  <div class="tab-content">
                    <div class="tab-pane fade show active" id="description">
                      {/* <!-- Tab Description Start --> */}
                      <div class="tab-description">
                        <div class="description-wrapper">
                          <h3 class="tab-title">Description:</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularsed in the 1960 with
                            release containing Lorem Ipsum passages desktop
                            publishing software.
                          </p>
                        </div>
                        <div class="description-wrapper">
                          <h3 class="tab-title">Curriculum:</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularsed in the 1960 with
                            release containing Lorem Ipsum passages desktop
                            publishing software.
                          </p>
                        </div>
                        <div class="description-wrapper">
                          <h3 class="tab-title">Certification:</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularsed in the 1960 with
                            release containing Lorem Ipsum passages desktop
                            publishing software.
                          </p>
                        </div>
                      </div>
                      {/* <!-- Tab Description End --> */}
                    </div>
                    <div class="tab-pane fade" id="instructors">
                      {/* <!-- Tab Instructors Start --> */}
                      <div class="tab-instructors">
                        <h3 class="tab-title">Course Instructor:</h3>

                        <div class="row">
                          <div class="col-md-3 col-6">
                            {/* <!-- Single Team Start --> */}
                            <div class="single-team">
                              <div class="team-thumb">
                                <img src={author1} alt="Author" />
                              </div>
                              <div class="team-content">
                                {/* <div class="rating"> */}
                                {/* <span class="count">4.9</span>
                                  {/* <i class="icofont-star"></i> 
                                  <i>
                                    <MdOutlineStar class="icofont-star" />
                                  </i>

                                 
                                  <span class="text">(rating)</span> */}
                                <div>
                                  <span className="my-card-rating">
                                    <h4 className="rating-count">4.9</h4>
                                    <span className="rating mt-1">
                                      <MdOutlineStar size="20" />
                                    </span>
                                    <h4 className="rating-text">(rating)</h4>
                                  </span>
                                </div>
                                {/* </div> */}
                                <h4 class="name">Margarita James</h4>
                                <span class="designation">MSC, Instructor</span>
                              </div>
                            </div>
                            {/* <!-- Single Team End --> */}
                          </div>
                          <div class="col-md-3 col-6">
                            {/* <!-- Single Team Start --> */}
                            <div class="single-team">
                              <div class="team-thumb">
                                <img src={author2} alt="Author" />
                              </div>
                              <div class="team-content">
                                {/* <div class="rating">
                                  <span class="count">4.9</span>
                                  {/* <i class="icofont-star"></i> 
                                  <i>
                                    <MdOutlineStar class="icofont-star" />
                                  </i>
                                  <span class="text">(rating)</span>
                                </div> */}
                                <div>
                                  <span className="my-card-rating">
                                    <h4 className="rating-count">4.9</h4>
                                    <span className="rating mt-1">
                                      <MdOutlineStar size="20" />
                                    </span>
                                    <h4 className="rating-text">(rating)</h4>
                                  </span>
                                </div>
                                <h4 class="name">Mitchell Colon</h4>
                                <span class="designation">BBA, Instructor</span>
                              </div>
                            </div>
                            {/* <!-- Single Team End --> */}
                          </div>
                          <div class="col-md-3 col-6">
                            {/* <!-- Single Team Start --> */}
                            <div class="single-team">
                              <div class="team-thumb">
                                <img src={author3} alt="Author" />
                              </div>
                              <div class="team-content">
                                {/* <div class="rating">
                                  <span class="count">4.9</span>
                                  <i class="icofont-star"></i>
                                  <i>
                                    <MdOutlineStar class="icofont-star" />
                                  </i>
                                  <span class="text">(rating)</span>
                                </div> */}
                                <div>
                                  <span className="my-card-rating">
                                    <h4 className="rating-count">4.9</h4>
                                    <span className="rating mt-1">
                                      <MdOutlineStar size="20" />
                                    </span>
                                    <h4 className="rating-text">(rating)</h4>
                                  </span>
                                </div>
                                <h4 class="name">Sonya Gordon</h4>
                                <span class="designation">MBA, Instructor</span>
                              </div>
                            </div>
                            {/* <!-- Single Team End --> */}
                          </div>
                          <div class="col-md-3 col-6">
                            {/* <!-- Single Team Start --> */}
                            <div class="single-team">
                              <div class="team-thumb">
                                <img src={author4} alt="Author" />
                              </div>
                              <div class="team-content">
                                {/* <div class="rating">
                                  <span class="count">4.9</span>
                                  <i class="icofont-star"></i>
                                  <i>
                                    <MdOutlineStar class="icofont-star" />
                                  </i>
                                  <span class="text">(rating)</span>
                                </div> */}
                                <div>
                                  <span className="my-card-rating mt-1">
                                    <h4 className="rating-count">4.9</h4>
                                    <span className="rating mt-1">
                                      <MdOutlineStar size="20" />
                                    </span>
                                    <h4 className="rating-text">(rating)</h4>
                                  </span>
                                </div>
                                <h4 class="name">Archie Neal</h4>
                                <span class="designation">BBS, Instructor</span>
                              </div>
                            </div>
                            {/* <!-- Single Team End --> */}
                          </div>
                        </div>

                        <div class="row gx-10">
                          <div class="col-lg-6">
                            <div class="tab-rating-content">
                              <h3 class="tab-title">Rating:</h3>
                              <p>
                                Lorem Ipsum is simply dummy text of printing and
                                typesetting industry. Lorem Ipsum has been the i
                                dustry's standard dummy text ever since the 1500
                                unknown printer took a galley of type.
                              </p>
                              <p>
                                Lorem Ipsum is simply dummy text of printing and
                                typesetting industry text ever since
                              </p>
                              <p>
                                Lorem Ipsum is simply dummy text of printing and
                                dustry's standard dummy text ever since the 1500
                                unknown printer took a galley of type.
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="tab-rating-box">
                              <span class="count">
                                4.8
                                {/* <i class="icofont-star"></i> */}
                                <MdOutlineStar
                                  className="m-1"
                                  size="15"
                                  color="#FFBA00"
                                />
                              </span>
                              <p>Rating (86K+)</p>

                              <div class="rating-box-wrapper">
                                <div class="single-rating">
                                  {/* <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "100%;" }}
                                    ></span>
                                  </span> */}
                                  <span className="rating">
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStarHalf size="15" />
                                    <MdOutlineStarOutline size="15" />
                                  </span>
                                  <div class="rating-progress-bar">
                                    <div
                                      class="rating-line"
                                      style={{ width: "75%" }}
                                    ></div>
                                  </div>
                                </div>

                                <div class="single-rating">
                                  {/* <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "80%;" }}
                                    ></span>
                                  </span> */}
                                  <span className="rating">
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStarHalf size="15" />
                                    <MdOutlineStarOutline size="15" />
                                  </span>
                                  <div class="rating-progress-bar">
                                    <div
                                      class="rating-line"
                                      style={{ width: "90%" }}
                                    ></div>
                                  </div>
                                </div>

                                <div class="single-rating">
                                  {/* <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "60%;" }}
                                    ></span>
                                  </span> */}
                                  <span className="rating">
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStarHalf size="15" />
                                    <MdOutlineStarOutline size="15" />
                                  </span>
                                  <div class="rating-progress-bar">
                                    <div
                                      class="rating-line"
                                      style={{ width: "500%" }}
                                    ></div>
                                  </div>
                                </div>

                                <div class="single-rating">
                                  {/* <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "40%;" }}
                                    ></span>
                                  </span> */}
                                  <span className="rating">
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStarHalf size="15" />
                                    <MdOutlineStarOutline size="15" />
                                  </span>
                                  <div class="rating-progress-bar">
                                    <div
                                      class="rating-line"
                                      style={{ width: "80%" }}
                                    ></div>
                                  </div>
                                </div>

                                <div class="single-rating">
                                  {/* <span class="rating-star">
                                    <span
                                      class="rating-bar"
                                      style={{ width: "20%;" }}
                                    ></span>
                                  </span> */}
                                  <span className="rating">
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStar size="15" />
                                    <MdOutlineStarHalf size="15" />
                                    <MdOutlineStarOutline size="15" />
                                  </span>
                                  <div class="rating-progress-bar">
                                    <div
                                      class="rating-line"
                                      style={{ width: "10%" }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Tab Instructors End --> */}
                    </div>
                    <div class="tab-pane fade" id="reviews">
                      {/* <!-- Tab Reviews Start --> */}
                      <div class="tab-reviews">
                        <h3 class="tab-title">Student Reviews:</h3>

                        {/* <div class="reviews-wrapper reviews-active"> */}
                        {/* <div class="swiper-container"> */}
                        {/* <div class="swiper-wrapper"> */}

                        {/* <div class="single-review swiper-slide">
                                <div class="review-author">
                                  <div class="author-thumb">
                                    <img src={author6} alt="Author" />
                                    <i class="icofont-quote-left"></i>
                                  </div>
                                  <div class="author-content">
                                    <h4 class="name">Sara Alexander</h4>
                                    <span class="designation">
                                      Product Designer, USA
                                    </span>
                                    <span class="rating-star">
                                      <span
                                        class="rating-bar"
                                        style={{ width: "100%;" }}
                                      ></span>
                                    </span>
                                    
                                  </div>
                                </div>
                                <p>
                                  Lorem Ipsum has been the industry's standard
                                  dummy text since the 1500 when unknown printer
                                  took a galley of type and scrambled to make
                                  type specimen book has survived not five
                                  centuries but also the leap into electronic
                                  type and book.
                                </p>
                              </div> */}

                        {/* <div class="single-review swiper-slide">
                                <div class="review-author">
                                  <div class="author-thumb">
                                    <img src={author7} alt="Author" />
                                    <i class="icofont-quote-left"></i>
                                  </div>
                                  <div class="author-content">
                                    <h4 class="name">Karol Bachman</h4>
                                    <span class="designation">
                                      Product Designer, USA
                                    </span>
                                    <span class="rating-star">
                                      <span
                                        class="rating-bar"
                                        style={{ width: "100%;" }}
                                      ></span>
                                    </span>
                                  </div>
                                </div>
                                <p>
                                  Lorem Ipsum has been the industry's standard
                                  dummy text since the 1500 when unknown printer
                                  took a galley of type and scrambled to make
                                  type specimen book has survived not five
                                  centuries but also the leap into electronic
                                  type and book.
                                </p>
                              </div> */}

                        {/* <div class="single-review swiper-slide">
                                <div class="review-author">
                                  <div class="author-thumb">
                                    <img src={author3} alt="Author" />
                                    <i class="icofont-quote-left"></i>
                                  </div>
                                  <div class="author-content">
                                    <h4 class="name">Gertude Culbertson</h4>
                                    <span class="designation">
                                      Product Designer, USA
                                    </span>
                                    <span class="rating-star">
                                      <span
                                        class="rating-bar"
                                        style={{ width: "100%;" }}
                                      ></span>
                                    </span>
                                  </div>
                                </div>
                                <p>
                                  Lorem Ipsum has been the industry's standard
                                  dummy text since the 1500 when unknown printer
                                  took a galley of type and scrambled to make
                                  type specimen book has survived not five
                                  centuries but also the leap into electronic
                                  type and book.
                                </p>
                              </div> */}

                        {/* </div> */}

                        {/* <div class="swiper-pagination"></div>
                          </div> */}
                        {/* </div> */}

                        <div className="container">
                          <Review />
                        </div>

                        <div class="reviews-btn">
                          <button
                            type="button"
                            class="btn btn-primary btn-hover-dark review-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#reviewsModal"
                          >
                            Write A Review
                          </button>
                        </div>

                        {/* <!-- Reviews Form Modal Start --> */}
                        <div class="modal fade" id="reviewsModal">
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title">Add a Review</h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>

                              {/* <!-- Reviews Form Start --> */}
                              <div class="modal-body reviews-form">
                                <form action="#">
                                  <div class="row">
                                    <div class="col-md-6">
                                      {/* <!-- Single Form Start --> */}
                                      <div class="single-form">
                                        <input
                                          type="text"
                                          placeholder="Enter your name"
                                        />
                                      </div>
                                      {/* <!-- Single Form End --> */}
                                    </div>
                                    <div class="col-md-6">
                                      {/* <!-- Single Form Start --> */}
                                      <div class="single-form">
                                        <input
                                          type="text"
                                          placeholder="Enter your Email"
                                        />
                                      </div>
                                      {/* <!-- Single Form End --> */}
                                    </div>
                                    <div class="col-md-12">
                                      {/* <!-- Single Form Start --> */}
                                      <div class="reviews-rating">
                                        <label>Rating</label>
                                        <ul id="rating" class="rating">
                                          <li
                                            class="star"
                                            title="Poor"
                                            data-value="1"
                                            onClick={onStarClick}
                                          >
                                            {/* <i class="icofont-star"></i> */}
                                            <MdOutlineStar size="15" />
                                          </li>
                                          <li
                                            class="star"
                                            title="Poor"
                                            data-value="2"
                                            onClick={onStarClick}
                                          >
                                            {/* <i class="icofont-star"></i> */}
                                            <MdOutlineStar size="15" />
                                          </li>
                                          <li
                                            class="star"
                                            title="Poor"
                                            data-value="3"
                                            onClick={onStarClick}
                                          >
                                            {/* <i class="icofont-star"></i> */}
                                            <MdOutlineStar size="15" />
                                          </li>
                                          <li
                                            class="star"
                                            title="Poor"
                                            data-value="4"
                                            onClick={onStarClick}
                                          >
                                            {/* <i class="icofont-star"></i> */}
                                            <MdOutlineStar size="15" />
                                          </li>
                                          <li
                                            // class="star"
                                            title="Poor"
                                            data-value="5"
                                            value="5"
                                            id="star5li"
                                            onClick={onStarClick}
                                            // onClick={onStarClick}
                                          >
                                            {/* <i class="icofont-star"></i> */}
                                            <MdOutlineStar
                                              size="15"
                                              id="star5*"
                                            />
                                          </li>
                                        </ul>
                                        {/* <span className="rating">
                                          <MdOutlineStar size="15" />
                                          <MdOutlineStar size="15" />
                                          <MdOutlineStar size="15" />
                                          <MdOutlineStarHalf size="15" />
                                          <MdOutlineStarOutline size="15" />
                                        </span> */}
                                      </div>
                                      {/* <!-- Single Form End --> */}
                                    </div>
                                    <div class="col-md-12">
                                      {/* <!-- Single Form Start --> */}
                                      <div class="single-form">
                                        <textarea placeholder="Write your comments here"></textarea>
                                      </div>
                                      {/* <!-- Single Form End --> */}
                                    </div>
                                    <div class="col-md-12">
                                      {/* <!-- Single Form Start --> */}
                                      <div class="single-form">
                                        <button class="btn btn-primary btn-hover-dark">
                                          Submit Review
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
                        {/* <!-- Reviews Form Modal End --> */}
                      </div>
                      {/* <!-- Tab Reviews End --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- Details Tab Content End --> */}
              </div>
              {/* <!-- Courses Details Tab End --> */}
            </div>
            {/* <!-- Courses Details End --> */}
          </div>
          <div class="col-lg-4">
            {/* <!-- Courses Details Sidebar Start --> */}
            <div class="sidebar">
              {/* <!-- Sidebar Widget Information Start --> */}
              <div class="sidebar-widget widget-information">
                <div class="info-price">
                  <span class="price">$420.38</span>
                </div>
                <div class="info-list">
                  <ul>
                    <li>
                      {/* <i class="icofont-man-in-glasses"></i>{" "} */}
                      <i>
                        <FcBusinessman className="icofont-man-in-glasses" />
                      </i>
                      <strong>Instructor</strong> <span>Pamela Foster</span>
                    </li>
                    <li>
                      {/* <i class="icofont-clock-time"></i>{" "} */}
                      <i>
                        <AiOutlineClockCircle class="icofont-clock-time" />
                      </i>
                      <strong>Duration</strong> <span>08 hr 15 mins</span>
                    </li>
                    <li>
                      {/* <i class="icofont-ui-video-play"></i>{" "} */}
                      <i>
                        {" "}
                        <ImFilm class="icofont-ui-video-play" />
                      </i>
                      <strong>Lectures</strong> <span>29</span>
                    </li>
                    <li>
                      {/* <i class="icofont-bars"></i> */}
                      <i>
                        <BsBarChartLine class="icofont-bars" />
                      </i>
                      <strong>Level</strong> <span>Secondary</span>
                    </li>
                    <li>
                      {/* <i class="icofont-book-alt"></i>  */}
                      <i>
                        <FaBook class="icofont-book-alt" />
                      </i>
                      <strong>Language</strong>
                      <span>English</span>
                    </li>
                    <li>
                      {/* <i class="icofont-certificate-alt-1"></i> */}
                      <i>
                        <TbCertificate class="icofont-certificate-alt-1" />
                      </i>
                      <strong>Certificate</strong> <span>Yes</span>
                    </li>
                  </ul>
                </div>
                <div class="info-btn">
                  <a href="#" class="btn btn-primary btn-hover-dark enroll-btn">
                    Enroll Now
                  </a>
                </div>
              </div>
              {/* <!-- Sidebar Widget Information End --> */}

              {/* <!-- Sidebar Widget Share Start --> */}
              <div class="sidebar-widget">
                <h4 class="widget-title">Share Course:</h4>

                <ul class="social">
                  <li>
                    <a href="#">
                      {/* <i class="flaticon-facebook"></i> */}
                      <i>
                        <FiFacebook class="flaticon-facebook" />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {/* <i class="flaticon-linkedin"></i> */}
                      <i>
                        <RiLinkedinBoxLine class="flaticon-linkedin" />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {/* <i class="flaticon-twitter"></i> */}
                      <i>
                        <RiTwitterLine class="flaticon-twitter" />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {/* <i class="flaticon-skype"></i> */}
                      <i>
                        <RiSkypeLine class="flaticon-skype" />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {/* <i class="flaticon-instagram"></i> */}
                      <i>
                        <RiInstagramLine class="flaticon-instagram" />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- Sidebar Widget Share End --> */}
            </div>
            {/* <!-- Courses Details Sidebar End --> */}
          </div>
        </div>
      </div>
      {/* <!-- Courses End --> */}
    </div>
  );
};

export default CourseInfo;
