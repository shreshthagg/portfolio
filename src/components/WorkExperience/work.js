import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './work.css';
import '../About/skills.css';
import Image from'../../assets/portfolio-1.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.jpeg'


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
             fdjkbsuovhfidnv
        </p>

        <div className='skillBars'>

            <div className='skillBar'>
                <img src={Image} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Programming Languages</h2>
                    <p>Python, Racket, C, JavaScript, CSS, HTML, and R</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={Image} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Data analysis</h2>
                    <p>dnsns</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={Image} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>IT Management</h2>
                    <p>jsjfgxn</p>
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
