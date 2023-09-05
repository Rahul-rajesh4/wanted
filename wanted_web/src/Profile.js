import React from 'react'
import './profile.css'
import Navbar from './Navbar'
export default function Profile() {
  return (
    <>
    <Navbar/>
    <div className='main7'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card profile'>   
            </div>
            <div>
              <h3>username</h3>
              <h3>id</h3>
              
            </div>
          </div>
          <div className='col-md-6'>
            <h1>Edit Profile</h1>
          </div>
        </div>
      </div>
    </div>




    </>
    
  )
}
