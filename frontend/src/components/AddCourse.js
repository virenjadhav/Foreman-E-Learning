import React, {useState,useEffect, useContext} from 'react'
import axios from 'axios';
import "../css/AddCourse.css";
import {NavLink} from "react-router-dom";
import {UserContext} from '../contexts/UserContext'
import Message from './Message';

export default function AddCourse() {
    const {user} = useContext(UserContext);
    
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [curriculam, setCurriculam] = useState('')
const [certification, setCertification] = useState('')
const [videoLink, setVideoLink] = useState('')
// const [videoThumbnail, setVideoThumbnail] = useState('')
const [categoryType, setCategoryType] = useState('')
const [subjectType, setSubjectType] = useState('')
const [ categorios, setCategerios] = useState([])
const [subjects, setSubjects] = useState([])
const [message, setMessage] = useState('')
const [ courseImage, setCourseImage] = useState(null);
const [ notes, setNotes] = useState(null);
// const [uploadCourse, setuploadCourse] = useState(null);

useEffect(() => {
    const getCategerious = async () => {
      const categeriousResponse = await axios.get(
        "http://localhost:5000/get_categerious"
      );

      // console.log("categeriousResponse")
      // console.log(categeriousResponse.data.category);
      setCategerios(categeriousResponse.data.category);
    //   setCategory(categeriousResponse.data.category[0]);
    //   setSubjects(categeriousResponse.data.category[0]);
    //   console.log(categeriousResponse.data.category[0]);
      setCategoryType(categeriousResponse.data.category[0].code)
    getSubject(categeriousResponse.data.category[0].code);
    };
    getCategerious();
},[]);

const onCourseImageChange = event => { 
  // this.setState({ featured_image: event.target.files[0] });
  setCourseImage(event.target.files[0]);
};

const onNotesChange = event => { 
  // this.setState({ featured_image: event.target.files[0] });
  setNotes(event.target.files[0]);
};

    const onSubmitClick = (e) =>{
        e.preventDefault();
//         const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
let category = {}
let subject = {}
categorios.forEach((cat) =>{
    if(cat.code == categoryType){
        category = cat;
    }
})
subjects.forEach((sub) =>{
    if(sub.subject_code == subjectType){
        subject = sub;
    }
})
// console.log("user")
        // console.log(user);

// console.log("user")
// console.log(category);
// console.log(subject);

// console.log(categoryType);
// console.log(subjectType);

if(user.length <= 0){
    setMessage("Log in First");
    return;
}

// if(uploadCourse == null || uploadCourse == '' || uploadCourse==[] || uploadCourse=={} || uploadCourse.length < 0){
//   return;
// }

if(title == '' || videoLink == '' || categoryType == '' || subjectType == '' || courseImage == null || notes == null){
  setMessage("Mandatory field (*) cannot be blank");
  return;
}

// console.log(courseImage);
// console.log(notes);

        const course = {
            user_full_name: user.username,
            user_id : user.id,
            category: category.code,
            course_title: title,
            categerios_code: category.code,
            categerios_id: category.id,
            subject_code: subject.subject_code,
            subject_id: subject.id,
            video_link: videoLink,
            Certification: certification,
            Curriculum: curriculam,
            description: description,
            // video_thumbnail: videoThumbnail,
            // id : course.id
        }
        const createCourse = async () => {
            const response = await axios.post(
              "http://localhost:5000/create_course",{course}
            ).then(response => {
            // console.log("then")
              // console.log(response.data.course)
              
            setMessage(response.data.message);
            // setuploadCourse(response.data.course);
            
          uploadCourseImage(response.data.subject_id);
          // uploadNotes(response.data.subject_id);


            });
            // console.log(response)
            setTitle('');
setDescription('');
setCurriculam('');
setCertification('');
setVideoLink('');
// setVideoThumbnail('');
setCategoryType('CS');
getSubject('CS');

            // setCategerios(categeriousResponse.data.category);
            // console.log(categeriousResponse.data.category[0]);
        //   getSubject(categeriousResponse.data.category[0].code);
          };
          createCourse();

          const uploadCourseImage= async (contentId) => {
            if(courseImage == null || courseImage == ''){
              return;
          }
          // if(uploadCourse == null || uploadCourse == '' || uploadCourse==[] || uploadCourse=={} || uploadCourse.length < 0){
          //     return;
          // }
          const formData = new FormData();
          // formData.append('title', title);
          // formData.append('body', body);
          formData.append('content_id', contentId);

      formData.append('content_type', 'course');
          formData.append('featured_image', courseImage);
        //   for (var key of formData.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }
          // console.log("featured_image");
          // // console.log(formData);
          // console.log(courseImage)
          fetch('http://localhost:5000/set_image', {
            method: 'POST',
            body: formData
          }).then(response => response.json())
          // .then(response => console.log(response))
          .then(data => {
            console.log(data);
            // setImagePath(data.post.featured_image_url)
            // setMessage(data.message);
          })
          .catch(error=>console.log(error));
          // const post = async () => {
          //   const response = await axios.post('http://localhost:5000/set_image',{formData});
          //   console.log(response);
          //   // setImagePath
          // }
          // post();
          // setFeaturedImage(null);
          }

          const uploadNotes= async (contentId) => {
            // console.log(uploadCourse)
            // console.log(notes)
            if(notes == null || notes == ''){
              return;
          }
          // if(uploadCourse == null || uploadCourse == '' || uploadCourse==[] || uploadCourse=={} || uploadCourse.length < 0){
          //     return;
          // }
          const formData = new FormData();
          formData.append('content_id', 1);

      formData.append('content_type', 'notes');
          formData.append('featured_image', notes);
          fetch('http://localhost:5000/set_image', {
            method: 'POST',
            body: formData
          }).then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error=>console.log(error));
          }
          

        // console.log(user);
    }
    const onCategoryClick =(e) =>{
        setCategoryType(e.target.value);
        // console.log(e.target.value);
        // console.log(e);
       
       
        getSubject(e.target.value);
    }
    const getSubject = async (categoryType) => {
        // const response = await axios.get("http://localhost:5000/get_subject", subject);
        // console.log("response", response);console.log(subject);
        const categeory ={ code : categoryType};
        const response = await axios.post("http://localhost:5000/get_subject", {categeory});
        // console.log(response.data.subjects[0].subject_code);
        setSubjectType(response.data.subjects[0].subject_code);
        setSubjects(response.data.subjects);
    }
        
    //     let course = {
    //         title : title,
    //         description : description,
    //         curriculam : curriculam,
    //         certification : certification,
    //         videoLink : videoLink,
    //         videoThumbnail : videoThumbnail
    //     }

    //     const courseFunction = async () => {
    //                     // const response = await axios.post('http://localhost:5000/add_course', {course})
    //                     const response = await axios.post('http://localhost:5000/add_course', {course});
    //         //    const response = await(await fetch('http://localhost:5000/logged_in')).json();
    //     console.log(course);
    // }
// const renderSubjectOption = subjects.map(subject =>{
//     return <option value={subject.subject_code}>{subject.subject_name}</option>
// })

  return (
    <div className='container'>
        <Message message={message} />
        <h1>Add New Course</h1>
        <form onSubmit={e => e.preventDefault()}>
            <div class="mb-3">
                {/* <label for="exampleInputEmail1" class="form-label">Enter Course Title</label> */}
                <input type="text" name='title' onChange={e=>setTitle(e.target.value)} value={title} class="form-control border" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Course Title (*)' />
            </div>
            <div class="mb-3">
                <input type="text" name='description' onChange={e=>setDescription(e.target.value)}  value={description} class="form-control border" id="exampleInputPassword1" placeholder='Enter Course Description' />
            </div>
            <div class="mb-3">
                <input type="text" name='curriculam' onChange={e=>setCurriculam(e.target.value)} value={curriculam} class="form-control border" id="exampleInputPassword2" placeholder='Enter Course Curriculam' />
            </div>
            <div class="mb-3">
                <input type="text" name='certification' onChange={e=>setCertification(e.target.value)} value={certification} class="form-control border" id="exampleInputPassword3" placeholder='Enter Course Certification' />
            </div>
            <div class="mb-3">
                <input type="text" name='video_link' onChange={e=>setVideoLink(e.target.value)} value={videoLink} class="form-control border" id="exampleInputPassword4" placeholder='Enter Course Video link' />
            </div>
            {/* <div class="mb-3">
                <input type="text" name='video_thumbnail' onChange={e=>setVideoThumbnail(e.target.value)} value={videoThumbnail} class="form-control border" id="exampleInputPassword5" placeholder='Enter Course Video Thumbnail' />
            </div> */}

            {/* <div class="mb-3">
                <label for="formFile" class="form-label">Upload course notes (*)</label>
                <input class="form-control" type="file" id="formFile1" placeholder='Upload course notes (*) ' onChange={onNotesChange}/>
            </div> */}

            <div class="mb-3">
                <label for="formFile" class="form-label">Course Video Thumbnail (*)</label>
                <input class="form-control" type="file" id="formFile1" placeholder='Upload Course Video Thumbnail (*)' onChange={onCourseImageChange}/>
            </div>
            <div>
            <label for="type">Course Category Type (*):</label>
            
<select name="type" id="type" onChange={onCategoryClick} value={categoryType} style={{margin: "0 1%", border:"1px solid #309255"}}>
  {/* <option value="">Computer Science and Information Technology</option>
  <option value="">Mechanical Engineering</option>
  <option value="">Electrical Engineering</option>
  <option value="">Electronics and Communication Engineering</option>
  <option value="">Civil Engineering</option> */}
  {categorios.map((category)=>(
    <option value={category.code}>{category.name}</option>
  ))}
</select>
{/* <ul><li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li></ul> */}
</div>
<div>
            <label for="type">Subject Type (*):</label>
            
<select name="type" id="type" onChange={e => setSubjectType(e.target.value)} value={subjectType} style={{margin: "0 1%", border:"1px solid #309255"}}>
  {/* <option value="">Student</option>
  <option value="teacher">Teachers</option> */}
  {subjects!= null ?(subjects.map((subject) =>(
    <option value={subject.subject_code}>{subject.subject_name}</option>
  ))) : ""}
  {/* {console.log("Subject")}
  {console.log(subjects)} */}
  
  {/* {renderSubjectOption} */}
  {/* {subjects.map((subject)=>(
    <option value={subject.code}>{subject.name}</option>
  ))} */}
</select>
{/* {subjects != null ? "subject ": "teacher"} */}
</div>
            <button type="submit" class="btn btn-primary mb-10 text-center justify-content-center" onClick={onSubmitClick}>Submit</button>
        </form>
    </div>
  )
}
