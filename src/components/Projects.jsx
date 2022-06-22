import React from 'react'
import './styles.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css'
import Backgif from '../assets/mainanim.gif'
function Projects() {
  return (
    <div>
        <div className='items-center text-center mt-5'>
            <h1 className='stat-value'>Projects</h1>
        </div>
        <div className='project-container mt-10' style={{backgroundImage: "url("+ Backgif+")"}}>
            <SimpleBarReact>
            <div class="card lg:card-side bg-base-100 bg-opacity-10 shadow-xl ml-5 mt-5">
                <figure><img className='prjimg' src="https://user-images.githubusercontent.com/86282256/129944784-871a32f5-b26b-4733-afdb-b64c0f9823df.jpg?w=400&h=400" alt="Album"/></figure>
                <div class="card-body mockup-window">
                    <h2 class="countdown font-mono text-4xl">Sim Racing Wheel</h2>
                    <p className='text-xl'>
                    • A steering wheel equipped with gyroscope and various buttons to mimic a F1 steering wheel
                    <br></br>
                    • Two Pedals as accelerator and brake
                    <br></br>
                    • Paddle shifters for changing gears and a hand clutch
                    </p>
                    <div class="card-actions justify-end">
                        <a href="https://github.com/StJuan1210/Sim-racing-wheel" target="_blank" rel="noopener noreferrer"  className="btn btn-primary">View on &nbsp; {<GitHubIcon/>}</a>
                    </div>
                </div>
            </div>

            <div class="card lg:card-side bg-base-100 bg-opacity-10 shadow-xl mt-20 ml-5">
                <figure><img className='prjimg' src="https://user-images.githubusercontent.com/86282256/171443658-88020cd0-b05e-421b-9b67-ebfb15f34a20.png?w=400&h=400" alt="Album"/></figure>
                <div class="card-body mockup-window">
                    <h2 class="countdown font-mono text-4xl">React Based Chat App</h2>
                    <p className='text-xl'>
                    • A Chat App that uses react frontend and nodejs backend
                    <br></br>
                    • SocketIO for communication
                    <br></br>
                    • QuillJS for rich text editing features
                    </p>
                    <div class="card-actions justify-end">
                        <a href="https://github.com/StJuan1210/chat-app-react" target="_blank" rel="noopener noreferrer"  className="btn btn-primary">View on &nbsp; {<GitHubIcon/>}</a>
                    </div>
                </div>
            </div>

            <div class="card lg:card-side bg-base-100 bg-opacity-10 shadow-xl mt-20 mb-20 ml-5">
                <figure><img className='prjimg' src="https://user-images.githubusercontent.com/86282256/171789005-cb6c061a-550e-4852-abb4-2486c1b47778.png?w=400&h=400" alt="Album"/></figure>
                <div class="card-body mockup-window">
                    <h2 class="countdown font-mono text-4xl">React Django Blog App</h2>
                    <p className='text-xl'>
                    • A Blog app that uses django backend and react frontend
                    <br></br>
                    • Authentication using email for users
                    <br></br>
                    • Users can edit or delete articles
                    </p>
                    <div class="card-actions justify-end">
                        <a href="https://github.com/StJuan1210/react-django-blog-app" target="_blank" rel="noopener noreferrer"  className="btn btn-primary">View on &nbsp; {<GitHubIcon/>}</a>
                    </div>
                </div>
            </div>
        </SimpleBarReact>

        </div>
    </div>
  )
}

export default Projects