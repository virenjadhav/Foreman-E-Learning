import React,{useEffect, useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useHistory } from "react-router-dom";
// const history = useHistory();
const SubjectCard = ({ subject }) => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState('');
  const onCourseClick = (event) => {
    const state = {
      subject: subject,
    };
    navigate("/course", { state });
  };
  useEffect(() => {
    if(subject==null || subject == undefined || subject == {} || subject == [] || subject == ''){
      return;
    }
    const getImage = async () => {
        
        
      const post = {
        content_type: 'notes',
        content_id: subject.id,
      }
      const {data} = await axios.post("http://localhost:5000/get_image",{post});
      console.log(data);
      
      console.log(data.featured_image_url);
      // navigate(data.featured_image_url)
      setNotes(data.featured_image_url)
    }
    getImage();
  },[subject])
  const onNotesClick = () => {
    // props.history.push({
    //   pathname: "/course",
    //   state: subject, // your data array of objects
    // });
    
    // console.log(subject.course)
    
  };

  return (
    <div class="card" style={{ width: "20rem" }}>
      <div class="card-body justify-content-center">
        <h5 class="card-title" style={{ height: "50px" }}>
          {/* {video.snippet.title.length > 50
  //           ? video.snippet.title.slice(0, 50) + "..."
  //           : video.snippet.title} */}
          {subject.subject_name.length > 50 ? subject.subject_name.slice(0, 50) + "..." : subject.subject_name}
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
        {/* <button > */}
            <a class="btn btn-primary" onClick={onNotesClick} href={notes} target="_blank">Notes</a>
        {/* </button> */}
        {/* <button class="btn btn-primary" onClick={onNotesClick}>Notes</button> */}
      </div>
    </div>
  );
};

export default SubjectCard;
