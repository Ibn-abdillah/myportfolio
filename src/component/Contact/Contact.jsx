import React from 'react'

import './Contact.css'
import { MdLocationPin, MdMarkEmailUnread } from 'react-icons/md'
import { FaGithub, FaWhatsapp, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='contact_page'>
        <h4>Why you should hire me ?</h4>
        <h3>You should hire me because :-</h3>
        <ul>
          <li>My ability to maintain strong interpersonal relationships with several clients.</li>
          <li>My relevant skills, experience, and passion for the industry.</li>
          <li>My ability to add value to your company's growth.</li>
          <li>My positive attitude, work ethics, and long-term goals.</li>
          <li>I'm a creative and innovative thinker who enjoys exploring new ideas and finding creative solutions to complex problems.</li>
          <li>I am very flexible and adaptive to learning new things.</li>
          <li>I am confident that I would be able to make significant contributions to your company if given the opportunity.</li>
        </ul>

      <h2> Contact Info</h2>

      <div className="social-icons">
        <div className="github">
          <Link to='https://wa.me/2347082216020'> 
           <FaWhatsapp  />
          </Link>
        </div>

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
           <MdMarkEmailUnread  />
          </Link>
        </div>
       </div>

       
       <div className='location'>
        <h3><MdLocationPin /> Location</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.479326698812!2d3.8404724!3d7.6314882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ff1800248f1f%3A0xf1b55e27bef3627f!2sMoniya%20Rd%2C%20Oyo!5e0!3m2!1sen!2sng!4v1701266543800!5m2!1sen!2sng" 
         style={{color: 'blue', width:"90%", height:"70vw", border: '0', borderRadius: '5px' }} allowfullscreen="" 
         loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>

       <small className='sm'>&copy; Akinola Sheriff (Ibn-Abdillah).</small>
    </div>
  )
}

export default Contact