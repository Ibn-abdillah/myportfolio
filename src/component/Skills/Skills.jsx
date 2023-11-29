import React from 'react'

import { FaReact, FaCss3, FaHtml5, FaGithub, FaTrello, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiJira , SiAstro, SiNetlify, SiTailwindcss, SiRedux, SiReactrouter } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { TbBrandNextjs } from 'react-icons/tb'
import { Line } from 'rc-progress'

import './Skills.css'


function Skills() {
  return (
    <div className='skill'>
      <h2>My Skills</h2>

      <div className="stacks">

        <div>
          <FaReact className='icon' />
         <h4>React js</h4>

         <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>95%</b></p>
        </div>

        <div>
         <SiAstro className='icon' />
         <h4>Astro</h4>

         <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>94%</b></p>
        </div>

        <div>
         <SiReactrouter className='icon' />
         <h4>React Router</h4>
         
         <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>99%</b></p>
        </div>

        <div>
         <SiRedux className='icon' />
         <h4>Redux Toolkit</h4>
         <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>90%</b></p>
        </div>

        <div>
         <FaHtml5 className='icon' />
         <h4>HTML5</h4>
         <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>99%</b></p>
        </div>

        <div>
         <SiTailwindcss className='icon' />
         <h4>Tailwind CSS</h4>
         <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>96%</b></p>
        </div>

        <div>
         <FaCss3 className='icon' />
         <h4>CSS3</h4>
         <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>95%</b></p>
        </div>

        <div>
         <SiTypescript className='icon' />
         <h4>TypeScript</h4>
         <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>95%</b></p>
        </div>

        <div>
         <TbBrandNextjs className='icon' />
         <h4>Next Js</h4>
         <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>91%</b></p>
        </div>

        <div>
         <IoLogoJavascript className='icon' />
         <h4>JavaScript</h4>
         <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>96%</b></p>
        </div>

        <div>
         <FaGithub className='icon' />
         <h4>Github</h4>
         <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>97%</b></p>
        </div>

        <div>
         <FaGitAlt className='icon' />
         <h4>Git</h4>
         <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>94%</b></p>
        </div>

        <div>
         <SiJira className='icon' />
         <h4>Jira</h4>
         <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>93%</b></p>
        </div>

        <div>
         <FaTrello className='icon' />
         <h4>Trello</h4>
         <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>94%</b></p>
        </div>

        <div>
         <SiNetlify className='icon' />
          <h4>Netlify</h4>
          <Line 
          percent={95}
          className='lines' 
          strokeWidth={4} 
          trailColor='#000'
          trailWidth={4}
          strokeColor="khaki"
          strokeLinecap='round'
           />

         <p><i>Expertise</i> <b>98%</b></p>
        </div>
      </div>
    </div>
  )
}

export default Skills