import React, { useEffect, useState } from 'react'
import './profile.css'
import Navbar from './Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export default function Profile() {


  const [display, setDisplay] = useState(JSON.parse(localStorage.getItem('userdata') || {}))


  return (
    <>
      <Navbar />
      <div className='main7'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card profile'>
              </div><br></br>
              <div className=' pspace'>
                <div className='card profile2'></div>&nbsp;
                <div className='card profile2'></div>
              </div>

            </div>
            <div className='col-md-6'>

              <label className='namesize'>{display.Fname} {display.Fname}</label>
              <h4 className='user_id namee'>Id_Number:{display.user_id}</h4>
              <h4 className='namee'>Contact:{display.Contact}</h4>
              
            </div>
          </div>
        </div>
      </div>




    </>

  )
}
