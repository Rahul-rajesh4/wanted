import React, { useEffect, useState } from 'react'
import './login.css'
import Navbar from './Navbar'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom'
export default function Login() {

  const navigate = useNavigate()
  const [input, setInput] = useState({
    email: '',
    password: ''

  })

  const inputChange = (event) => {

    const { name, value } = event.target

    setInput({ ...input, [name]: value })
  }


  const submit = () => {
    console.log(input);

    axios.post('http://127.0.0.1:8000/api/UserLogin', input).then((response) => {

      console.log(response);
      localStorage.setItem('user_id', JSON.stringify(response.data.data.user_id));
      localStorage.setItem('login_id', JSON.stringify(response.data.data.login_id));
      localStorage.setItem('Fname', JSON.stringify(response.data.data.Fname));
      localStorage.setItem('userdata', JSON.stringify(response.data.data));
      
      navigate('/home')
    }).catch((error) => {
      console.log(error.response.data.data);
      toast.warn(error.response.data.data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
  }


  return (
    <>
      <ToastContainer />
      <div class="main3">
        <div class="container mt-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Login</h5>
              <h6 class="card-subtitle mb-2 text-muted"></h6>
              <form class="space">
                <div class="mb-3 ">
                  <label for="exampleInputEmail1" class="form-label text-dark">Email Address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" name='Email' onChange={inputChange} aria-describedby="emailHelp"></input>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label text-dark">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" name='Password' onChange={inputChange}></input>
                  <div>
                    <br></br>
                    <div>
                      <a href='#'>forgot</a>&nbsp;&nbsp;&nbsp;
                      <a href='/reg'>create</a>
                    </div>

                  </div>
                </div>
                <button type="button" onClick={submit} class="btn btn-dark">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
