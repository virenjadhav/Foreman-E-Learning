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
import Review from "./Review";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Testimonial() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="Testimonial">
      <h3 className=" card-text testimonial-title text-center">Testimonials</h3>
      <h1 className="card-text testimonial-text text-center">
        What Our Users Say About Us
      </h1>
      {/* // <div className="slideshow"> */}
      {/* <div
        className="slideshowSlider"
        // style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <div style={{ display: "inline", width: "100%", height: "100%" }}>
          {colors.map((backgroundColor, index) => (
            <div
              className="slide"
              key={index}
              style={{
                backgroundColor,
                width: "100%",
                height: "100vh",
                display: "inline",
              }}
            >
              <img src={Author01} style={{ width: "100%", height: "100%" }} />
            </div>
          ))}
        </div>
      </div>
      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> */}
      {/* // </div> */}

      <div className="testimonial-slider">
        <Review />
      </div>
    </div>
  );
}

// function SlideShow() {
//   return (
//     <div>SlideShow</div>
//   )
// }

export default Testimonial;
