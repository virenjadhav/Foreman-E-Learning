import React from "react";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import "../css/course.css";

import course1 from "../images/course/1.png";
import course2 from "../images/course/2.png";
import course3 from "../images/course/3.png";
import course4 from "../images/course/4.png";
import course5 from "../images/course/5.png";
import course6 from "../images/course/6.png";
import course7 from "../images/course/7.png";
import course8 from "../images/course/8.png";

import author1 from "../images/author/1.png";
import author2 from "../images/author/2.png";
import author3 from "../images/author/3.png";
import author4 from "../images/author/4.png";
import author5 from "../images/author/5.png";
import author6 from "../images/author/6.png";
import CourseCard from "./CourseCard";

const CourseBlog = () => {
  return (
    <section className="blog-area pd-top-120 pd-bottom-120">
      <div className="container m-1">
        <div className="row">
          {/* <div className="col-lg-4 order-lg-0 col-12">
            <div className="td-sidebar mt-5 mt-lg-0">
              <div className="widget widget_search_course">
                <h4 className="widget-title">Search</h4>
                <form className="search-form single-input-inner">
                  <input type="text" placeholder="Search here" />
                  <button
                    className="btn btn-base w-100 mt-3 btn-primary"
                    type="submit"
                  >
                  
                    <BiSearch />
                    Search
                  </button>
                </form>
              </div>
              <div className="widget widget_catagory">
                <h4 className="widget-title">Catagory</h4>
                <ul className="catagory-items go-top">
                  <li>
                    <NavLink to="/blog-details">
                      Tempor lorem interdum
                      
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog-details">
                      Auctor mattis lacus
                      <i className="fa fa-caret-right"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog-details">
                      Dolor proin
                      <i className="fa fa-caret-right"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog-details">
                      Pharetra amet
                      <i className="fa fa-caret-right"></i>
                    </NavLink>
                  </li>
                  <li className="text-center">
                    
                    <AiOutlineDown />
                  </li>
                </ul>
              </div>
              <div className="widget widget_checkbox_list">
                <h4 className="widget-title">Price</h4>
                <label className="single-checkbox">
                  <input type="checkbox" defaultChecked={true} />
                  <span className="checkmark"></span>
                  Free Courses
                </label>

                <label className="single-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Paid Courses
                </label>
                <label className="single-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Only Subscription
                </label>
              </div>
              <div className="widget widget_checkbox_list">
                <h4 className="widget-title">Level</h4>
                <label className="single-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Beginner
                </label>
                <label className="single-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Intermediate
                </label>
                <label className="single-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Advanced
                </label>
              </div>
              <div className="widget widget_tags mb-0">
                <h4 className="widget-title">Tags</h4>
                <div className="tagcloud go-top">
                  <NavLink to="/blog-details">Art</NavLink>
                  <NavLink to="/blog-details">Creative</NavLink>
                  <NavLink to="/blog-details">Article</NavLink>
                  <NavLink to="/blog-details">Designer</NavLink>
                  <NavLink to="/blog-details">Portfolio</NavLink>
                  <NavLink to="/blog-details">Project</NavLink>
                  <NavLink to="/blog-details">Personal</NavLink>
                  <NavLink to="/blog-details">Landing</NavLink>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-lg-8 order-lg-12">
            <div className="row go-top">
              {/* <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src={course1} alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          <span className="u-thumb">
                            <img src={author1} alt="img" />
                          </span>
                          <span className="align-self-center">Nancy Reyes</span>
                        </div>
                        <h6>
                          <NavLink to="/course-details">
                            Fox nymphs grab quick-jived waltz. Brick quiz whangs
                          </NavLink>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <MdOutlineStar size="20" />
                              4.3
                              <span>(23)</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price:
                              <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src={course2} alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          <span className="u-thumb">
                            <img src={author2} alt="img" />
                          </span>
                          <span className="align-self-center">Joe Powell</span>
                        </div>
                        <h6>
                          <NavLink to="/course-details">
                            Aenean sed nibh a magna posuere tempo faucib
                          </NavLink>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <MdOutlineStar size="20" />
                              4.3
                              <span>(23)</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price:
                              <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src={course3} alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          <span className="u-thumb">
                            <img src={author3} alt="img" />
                          </span>
                          <span className="align-self-center">
                            Aaron Powell
                          </span>
                        </div>
                        <h6>
                          <NavLink to="/course-details">
                            Quisque suscipit ipsum est, eu venenatis leo ornare
                            eget
                          </NavLink>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <MdOutlineStar size="20" />
                              4.5
                              <span>(21)</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price:
                              <span>$34.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src={course4} alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          <span className="u-thumb">
                            <img src={author4} alt="img" />
                          </span>
                          <span className="align-self-center">Randy Hart</span>
                        </div>
                        <h6>
                          <NavLink to="/course-details">
                            Duis rhoncus dui venenatis consequat porttito
                          </NavLink>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <MdOutlineStar size="20" />
                              4.4
                              <span>(20)</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price:
                              <span>$55.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src={course5} alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          <span className="u-thumb">
                            <img src={author5} alt="img" />
                          </span>
                          <span className="align-self-center">
                            Timothy Willis
                          </span>
                        </div>
                        <h6>
                          <NavLink to="/course-details">
                            Praesent eu dolor eu orci vehicula euismod
                          </NavLink>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <MdOutlineStar size="20" />
                              4.9
                              <span>(73)</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price:
                              <span>$74.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src={course6} alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          <span className="u-thumb">
                            <img src={author6} alt="img" />
                          </span>
                          <span className="align-self-center">
                            Walter Griffin
                          </span>
                        </div>
                        <h6>
                          <NavLink to="/course-details">
                            Duis vestibulum elit vel neque pharetra vulputate
                          </NavLink>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <MdOutlineStar size="20" />
                              4.8
                              <span>(53)</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price:
                              <span>$68.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src={course7} alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          <span className="u-thumb">
                            <img src={author2} alt="img" />
                          </span>
                          <span className="align-self-center">Joe Powell</span>
                        </div>
                        <h6>
                          <NavLink to="/course-details">
                            Aenean sed nibh a magna posuere tempo faucib
                          </NavLink>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <MdOutlineStar size="20" />
                              4.3
                              <span>(23)</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price:
                              <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src={course8} alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          <span className="u-thumb">
                            <img src={author3} alt="img" />
                          </span>
                          <span className="align-self-center">
                            Timothy Willis
                          </span>
                        </div>
                        <h6>
                          <NavLink to="/course-details">
                            Praesent eu dolor eu orci vehicula euismod
                          </NavLink>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <MdOutlineStar size="20" />
                              4.9
                              <span>(73)</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price:
                              <span>$74.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

              {/* <div className="col-md-6">
                <div className="single-course-inner">
                  <CourseCard />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-course-inner">
                  <CourseCard />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-course-inner">
                  <CourseCard />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-course-inner">
                  <CourseCard />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-course-inner">
                  <CourseCard />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-course-inner">
                  <CourseCard />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-course-inner">
                  <CourseCard />
                </div>
              </div>

              <div className="col-md-6">
                <div className="single-course-inner">
                  <CourseCard />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-course-inner">
                  <CourseCard />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-course-inner">
                  <CourseCard />
                </div>
              </div> */}
            </div>
            {/* <nav className="td-page-navigation container">
              <ul className="pagination">
                <li className="pagination-arrow">
                  <a href="/course">
                    <MdOutlineArrowBackIosNew />
                  </a>
                </li>

                <li>
                  <a href="/course">1</a>
                </li>
                <li>
                  <a className="page-active" href="/course">
                    2
                  </a>
                </li>
                <li>
                  <a href="/course">3</a>
                </li>
                <li>
                  <a href="/course">...</a>
                </li>
                <li>
                  <a href="/course">10</a>
                </li>

                <li className="pagination-arrow">
                  <a href="/course">
                    <MdOutlineArrowForwardIos />
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseBlog;
