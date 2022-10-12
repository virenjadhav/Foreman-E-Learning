import React from "react";
import "../css/Home.css";

import Course01 from "../images/courses-01.jpg";
import Author01 from "../images/author-01.jpg";

import profile01 from "../images/1.png";
import profile02 from "../images/2.png";
import profile03 from "../images/3.png";
import profile04 from "../images/4.png";

function Team() {
  return (
    <div className="teamSection container">
      <h4 className="teamTitle text-center">Meet Our Team</h4>
      <h1 className="teamHeading  text-center">Our Creative Team</h1>
      <div className="teamContainer">
        <div class="card teamCard" style={{ width: "15rem" }}>
          <img
            class="card-img-top team-image"
            src={profile01}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text text-center memberName">Yashwant Yadav</p>
            <p class="card-text text-center memberRole">Executive</p>
          </div>
        </div>

        <div class="card teamCard" style={{ width: "15rem" }}>
          <img
            class="card-img-top team-image"
            src={profile02}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text text-center memberName">Yashwant Yadav</p>
            <p class="card-text text-center memberRole">Executive</p>
          </div>
        </div>

        <div class="card teamCard" style={{ width: "15rem" }}>
          <img
            class="card-img-top team-image"
            src={profile03}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text text-center memberName">Yashwant Yadav</p>
            <p class="card-text text-center memberRole">Executive</p>
          </div>
        </div>

        <div class="card teamCard" style={{ width: "15rem" }}>
          <img
            class="card-img-top team-image"
            src={profile04}
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text text-center memberName">Yashwant Yadav</p>
            <p class="card-text text-center memberRole">Executive</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
