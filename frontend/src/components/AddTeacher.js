import React from 'react'
import GenralSection from './GenralSection';
import TeacherForm from './TeacherForm';

const AddTeacher = (props) => {
  return (
    <div>
        <GenralSection pageTitle="Add Teacher" />
        <div className="container">
        <TeacherForm handleLogin={props.handleLogin} />
        </div>
    </div>
  )
}

export default AddTeacher