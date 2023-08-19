import React, { useState } from 'react'
import'./NavBar.css'
import logo from '../../assets/logonobg.jpg'
import contactimg from '../../assets/contact.png'
import {Link} from 'react-scroll'
import menu from '../../assets/bmenu.png'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='NavBar'>
        <img src={logo} alt="logo" className='logo'/>
        <div
            className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home </Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-25} duration={500} className="desktopMenuListItem">About </Link>
            <Link activeClass='active' to='project' spy={true} smooth={true} offset={-25} duration={500} className="desktopMenuListItem">Projects </Link>
            <Link activeClass='active' to='workPage' spy={true} smooth={true} offset={-25} duration={500} className="desktopMenuListItem">Work Experience</Link>
            
            </div>
        
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth', offset: -1000});
        }}>

            <img src={contactimg} alt="" className='desktopMenuImg' />Contact Me </button>
            


            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className= "navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home </Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-25} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About </Link>
            <Link activeClass='active' to='project' spy={true} smooth={true} offset={-25} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Projects </Link>
            <Link activeClass='active' to='workPage' spy={true} smooth={true} offset={-25} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Work Experience</Link>
            <Link activeClass='active' to='workPage' spy={true} smooth={true} offset={1000} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
        </div>

    </nav>
  )
}

export default NavBar
