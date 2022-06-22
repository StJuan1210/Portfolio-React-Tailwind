import React from 'react'
import Backgif from '../assets/mainanim.gif'
import './styles.css'
import Typeeff from './Typeeff'


function Home() {
  return (
    <div className='home-container'>
      <div class="hero min-h-screen" style={{backgroundImage: "url("+ Backgif+")"}}>
      <div class="hero-overlay bg-opacity-10"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-8xl font-bold">I'm Juan</h1>
            <p class="mb-5 text-3xl"><Typeeff/></p>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Home
