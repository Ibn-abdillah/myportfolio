import React from 'react'

import coins from '../../images/coins.png'
import crypto from '../../images/crypto.png'
import exe from '../../images/exe.png'
import estate from '../../images/estate.png'
import weather from '../../images/weather.png'
import ecommerce from '../../images/ecommerce.png'

import './Projects.css'

function Projects() {
  return (
    <div className='my_projects'>
        <h2>My Projects</h2>

    <div className="projects_container">
     <div className="project">
       <img src={crypto} alt="" />
        <h5>Trading App</h5>
         <p>with React, react-icons, fetching the featured page contents with CoinGecko api.
          </p>
         <div className="btn">
            <button>Source</button>
            <button>Demo</button>
         </div>

       </div>
     <div className="project">
        <img src={coins} alt="" />
        <h5>Coins List</h5>
         <p>with React, crypto api and custom css.
          </p>
         <div className="btn">
            <button>Source</button>
            <button>Demo</button>
         </div>
       </div>
      
     <div className="project">
       <img src={estate} alt="" />
        <h5>Real Estate Design</h5>
         <p>with React, react-icons, custom css, css grid layout.
          </p>
         <div className="btn">
            <button>Source</button>
            <button>Demo</button>
         </div>
       </div>
      
     <div className="project">
       <img src={exe} alt="" />
        <h5>React website</h5>
         <p>with React, react-icons, custom css.
          </p>
         <div className="btn">
            <button>Source</button>
            <button>Demo</button>
         </div>
       </div>
      
     <div className="project">
       <img src={weather} alt="" />
        <h5>Weather App</h5>
         <p>with React, openweathermap api, custom css.
          </p>
         <div className="btn">
            <button>Source</button>
            <button>Demo</button>
         </div>
       </div>
      
     <div className="project">
       <img src={ecommerce} alt="" />
        <h5>Ecommerce Website</h5>
         <p> An Ecommerce website that was built with HTML%, CSS3 and Javascript and it is responsive to all screen sizes.
          </p>
         <div className="btn">
            <button>Source</button>
            <button>Demo</button>
         </div>
       </div>
    </div>

    </div>
  )
}

export default Projects