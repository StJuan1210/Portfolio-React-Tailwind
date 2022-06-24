import React from 'react'
import './styles.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Backgif from '../assets/mainanim.gif'
import Project_data from './data/Project_data';
import parse from 'html-react-parser';

function Projects() {
    return (
        <div style={{backgroundImage: "url("+ Backgif+")"}}>
            <div className='items-center text-center mt-5 bg-opacity-10'>
                <h1 className='stat-value'>Projects</h1>
            </div>
            <div className='project-container mt-10' >
                <SimpleBar style={{  }}>
                    {Project_data.map((data,id)=>(
                        <div class="card lg:card-side bg-base-100 bg-opacity-10 shadow-xl ml-5 mt-5">
                            <figure><img className='prjimg' src={data.image} alt="Album"/></figure>
                            <div class="card-body mockup-window">
                                <h2 class="countdown font-mono text-4xl">{data.title}</h2>
                                <p className='text-xl'>
                                {parse(data.description)}
                                </p>
                                <div class="card-actions justify-end">
                                    <a href={data.link} target="_blank" rel="noopener noreferrer"  className="btn btn-primary">View on &nbsp; {<GitHubIcon/>}</a>
                                </div>
                            </div>
                        </div>
                    ))}           
                </SimpleBar>
            </div>
        </div>
      )
}

export default Projects