import React,{useState, useEffect} from 'react'
import axios from "axios";
import CourseContainer from "./CourseContainer";
import SubjectContainer from "./SubjectContainer";
import CategoryScroll from "./CategoryScroll";
import GenralSection from "./GenralSection";
import NotesContainer from "./NotesContainer";

const NotesPage = () => {
    
    const [categerios, setCategerios] = useState([]);
  const [selectCategory, setCategory] = useState([]);
  const [subject, setSubject] = useState([{code: "CS",
    id:8,
    name: "Computer Science and Information Technology",
    ranked: 1}]);


    useEffect(() => {
        const getCategerious = async () => {
          const categeriousResponse = await axios.get(
            "http://localhost:5000/get_categerious"
          );
    
          // console.log("categeriousResponse")
          // console.log(categeriousResponse.data.category);
          setCategerios(categeriousResponse.data.category);
          setCategory(categeriousResponse.data.category[0]);
          setSubject(categeriousResponse.data.category[0]);
          // console.log(categeriousResponse.data.category[0]);
        };
        getCategerious();
    },[]);


  return (
    <div className="container">
        {/* <UploadFile /> */}
        {/* {console.log("hello")} */}
        <GenralSection pageTitle="Notes" />
        <CategoryScroll categerios={categerios} setCategory={setCategory} setSubject={setSubject}/>
        {/* {console.log("'jljklj")}
        {console.log(selectCategory)} */}
        {/* {categerios?categerios.map((cat) => (
     <CourseContainer key={cat.id} categeory={cat.name} /> 
  )):<div></div>} */}
  
        {/* <CourseContainer categeory={selectCategory} /> */}
        {/* {subject ? <div><SubjectContainer subjects={subject}  /> hjhjkk</div> : 'njknkjn' } */}
        {/* <button onClick={onccc} > click</button> */}
        {/* <SubjectContainer categeory={subject}  /> */}
        <NotesContainer categeory={subject} />
        </div>
  )
}

export default NotesPage