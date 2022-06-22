import React from 'react'
import Backgif from '../assets/mainanim.gif'

function Skills() {
  return (
    <div style={{backgroundImage: "url("+ Backgif+")"}}>
      <div className='error-container '>
        <div class="flex flex-col w-full lg:flex-row mt-2">
          <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">  
            <p className='stat-value'>Skills</p>  
          </div> 
        </div>
      <div class="flex flex-col w-full lg:flex-row mt-10">
          <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-opacity-10">
            <img className='skillimg' src='https://cdn-icons-png.flaticon.com/512/1126/1126012.png' alt='React'/> 
            <p>ReactJS</p>  
          </div> 
        
          <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-opacity-10">
            <img className='skillimg' src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png' alt='html'/> 
            <p>HTML 5</p>
          </div>
    
          <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-opacity-10">
            <img className='skillimg' src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt='css'/> 
            <p>CSS 3</p>
          </div>
      
          <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-opacity-10">
            <img className='skillimg' src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' alt='js'/> 
            <p>Javascript</p>
          </div>
    
          <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-opacity-10">
            <img className='skillimg' src='https://cdn-icons-png.flaticon.com/512/919/919825.png' alt='nodejs'/> 
            <p>NodeJS</p>
          </div>
        </div>

        <div class="flex flex-col w-full lg:flex-row mt-10">
          <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-opacity-10">
            <img className='skillimg' src='https://cdn-icons-png.flaticon.com/512/1387/1387537.png' alt='python'/> 
            <p>Python</p>  
          </div> 
        
          <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-opacity-10">
            <img className='skillimg' src='https://img.icons8.com/color/480/tensorflow.png' alt='tf'/> 
            <p>Tensorflow</p>
          </div>
    
          <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-opacity-10">
            <img className='skillimg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/OpenCV_Logo_with_text_svg_version.svg/1200px-OpenCV_Logo_with_text_svg_version.svg.png' alt='cv2'/> 
            <p>OpenCV</p>
          </div>
      
          <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-opacity-10">
            <img className='skillimg' src='https://codebykelvin.com/learning/python/data-science/numpy-series/cover-numpy.png' alt='np'/> 
            <p>Numpy</p>
          </div>
        </div>

        <div class="flex flex-col w-full lg:flex-row mt-10">
          <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-opacity-10">
            <img className='skillimg' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/arduino_logo_icon_170518.png' alt='python'/> 
            <p>Arduino</p>  
          </div> 
        
          <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-opacity-10">
            <img className='skillimg' src='https://icon-library.com/images/raspberry-pi-icon-png/raspberry-pi-icon-png-0.jpg' alt='tf'/> 
            <p>Raspberry Pi</p>
          </div>
    
          <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-opacity-10">
            <img className='skillimg' src='https://avatars.githubusercontent.com/u/9460735?s=280&v=4' alt='cv2'/> 
            <p>ESP</p>
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default Skills