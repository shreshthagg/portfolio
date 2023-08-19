import React from 'react'
import './skills.css';
import WebDev from '../../assets/web development.png';
import DataAnal from '../../assets/data analysis.png';
import Itm from '../../assets/itm.png';

const skills = () => {
  return (
    <div>
      <section id='skills'>
        <span className='skillTitle'>About Me </span> <br/>
        <span className='skillDesc'>I am a passionate student ready to apply my knowledge and skills to real-world projects.
         With a solid foundation in web development, data analysis, AI, and a strong business/management accumen I am driven to make meaningful contributions to the 
         industry.<br/> 
         My academic journey has been defined by a commitment to problem-solving and relentless work-ethic, traits that I am eager to bring to any team. I have 
         successfully demonstrated these qualities in every opportunity. Moreover, I am actively persuing internships and co-op opportunities to furhter develop my skillset and gain 
         practical experience. </span>

         <div className='skillBars'>

            <div className='skillBar'>
                <img src={WebDev} alt="WebDev" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Programming Languages</h2>
                    <p>Python, Racket, C, JavaScript, CSS, HTML, SQL and R</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={Itm} alt="DataAnal" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Technologies</h2>
                    <p>MS Office, Adobe Creative Suite, Linux, ReactJs, API's, VSCode, Jupyter Notebook,
                       Command Shell, Data Structures and Algorithms, Git, Pandas, NumPy, Matplotlib, Seaborn, 
                       UI/UX design, Operating Systems, Arduino Boards, Rest API</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={DataAnal} alt="Itm" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Other Relevant Skills</h2>
                    <p>Collaborative teamwork, Problem Solving, Critical Thinking, Communication, Agile/Scrum Methodologies,
                       Data Analysis/Visualization, Debugging and Troubleshooting, IoT </p>
                </div>
            </div>
         
         </div>
         </section>
    </div>
  )
}

export default skills


