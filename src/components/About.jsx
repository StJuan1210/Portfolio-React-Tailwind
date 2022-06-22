import React from 'react'
import Backgif from '../assets/mainanim.gif'
import profileImg from '../assets/DSC_0005.jpg'

function About() {
  return (
    <div  style={{backgroundImage: "url("+ Backgif+")"}}>
      <div className='error-container hero min-h-screen'>
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure><img className='proimg' src={profileImg} alt="Album"/></figure>
          <div class="card-body">
            <h2 class="card-title">HI</h2>
            <p>I am an Electronics and Communication engineer at Delhi Technological University (2023 batch)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About