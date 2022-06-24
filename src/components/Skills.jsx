import React from 'react'
import Backgif from '../assets/mainanim.gif'
import SkillData from './data/SkillsData';

function Skills() {  
  return (
    <div style={{backgroundImage: "url("+ Backgif+")"}}>
        <div className='skills-container '>
            <div class="flex flex-col w-full lg:flex-row mt-2">
                <div class="grid flex-grow h-32 rounded-box place-items-center">  
                <p className='stat-value'>Skills</p>  
                </div> 
            </div>
            {SkillData.map((line,id)=>(
            <div class="flex flex-col w-full lg:flex-row mt-2">
                {line.map((data,id)=>(
                    <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center bg-opacity-10">
                        <img className='skillimg' src={data.image} alt={data.alt}/> 
                        <p>{data.title}</p>  
                    </div> 
                ))}
            </div>
            ))}     
      </div>
    </div>
)
}

export default Skills