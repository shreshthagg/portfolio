import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './work.css';
import '../About/skills.css';
// import Image from'../../assets/portfolio-1.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.jpeg'
import manuLife from '../../assets/Manulife-Logo.wine.png'
import onGraph from '../../assets/onGraph.jpeg'
import cityOne from '../../assets/cityOneInitiative.png'


const work = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_a4lnjsb', 'template_7ubx4be', form.current, 'ZBK1cD8Rlvnj4y5rJ')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id='workPage'>
        <div id='companies'>

        </div>
        <h1 className='workPageTitle'>Work Experience </h1>
        <p className='workPageDesc'>
             My previous work experience working as a co-op/interning with various companies.
        </p>

        <div className='skillBars'>

            <div className='skillBar'>
                <img src={manuLife} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Waterloo Experience (WE) Accelerate Program</h2>
                    <span className='compName'>Manulife</span>
                    <p>&#x2022; Participated in the 'Modern Web Applications Design' stream with Manulife for the WE accelerate program.<br/>
                    &#x2022; Built a web application for a local restaurant using ReactJS, CSS and JS to increase their online presence and for better marketing.<br/>
                    &#x2022; Worked with 'Cyberworks Robotics' on a Telepresence Remote Control System Support Project to customize their AWS cloud-based fleet management system for a fleet of autonomous vehicles operating at a US airport.<br/>
                    &#x2022; Programmed Fleet Task Report Pages for the system and collected/displayed data from over 6 autonomous devices.<br/>
                    &#x2022; Linked the front-end and the back-end for the system and added functionalities to analyze the data generated and to download the report as a PDF file.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={onGraph} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Python Intern</h2>
                    <span className='compName'>OnGraph Technologies</span>
                    <p>&#x2022; Interned with the python development teach to gain relevant experience and insights into the industry.<br/>
                    &#x2022; Worked with python development libraries such as Django, Pandas, Matplotlib and Numpy.<br/>
                    &#x2022; Worked on a clone for an E-Commerce site using JS and CSS and implemented price-tracking functionality.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={cityOne} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Student Leader</h2>
                    <span className='compName'>City One Initiative</span>
                    <p>&#x2022; Worked on various projects and organized numerous workshops to help develop soft-skills in the youth.<br/>
                    &#x2022; Handled social media handles such as Facebook, Twitter and LinkedIn to facilitate better reach and worked on organic marketing.<br/>
                    &#x2022; Headed the social media team for the City Mun'21.</p>
                </div>
            </div>
         
         </div>


        <div id='contact'>
            <h1 className='workPageTitle'>Contact Me</h1>
            <span className='contactPageDesc'>Please fill out the form below to contact me. </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Name' name='from_name'/>
                <input type='email' className='email' placeholder='Email ID' name='from_email'/>
                <textarea className='msg' rows={5} placeholder='Message' name='message'/>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>

                <div className='links'>
                    <a href='https://github.com/shreshthagg'>
                <img src={github} alt="github" className='link' /> </a>
                <a href='https://www.linkedin.com/in/shreshth-aggarwal-607322213/'>
                <img src={linkedin} alt="linkedin" className='link' /></a>
                    
                    </div> 

            </form>

        </div>

    </section>
  )
}

export default work
