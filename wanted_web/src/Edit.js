import React, { useEffect, useState } from 'react'
import './edit.css'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
export default function Edit() {



    const[state,setState] = useState()

    const inputChange = (event)=>{
        const{name,value} = event.target
        setState({...state,[name]:value})
    }
    console.log(state);

    const [get,setGet]=useState()

    const{id}=useParams()
    console.log(id);

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/Singledata/${id}`).then((response)=>{
            console.log(response.data.data)
            setGet(response.data.data[0])

        }).catch((error)=>{console.log(error);

        })

    },[]);
    console.log(get);

    const navi = useNavigate()

    const Back = ()=>{
        navi('/home')

    }

    const  update = ()=>{
        axios.put(`http://127.0.0.1:8000/api/updateshow/${id}`,state).then((response)=>{
            console.log(response);
            navi('/home')
        }).catch((error)=>{console.log(error);})
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
                                                            aria-label="First name" name='Firstname' defaultValue={get && get.Firstname} onChange={inputChange} ></input>
                                                    </div>
                                                    <div class="col">
                                                        <label class="name">Last Name</label>
                                                        <input type="text" class="form-control" placeholder="Last name"
                                                            aria-label="Last name" name='Lastname' defaultValue={get && get.Lastname} onChange={inputChange} ></input>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <label class="name">Age</label>
                                                <input type="number" class="form-control" placeholder="Age" name='Age' defaultValue={get && get.Age} onChange={inputChange}></input>
                                                <br></br>
                                                <label class="name">Category</label>
                                                <select class="form-select" aria-label="Default select example" name='Category' defaultValue={get && get.Category} onChange={inputChange} >
                                                    <option selected>Open this select menu</option>
                                                    <option> violent crime</option>
                                                    <option>Organized crime</option>
                                                    <option>Street crime</option>
                                                    <option>Political crime</option>
                                                    <option>murder</option>
                                                </select>
                                                <br></br>
                                                <label class="name">price</label>
                                                <input type="number" class="form-control" placeholder="price" name='Price' defaultValue={get && get.Price} onChange={inputChange} ></input>
                                                <br></br><br></br>
                                                <button type="button" onClick={update}  class="btn btn-danger">Update</button>
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
