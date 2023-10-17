import React, { useState } from 'react'
import './register.css'
import wanted from './Images/wanted.jpg'
import axios from 'axios'
import Navbar from './Navbar'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { userReg } from './REDUX/SLICE/counterSlice'
export default function Register() {


  const {data} = useSelector((state)=>state.display)
    const dispatch = useDispatch()
    console.log(data);

  const [input, setInput] = useState({
    Fname: '',
    Lname: '',
    Email: '',
    Password: ''
  })

  const inputChange = (event) => {

    const { name, value } = event.target

    setInput({ ...input, [name]: value })
  }



  const submit = () => {

    dispatch( userReg(input))
    Navigate('/')
  }
  const Navigate = useNavigate()
  const Backk = () => {
    Navigate('/')
  }
  return (
    <>
      <div className='main4'>
        <div class="bgimg3" style={{ backgroundImage: `url(${wanted})` }}>
          <div className='darkcolor2'>
            <div class="container mt-5">
              <div class="card maincard2">
                <div class="card-body">
                  <h5 class="card-title">Registration Form</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Add Your Details</h6>
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label text-dark">First Name</label>
                      <input type="text" class="form-control" id="exampleInputName1" aria-describedby="fname" name='Fname' onChange={inputChange}></input>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label text-dark">Last Name</label>
                      <input type="text" class="form-control" id="exampleInputName2" aria-describedby="lname" name='Lname' onChange={inputChange}></input>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputName" class="form-label text-dark">Contact</label>
                      <input type="tel" class="form-control" id="exampleInputName2" aria-describedby="lname" name='Contact' onChange={inputChange}></input>
                    </div>
                    <div class="mb-3 ">
                      <label for="exampleInputEmail1" class="form-label text-dark">Email Address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='Email' onChange={inputChange}></input>
                      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label text-dark">Create Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" name='Password' onChange={inputChange}></input>
                    </div>
                    {/* <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label text-dark">Confirm Password</label>
              <input type="password" class="form-control" id="exampleInputPassword2"></input>
            </div> */}
                    <br></br><br></br>
                    <button type="button" onClick={submit} class="btn btn-dark">Submit</button>
                    &nbsp;<button onClick={Backk} class="btn btn-dark">Back</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
