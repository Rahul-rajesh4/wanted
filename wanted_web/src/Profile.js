import React, { useEffect, useState } from 'react'
import './profile.css'
import Navbar from './Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export default function Profile() {

  const [data,setData] = useState("")


  const [display, setDisplay] = useState(JSON.parse(localStorage.getItem('user_id') || {}))
  const id =display

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/userdata/${id}`).then((response)=>{
      console.log(response.data.data[0]);
      setData(response.data.data[0])
    }).catch((error)=>{
      console.log(error);
    })
  },[])

  
  console.log(data);





  const[update,setUpdate] = useState()

    const inputChange = (event)=>{
        const{name,value} = event.target
        setUpdate({...update,[name]:value})
    }
    console.log(update);


    const  show = ()=>{
      axios.put(`http://127.0.0.1:8000/api/userupdate/${id}`,update).then((response)=>{
          console.log(response);
      }).catch((error)=>{console.log(error);})
  }




  




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

              <label className='namesize'>{data.Fname} {data.Lname}</label>
              <h4 className='user_id namee'>Id_Number:{data.id}</h4>
              <h4 className='namee'>Contact:{data.Contact}</h4>
              {/* <!-- Button trigger modal --> */}
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit profile
              </button>

              {/* <!-- Modal --> */}
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
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
              <input type="tel" class="form-control" id="exampleInputName2" aria-describedby="contact" name='Contact' onChange={inputChange}></input>
            </div>
            <div class="mb-3">
              <label for="exampleInputName" class="form-label text-dark">First Photo</label>
              <input type="file" class="form-control" id="exampleInputName2" aria-describedby="fphoto" name='Fphoto' ></input>
            </div>
            <div class="mb-3">
              <label for="exampleInputName" class="form-label text-dark">Second Photo</label>
              <input type="file" class="form-control" id="exampleInputName2" aria-describedby="Sphoto" name='Sphoto'></input>
            </div>
            <div class="mb-3">
              <label for="exampleInputName" class="form-label text-dark">Third Photo</label>
              <input type="file" class="form-control" id="exampleInputName2" aria-describedby="Tphoto" name='Tphoto'></input>
            </div>

          </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" onClick={show} class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>




    </>

  )
}
