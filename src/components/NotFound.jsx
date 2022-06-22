import React from 'react'
import './styles.css'
import Backgif from '../assets/mainanim.gif'

function NotFound() {
  return (
    <div className='' style={{backgroundImage: "url("+ Backgif+")"}}>
      <div className='error-container hero min-h-screen'>
        <div class="card w-96 bg-error">
          <div class="card-body items-center text-center">
            <h2 class="countdown font-mono text-4xl">404!</h2>
            <p className='text-xl'>Wrong URL</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Home</button>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default NotFound