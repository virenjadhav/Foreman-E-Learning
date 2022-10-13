import React from "react";
import SubjectCard from "./SubjectCard";
import SubjectList from "./SubjectList";

const SubjectContainer = ({ subjects }) => {
  //   const renderSubject = subjects.map((subject) => {
  //     return <SubjectList subject={subject} />;
  //   });

  const renderSubject = Object.keys(subjects).map((key, i) => {
    // if (i == 4 && i == 5) {
    return (
      // <div class="row">
      //   <div class="col-4">
      //   <div class="row">
      <SubjectList key={key} subject={subjects[i]} />
      //   </div>
      // </div>
    );
    // }
  });

  //   const renderSubject = "";

  //   console.log("jeee");
  //   console.log(subjects[0]);
  //   const rede = subjects.map((subject) => console.log(subject)); //

  return <div className="container">{renderSubject}</div>;
};

export default SubjectContainer;
