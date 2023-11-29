import React, { useState } from 'react'
import { RiMenu3Line } from 'react-icons/ri'
import { FaTimes } from 'react-icons/fa'

import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const [menu, setMenu] = useState(false)

    const toggle = () => setMenu(!menu)
    
  return (
    <div>
        <nav>
            <Link to='/'>
             <h2>Ibnabdillah</h2>
            </Link>
            <div className={menu ? 'nav list' : 'nav list active'}>
                <Link className='link' to='/' onClick={() => setMenu(!menu)} >Home</Link>
                <Link className='link' to='/skills' onClick={() => setMenu(!menu)} >Skills</Link>
                <Link className='link' to='/projects' onClick={() => setMenu(!menu)} >Projects</Link>
            </div>

            <div className="hamburger" onClick={toggle}>
                {menu ? <FaTimes /> : <RiMenu3Line /> }
            </div>
        </nav>
    </div>
  )
}

export default Navbar