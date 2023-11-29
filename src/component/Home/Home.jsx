import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdMarkEmailUnread } from 'react-icons/md'
import my_pic from '../../assets/ibn-abdillah.jpg'
import Typewriter from 'typewriter-effect'

import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      
     <div className='home-content'>
      <div className="about-me">
        <h3><span>Hello!</span>  I'm 
        { 
        <Typewriter
          onInit={(typewriter) => {
            typewriter
            .typeString("Akinola Sheriff Lekan")
            // .pauseFor(1000)
            // .deleteAll()
            // .typeString("Frontend Developer")
            .start();
           }}
         />
        }
          </h3>

          <p><b>I am a Detail-oriented Front End Developer with more than 3 years 
          experience working with HTML5, CSS3, Javascript, React and TypeScript and many more. 
          Highly adept at both independent and collaborative projects, 
          with an emphasis on landing page, APIs integration and website development.</b></p>

      <div className="social-icons">
        <div className="github">
          <Link to='https://www.github.com/Ibn-abdillah'> 
           <FaGithub />
          </Link>
        </div>

        <div className="linkedIn">
          <Link to='https://www.linkedin.com/in/akinola-sheriff-a3b513259'>
           <FaLinkedin />
          </Link>
        </div>

        <div className="x">
          <Link to='https://www.twitter.com/akinolasheriff7'>
           <FaTwitter />
          </Link>
        </div>

        <div className="email">
          <Link to='https://akinolasheriff2022@gmail.com'>
           <MdMarkEmailUnread />
          </Link>
        </div>

       </div>
      </div>

      <div className="my-pic">
        <img src={my_pic} alt="" />
      </div>
      
     </div>

     
    </div>
  )
}

export default Home