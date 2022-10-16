import React from 'react'
import { useEffect, useContext, useState } from 'react';
import CourseContainer from './CourseContainer';
import {UserContext} from '../contexts/UserContext';
import axios from 'axios';
import Message from './Message'

const MyCourses = () => {
  const {user,baseUrl} = useContext(UserContext);
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState('')

useEffect(() => {
const get_my_courses = async () =>{
const response = await axios.post(`${baseUrl}/get_my_courses`, {user});
console.log(response);
if(response.data.result=='error'){
  setMessage(response.data.message);
}
setCourses(response.data.courses);
}
get_my_courses();
},[]);


    const subject ={subject_name: 'My Course'} 
  return (
    <div className="container">
      <Message message={message} />
        <CourseContainer subject={subject} courses={courses} />
    </div>
  )
}

export default MyCourses