import React from "react";

import SubjectCard from "./SubjectCard";

const SubjectList = ({ subject }) => {
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
      {subject.map((type) => (
        <div class="col-sm-4 mb-2">
          <SubjectCard subject={type} />{" "}
        </div>
      ))}
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

export default SubjectList;
