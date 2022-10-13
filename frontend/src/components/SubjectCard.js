import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// const history = useHistory();
const SubjectCard = ({ subject }) => {
  const navigate = useNavigate();
  const onCourseClick = (event) => {
    const state = {
      subject: subject,
    };
    navigate("/course", { state });
  };
  const onNotesClick = () => {
    // props.history.push({
    //   pathname: "/course",
    //   state: subject, // your data array of objects
    // });
  };

  return (
    <div class="card" style={{ width: "20rem" }}>
      <div class="card-body justify-content-center">
        <h5 class="card-title" style={{ height: "50px" }}>
          {/* {video.snippet.title.length > 50
  //           ? video.snippet.title.slice(0, 50) + "..."
  //           : video.snippet.title} */}
          {subject.length > 50 ? subject.slice(0, 50) + "..." : subject}
        </h5>
        {/* <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p> */}
        <button
          class="btn btn-primary"
          style={{ margin: " 0 5% " }}
          onClick={onCourseClick}
        >
          courses
        </button>
        {/* <Link
          to={{
            pathname: "/course",
            state: { id: 1, name: "sabaoon", shirt: "green" }, // your data array of objects
          }}
          class="btn btn-primary"
          style={{ margin: " 0 5% " }}
          onClick={onCourseClick}
        >
          course
        </Link> */}
        <button class="btn btn-primary" onClick={onNotesClick}>
          Notes
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;
