import React from 'react'
import Backgif from '../assets/mainanim.gif'
import profileImg from '../assets/DSC_0005.jpg'

function About() {
  return (
    <div  style={{backgroundImage: "url("+ Backgif+")"}}>
      <div className='about-container hero'>
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div className='item-center text-center'>
            <p className='stat-value'>About Me</p>
            <br></br>
            <p class="text-xl">I am Juan George Thomas from New Delhi, India. I am currently completeing my B.Tech in Electronnics and Communication from Delhi Technological University.</p>
            <p className='text-xl'></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About