import React from 'react';
import CourseContainer from "./CourseContainer";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const CategeryScroll = ({categerios}) =>{


  
  return (
    <div className="categoryContainer">

       {/* //Left Button */}
<button className="prev">
 {/* <i className="fa fa-angle-left"></i>  */}
 <GrPrevious />
</button>

    <ul className="categoryUL">
          {console.log("category")}
          {console.log(categerios)}
         {categerios?categerios.map((cat) => (
    //  <CourseContainer key={cat.id} categeory={cat.name} />
    <li className="categoryList">{cat.name}</li>
  )):<li></li>}
  </ul>
 

{/* //Right Button */}
<button className="next">
 {/* <i className="fa fa-angle-right"></i>  */}
 <GrNext />
</button>
</div>
  )
}

export default CategeryScroll