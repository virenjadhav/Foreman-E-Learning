import React, { useState, useRef } from "react";
import CourseContainer from "./CourseContainer";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import "../css/Home.css";

const CategeryScroll = ({ categerios, setCategory }) => {
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling
  const scrl = useRef();
  // const [selectCategory, setCategory] = useState('');

  const slide = (shift) => {
    // console.log("scroll");
    // console.log(scrl.current);
    // console.log(scrl.current.scrollLeft);
    // console.log(scrl.current.scrollWidth);
    // console.log(Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft));
    // console.log(scrl.current.offsetWidth);

    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift); // Updates the latest scrolled postion

    //For checking if the scroll has ended
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div className="categoryContainer">
      {/* //Left Button */}
      {scrollX !== 0 && (
        <button className="prev" onClick={() => slide(-100)}>
          <GrPrevious size="12" />
        </button>
      )}

      {/* <button className="prev" onClick={() => slide(-50)}>
        {scrollX !== 0 ? <GrPrevious /> : ""}
      </button> */}

      <ul className="categoryUL" ref={scrl}>
        {categerios ? (
          categerios.map((cat) => (
            //  <CourseContainer key={cat.id} categeory={cat.name} />
            <li className="categoryList" onClick={(e) => setCategory(cat.code)}>
              {cat.name}
            </li>
          ))
        ) : (
          <li></li>
        )}
      </ul>

      {/* //Right Button */}
      {!scrolEnd && (
        <button className="next" onClick={() => slide(+100)}>
          {/* <i className="fa fa-angle-right"></i>  */}
          <GrNext size="12" />
        </button>
      )}
    </div>
  );
};

export default CategeryScroll;
