import React, { useEffect , useState} from "react";
import SubjectCard from "./SubjectCard";
import SubjectList from "./SubjectList";
import axios from "axios";
import NotesList from "./NotesList";

const NotesContainer = ({ categeory }) => {

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const getSubject = async () => {
        // const response = await axios.get("http://localhost:5000/get_subject", subject);
        // console.log("response", response);console.log(subject);
        const response = await axios.post("http://localhost:5000/get_subject", {categeory});
        // console.log(response.data);
        setSubjects(response.data.subjects);
    }
    getSubject();
  } ,[categeory] );
  //   const renderSubject = subjects.map((subject) => {
  //     return <SubjectList subject={subject} />;
  //   });

  // const renderSubject = Object.keys(subjects).map((key, i) => {
  //   // if (i == 4 && i == 5) {
  //     console.log(subjects[i])
  //   return (
  //     // <div class="row">
  //     //   <div class="col-4">
  //     //   <div class="row">
      
  //     <SubjectList key={key} subject={subjects[i]} />
  //     //   </div>
  //     // </div>
  //   );
  //   // }
  // });

  

  //   const renderSubject = "";

  //   console.log("jeee");
  //   console.log(subjects[0]);
  //   const rede = subjects.map((subject) => console.log(subject)); //
  // const renderSubject = ''
// if(subjects)
// {

  // const renderSubject = Object.keys(subjects).map((key, i) => {
  //   // if (i == 4 && i == 5) {
  //     // console.log(subjects[i])
  //   return (
  //     // <div class="row">
  //     //   <div class="col-4">
  //     //   <div class="row">
      
  //     <SubjectList key={key} subject={subjects[i]} />
  //     // <div> 
  //     //   </div>
  //     // </div>
  //   );
  //   // }
  // });

// }



  return <div className="container">
    <NotesList  subjects={subjects} />
    </div>;
  // return (<div>{renderSubject}</div>);
};

export default NotesContainer;
