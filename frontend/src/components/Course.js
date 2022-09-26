import React from "react";

const Course = ({ video }) => {
  console.log(video.snippet);
  return (
    <div
      className="card m-2 text-center"
      style={{ width: "15rem", display: "inline-block" }}
    >
      {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
      <img
        alt={video.snippet.title}
        className="card-img-top  "
        src={video.snippet.thumbnails.medium.url}
        style={{
          height: "10rem",
          borderRadius: "50%",
          width: "60%",
        }}
      />
      <div className="card-body m-0">
        <h5 className="" style={{ fontSize: "15px", height: "40px", overflow: "hidden"}}>
          {video.snippet.title.length > 50
            ? video.snippet.title.slice(0, 50) + "..."
            : video.snippet.title}
          {/* recommand for you */}
        </h5>
        <p className="card-text" style={{ fontSize: "13px", height: "50px", border: ""}}>
          {video.snippet.description.length > 95
            ? video.snippet.description.slice(0, 95) + "..."
            : video.snippet.description}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default Course;
