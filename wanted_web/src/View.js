import React, { useEffect, useState } from 'react'
import './view.css'
import Navbar from './Navbar'
import axios from 'axios'
export default function View() {

  const [get, setGet] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/displaycontactUs').then((response) => {
      console.log(response)
      setGet(response.data.data)
    }).catch((error) => { console.log(error) })
  }, [])


  const inputChange =(event)=>{
    const{name,value}=event.target
    setInput({...input,[name]:value})
  }




  const [input, setInput] = useState({})
  const passid = (value) => {
    console.log(value);
    axios.get(`http://127.0.0.1:8000/api/singlecontactus/${value}`).then((response) => {
      console.log(response.data.data[0]);
      setInput(response.data.data[0])

    }).catch((error) => {
      console.log(error);
    })
  }

  const send =()=>{
    console.log(input);
    axios.post('http://127.0.0.1:8000/api/replay',input).then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <>
      <Navbar />
      <div className='main10'>
        <div className='container'>
          <div class="row">
            {get.map((value, key) => (
              <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card low">
                  <div class="card-body">
                    <h5 class="card-title">{value.Fname} {value.Lname}</h5>
                    <p class="card-text">Contact number:{value.Contact}<br></br>
                      Email:{value.Email}<br></br><br></br>
                      <h6 class="card-subtitle mb-2 text-body-secondary">Message :{value.Message}</h6>
                    </p>
                    {/* <!-- Button trigger modal --> */}
                    <button onClick={() => { passid(value.id) }} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      response
                    </button>

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">FirstName</label>
                                <input type="text" class="form-control" id="exampleInputFname" value={input.Fname} aria-describedby="emailHelp"></input>                                 
                              </div>
                              <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">LastName</label>
                                <input type="text" class="form-control" id="exampleInputLame" value={input.Lname} aria-describedby="emailHelp"></input>                                 
                              </div>
                              <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={input.Email}></input>
                              </div>
                              <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Message</label>
                                <input type="text" class="form-control" id="exampleInputtext"  name='Reply' onChange={inputChange}></input>
                              </div>
                              
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={send} class="btn btn-primary">Send</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>


      </div>
    </>
  )
}
