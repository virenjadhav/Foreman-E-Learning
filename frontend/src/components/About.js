import React from 'react'
import GenralSection from './GenralSection';
import Team from './Team';
import Testimonial from './Testimonial';

export default function About() {
  return (
    <div style={{margin : '50px'}} >
      <GenralSection pageTitle="About" />
      
      <div style={{marginTop : '100px !important'}}>
      <Team />
      </div>

      <Testimonial />
      </div>
  )
}
