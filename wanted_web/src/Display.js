import React, { useEffect, useState } from 'react'
import './display.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { deleteData, fetchData } from './REDUX/SLICE/counterSlice'
export default function Display() {

    const {data} = useSelector((state)=>state.display)
    const dispatch = useDispatch()
    console.log(data);

    useEffect(()=>{
        dispatch(fetchData())
    },[])


    const navigate = useNavigate()

    const role = JSON.parse(localStorage.getItem('Fname'))

    // const [get, setGet] = useState([])
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/api/GetshowDetails').then((response) => {
    //         console.log(response)
    //         setGet(response.data.data)
    //     }).catch((error) => { console.log(error) })
    // }, [])

    const Edit = (val) => {
        const id=val
        navigate(`/Edit/${id}`)
    }

    const Delete = (id) => {
        // const id = val
        console.log(id);
        dispatch(deleteData(id))
       
    }


    return (
        <div>
            <section>
                <h1 class="heading">WANTED CRIMINALS</h1>
                <div class="container zz">
                    <div class='row'>
                        {data.map((value, key) => (
                            <div className='box' key={key}>
                                {role === 'admin' ? (
                                    <div class="card mb-3 mt-5 carditem">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src={`wantedlist_django/${value.Images}`} class="img-fluid rounded-start cardimage" alt="..."></img>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title"><label>{value.Firstname} {value.Lastname}</label></h5>
                                                    <p class="card-text"><label>Category:{value.Category}<br></br>
                                                        Age:{value.Age}<br></br>
                                                        Price:{value.Price}
                                                    </label>
                                                    </p>
                                                    <button type="button" class="btn btn-dark firstbutton" onClick={() => { Edit(value.id) }}>Edit</button>
                                                    <button type="button" class="btn btn-danger" onClick={() =>{Delete(value.id)}}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) :
                                    <div class="card mb-3 mt-5 carditem">
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src={`wantedlist_django/${value.Images}`} class="img-fluid rounded-start" alt="..."></img>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title"><label>{value.Firstname} {value.Lastname}</label></h5>
                                                    <p class="card-text"><label>Category:{value.Category}<br></br>
                                                        Age:{value.Age}<br></br>
                                                        Price: {value.Price}
                                                    </label>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}


                    </div>

                </div>
            </section>
        </div>
    )
}
