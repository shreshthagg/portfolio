import React from 'react'
import './project.css';
import Project1 from '../../assets/Restaurant.jpeg'
import Project2 from '../../assets/DAP.jpeg'
import Project3 from '../../assets/portfolio-3.png'
import Project4 from '../../assets/Top Features of Fleet Management Software.jpg'
// import Project5 from '../../assets/portfolio-5.png'
// import Project6 from '../../assets/portfolio-6.png'

const project = () => {
  return (
    <div>
      <section id='project'>
        <span className='projectTitle'> My Projects</span> <br/>
        <span className='projectDesc'>Here are some of the projects I have worked on. Click on the images to know more.</span>

        <div className='projectImgs'>

        <a href="https://github.com/shreshthagg/Restaurant">
            <img src={Project1} alt="" className='projectImg' /></a>

            <a href="https://github.com/shreshthagg/Diwali-Sales">
            <img src={Project2} alt="" className='projectImg' /></a>

            <a href="https://github.com/shreshthagg/portfolio">
            <img src={Project3} alt="" className='projectImg' /></a>

            <a href="https://github.com/shreshthagg/Fleet-Management-System">
            <img src={Project4} alt="" className='projectImg' /></a>

            {/* <a href="https://www.google.com/">
            <img src={Project5} alt="" className='projectImg' /></a>

            <a href="https://www.google.com/">
            <img src={Project6} alt="" className='projectImg' /></a> */}


        </div>
      </section>
    </div>
  )
}

export default project
