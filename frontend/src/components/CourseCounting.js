import React from "react";

// import $ from "jquery";

import "../css/Home.css";

function CourseCounting() {
//   $(".counter").each(function() {
//     $(this)
//       .prop("Counter", 0)
//       .animate(
//         {
//           Counter: $(this).text(),
//         },
//         {
//           duration: 2000,
//           easing: "swing",
//           step: function(now) {
//             $(this).text(Math.ceil(now));
//           },
//         }
//       );
//   });

  return (
    <div>
      <div class="counting-container">
        <div class="row">
          <div class="four col-md-3">
            <div class="counter-box colored">
              <i class="fa fa-thumbs-o-up"></i>
              <span class="counter">2147</span>
              <p>AMAZING COURSES</p>
            </div>
          </div>
          <div class="four col-md-3">
            <div class="counter-box">
              <i class="fa fa-group"></i>
              <span class="counter">3275</span>
              <p>TALENTED INSTRUCTORS</p>
            </div>
          </div>
          <div class="four col-md-3">
            <div class="counter-box">
              <i class="fa  fa-shopping-cart"></i>
              <span class="counter">289</span>
              <p>SKILLED STUDENTS</p>
            </div>
          </div>
          <div class="four col-md-3">
            <div class="counter-box">
              <i class="fa  fa-user"></i>
              <span class="counter">1563</span>
              <p>CATEGORIES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCounting;
