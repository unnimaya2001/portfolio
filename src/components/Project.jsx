import React from 'react';
import ProjectBox from './Projectbox';
import facial from '../images/facial.jpeg';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
       
        <ProjectBox projectPhoto={facial} projectName="Stress detection in IT professionals using image processing and machine learning" />
       
      </div>

    </div>
  )
}

export default Projects