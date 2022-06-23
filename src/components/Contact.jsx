import React from 'react'
import './styles.css'
import Backgif from '../assets/mainanim.gif'
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='' style={{backgroundImage: "url("+ Backgif+")"}}>
      <div className='contact-container hero'>
        <div class="card w-96 bg-neutral text-neutral-content">
          <div class="card-body items-center text-center">
            <h2 class="countdown font-mono text-4xl">Contact Me</h2>
            <div class="card-actions justify-center">
              <br></br>
              <a href="https://github.com/StJuan1210" target="_blank" rel="noopener noreferrer"  className="btn btn-primary">GitHub &nbsp; {<GitHubIcon/>}</a>
              <a href="mailto: juan.mattackal@gmail.com" target="_blank" rel="noopener noreferrer"  className="btn btn-primary">Email &nbsp; {<MailOutlineIcon/>}</a>
              <Link to = "/resume" className='btn btn-primary'>Resume</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact