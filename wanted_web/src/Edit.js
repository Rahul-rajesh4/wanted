import React from 'react'
import './edit.css'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Edit() {

    const navi = useNavigate()

    const Back = ()=>{
        navi('/home')

    }
  return (
    <>
    <div className='main8'>
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
                                                            aria-label="First name" name='Firstname' ></input>
                                                    </div>
                                                    <div class="col">
                                                        <label class="name">Last Name</label>
                                                        <input type="text" class="form-control" placeholder="Last name"
                                                            aria-label="Last name" name='Lastname' ></input>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <label class="name">Age</label>
                                                <input type="number" class="form-control" placeholder="Age" name='Age' ></input>
                                                <br></br>
                                                <label class="name">Category</label>
                                                <select class="form-select" aria-label="Default select example" name='Category' >
                                                    <option selected>Open this select menu</option>
                                                    <option> violent crime</option>
                                                    <option>Organized crime</option>
                                                    <option>Street crime</option>
                                                    <option>Political crime</option>
                                                    <option>murder</option>
                                                </select>
                                                <br></br>
                                                <label class="name">price</label>
                                                <input type="number" class="form-control" placeholder="price" name='Price' ></input>
                                                <br></br><br></br>
                                                <button type="button"  class="btn btn-danger">ADD</button>
                                                <button type="button" onClick={Back} class="btn btn-danger buttonspace">Go Home</button>
                                            </form>

                                        </div>
                                    </div>
                                </div>

                            </section>
                        </div>
    </div>
    </>
  )
}
