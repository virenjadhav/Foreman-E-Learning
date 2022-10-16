import React from 'react'

const ShowCourses = () => {
  return (
    <div>
        <CategoryScroll categerios={categerios} setCategory={setCategory} setSubject={setSubject}/>
        {/* {console.log("'jljklj")}
        {console.log(selectCategory)} */}
        {/* {categerios?categerios.map((cat) => (
     <CourseContainer key={cat.id} categeory={cat.name} /> 
  )):<div></div>} */}
  
        {/* <CourseContainer categeory={selectCategory} /> */}
        {/* {subject ? <div><SubjectContainer subjects={subject}  /> hjhjkk</div> : 'njknkjn' } */}
        {/* <button onClick={onccc} > click</button> */}
        <SubjectContainer categeory={subject}  />
    </div>
  )
}

export default ShowCourses