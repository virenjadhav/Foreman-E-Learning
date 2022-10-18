import React,{useEffect, useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UploadFile from "./UploadFile";
import Message from "./Message"
// import { useHistory } from "react-router-dom";
// const history = useHistory();
const NotesCard = ({ subject }) => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState('');
  const [featured_image, setFeaturedImage] = useState(null);
  const [ message, setMessage] = useState('');
  const[image_path, setImagePath] = useState('');


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
  },[subject, notes])
  const onNotesClick = () => {
    // props.history.push({
    //   pathname: "/course",
    //   state: subject, // your data array of objects
    // });
    
    // console.log(subject.course)
    
  };
  const onImageChange = event => { 
    // this.setState({ featured_image: event.target.files[0] });
    setFeaturedImage(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('api errors:')
    console.log(featured_image)
    // if (contentId == '' || contentId == null || contentType==null || contentType == ''){
    //   // setMessage()
    //   return;
    // }
    if(featured_image == null || featured_image == ''){
        return;
    }
    const formData = new FormData();
    // formData.append('title', title);
    // formData.append('body', body);
    formData.append('content_id', subject.id);
formData.append('content_type',  'notes');
    formData.append('featured_image', featured_image);
  //   for (var key of formData.entries()) {
  //     console.log(key[0] + ', ' + key[1]);
  // }
    console.log("featured_image");
    // console.log(formData);
    console.log(featured_image)
    fetch('http://localhost:5000/set_image', {
      method: 'POST',
      body: formData
    }).then(response => response.json())
    // .then(response => console.log(response))
    .then(data => {
      console.log(data);
      setImagePath(data.post.featured_image_url)
      setNotes('')
      setMessage(data.message);
    })
    .catch(error=>console.log(error));
    // const post = async () => {
    //   const response = await axios.post('http://localhost:5000/set_image',{formData});
    //   console.log(response);
    //   // setImagePath
    // }
    // post();
    setFeaturedImage(null);
  };
  


  return (
    <div>
        {/* <Message message={message} /> */}
    <div class="card" style={{ width: "20rem" }}>
      {/* <div class="card-body justify-content-center"> */}
        {/* <h5 class="card-title" style={{ height: "50px" }}> */}
          {/* {video.snippet.title.length > 50
  //           ? video.snippet.title.slice(0, 50) + "..."
  //           : video.snippet.title} */}
          {/* {subject.subject_name.length > 50 ? subject.subject_name.slice(0, 50) + "..." : subject.subject_name} */}
        {/* </h5> */}
        {/* <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p> */}
        {/* <button
          class="btn btn-primary"
          style={{ margin: " 0 5% " }}
          onClick={onCourseClick}
        >
          courses
        </button> */}
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
        {/* <div style={{margin: "  5% 0"}}>
        <UploadFile title="Notes"/>
        </div > */}
        <h5 className="text-center card-header"  style={{ height: "60px" }}>{subject.subject_name.length > 50 ? subject.subject_name.slice(0, 50) + "..." : subject.subject_name}</h5>
        <div class="card-body">
              
              <p class="card-text"><input type="file" 
                          // value={featured_image}
                          onChange={onImageChange} 
                          style={{border: "none", marginTop: "2%"}}
                          /></p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              {/* <button 
                          // onClick={this.onFileUpload}
                          onClick={handleSubmit}
                          className="btn btn-primary btn-hover-dark justify-content-center"
                        
                          > */}
                          {/* <button style={{textDecoration: "none", border:"none", outline: "none"}} > */}
                            <a class="btn btn-primary btn-hover-dark text-center justify-content-center"   href={notes} target="_blank"   style={{color: "white", backgroundColor: "#309255", border: "1px solid green", margin: "3% 1%"}} >View</a>
                            {/* </button> */}
                          <button class="btn btn-primary" 
                        //   onClick={onNotesClick}
                        onClick={handleSubmit}
                           style={{ margin:"0 1%"}}>Edit Notes</button>
            </div>
        {/* <div >
            <a class="btn btn-primary btn-hover-dark text-center justify-content-center" onClick={onNotesClick} href={notes} target="_blank" style={{margin: "0 30% 5% 0 !important"}}>Edit Notes</a>
            </div> */}
        {/* </button> */}
        {/* <button class="btn btn-primary" onClick={onNotesClick}>Notes</button> */}
      </div>
    </div>
  );
};

export default NotesCard;
