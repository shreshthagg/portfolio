import React from 'react'
import './home.css';
import bg from '../../assets/bg1.png'
// import {Link} from 'react-scroll';
import resume from '../../assets/Shreshth Resume.pdf';
import resumeImg from '../../assets/resumebtn.jpg'

const intro = () => {
  return (
    <section id="intro">
      <div className='introContent'>
        <span className='hello'>Hello, </span>
        <span className='introText'>I'm <span className='introName'>Shreshth</span> <br />B.Math(Hons.) <br/> University of Waterloo'27</span>
        <p className='introPara'>I am a tech enthusiast, a critical thinker, and a problem solver. <br/> I am a hard-working and dedicated individual who strives to make an impact in the society.</p>
        <a
        href={resume}
        download="Shreshth Aggarwal Resume"
        target='_blank'
        rel='noopener noreferrer'>
        <button className='btn'><img src={resumeImg} alt="resumeImg" className='btnImg' />My Resume</button>  </a>

        </div>

        <img src={bg} alt="bg" className='bg' />

    </section>
  )
}

export default intro
