import React, { useEffect, useState } from 'react'
import './Additem.css'
import Navbar from './Navbar'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Additem() {


    const nav = useNavigate()
    const [output, setOutput] = useState({ })

    const inputChange = (event) => {
        const { name, value } = event.target
        setOutput({ ...output, [name]: value })
    }
  
    

    const submit = () => {
        const data=new FormData()
        data.append('Firstname',output.Firstname)
        data.append('Lastname',output.Lastname)
        data.append('Age',output.Age)
        data.append('Category',output.Category)
        data.append('Price',output.Price)
        data.append('Images',output.Images)
        console.log(output);
        axios.post('http://127.0.0.1:8000/api/AddshowAPI', data).then((response) =>{
            console.log(response)
            // nav('/home')

        })

    }

 

    return (
        <>
            <Navbar />
            <div>
                <div class="row">
                    <div id="main2">
                        <div class="container">
                            <section>

                                <div class="row">
                                    <div class="card ">
                                        <div class="card-body">
                                            <h5 class="card-title">Add Criminals</h5>
                                            <form>
                                                <div class="row">
                                                    <div class="col">
                                                        <label class="name">First Name</label>
                                                        <input type="text" class="form-control" placeholder="Criminal First name"
                                                            aria-label="First name" name='Firstname' onChange={inputChange}></input>
                                                    </div>
                                                    <div class="col">
                                                        <label class="name">Last Name</label>
                                                        <input type="text" class="form-control" placeholder="Last name"
                                                            aria-label="Last name" name='Lastname' onChange={inputChange}></input>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <label class="name">Age</label>
                                                <input type="number" class="form-control" placeholder="Age" name='Age' onChange={inputChange}></input>
                                                <br></br>
                                                <label class="name">Category</label>
                                                <select class="form-select" aria-label="Default select example" name='Category' onChange={inputChange}>
                                                    <option selected>Open this select menu</option>
                                                    <option> violent crime</option>
                                                    <option>Organized crime</option>
                                                    <option>Street crime</option>
                                                    <option>Political crime</option>
                                                    <option>murder</option>
                                                </select>
                                                <br></br>
                                                <label class="name">price</label>
                                                <input type="number" class="form-control" placeholder="price" name='Price' onChange={inputChange}></input>
                                                <br></br>
                                                <label class="name">Add Photo</label>
                                                <input type="file" class="form-control" placeholder="file" name='Images' onChange={(e)=>{console.log(e.target.files[0]);;setOutput({ ...output,'Images':e.target.files[0]})}}></input>
                                                <br></br><br></br>
                                                <button type="button" onClick={submit} class="btn btn-dark">ADD</button>
                                            </form>

                                        </div>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
