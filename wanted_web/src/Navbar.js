import React from 'react'
import './nav1.css'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
    const navigate = useNavigate()
    const role = JSON.parse(localStorage.getItem('Fname'))
const logout = ()=>{
    localStorage.removeItem('Fname')
    navigate('/')
   
}

    return (
        <div>
            {role === 'admin' ?
                <nav class="navbar navbar-expand-lg fixed-top bg">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <p class="brand mt-3 text-light">WANTED</p>
                            <ul class="navbar-nav space mb-2 mb-lg-0 ">
                                <li class="nav-item">
                                    <a class="nav-link active text-light" aria-current="page" href="/home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="/add">Add</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="/user">Users</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="/view">View</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="/" onClick={logout}>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            :
            <nav class="navbar navbar-expand-lg fixed-top bg">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <p class="brand mt-3 text-light">WANTED</p>
                            <ul class="navbar-nav mb-2 mb-lg-0 space">
                                <li class="nav-item">
                                    <a class="nav-link active text-light" aria-current="page" href="/home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-light" aria-current="page" href="/profile">Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light" href="/" onClick={logout}>Logout</a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            


            }

        </div>
    )
}
