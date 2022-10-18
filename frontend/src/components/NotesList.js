import React from "react";

import SubjectCard from "./SubjectCard";
import NotesCard from "./NotesCard";

const NotesList = ({ subjects }) => {
  //   const renderSubject = subject.map((type) => {
  //     return (
  //       <div class="col-sm-4">
  //         <SubjectCard subject={type} />{" "}
  //       </div>
  //     );
  //   });

  //   return <div className="container">{renderSubject}</div>;
  return (
    <div className="row">
      {subjects.map((type) => (
        <div class="col-sm-4 mb-2">
          <NotesCard subject={type} />{" "}
        </div>
      ))}
      {/* {console.log(subjects)} */}
      {/* // {post.map ( pos =>{
        //           return <div key={pos.id}>
        //             <h1>{pos.title}</h1>
        //             <p>{pos.body}</p>
        //           </div>;
        //         }
        //         )}
        */}
    </div>
  );
};

export default NotesList;
