import React, { useState } from 'react'
import './home.css'
import Navbar from './Navbar'
import wanted from './Images/wanted.jpg'
import Display from './Display'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import { contactus } from './REDUX/SLICE/counterSlice'
export default function Home() {




    const role = JSON.parse(localStorage.getItem('Fname'))
    console.log(role);


    const {data} = useSelector((state)=>state.display)
    const dispatch = useDispatch()
    console.log(data);


    const [post, setPost] = useState({ })

    const inputChange = (event) => {
        const { name, value } = event.target
        setPost({ ...post, [name]: value })
    }


    const submit = () => {
        console.log(post);
        dispatch(contactus(post))
        // window.location.reload()

        // axios.post('http://127.0.0.1:8000/api/contactUs', post).then((response) =>{
        //     console.log(response)
        //     
        // })

    }
    return (
        <>
        <Navbar />
        <div id="main">
            <section>
                <div class="bgimg" style={{ backgroundImage: `url(${wanted})` }}>
                    <div class="overlay">
                        <div class="content">
                            <label className='wantedhead'>WANTED</label>
                            <p>Most Wanted Criminals In The World</p>
                        </div>
                    </div>
                </div>
            </section>
            <br></br>
            <Display/>


            {role =='admin'?
            <none></none>
            :
            <section class="contact pt-2" id="contact">
            <h2 class="heading1 text-white text-center ">Contact <span>Us!</span></h2>
            <div class="container">
                <form action="#">
                    <div class="input-box">
                        <input type="text" placeholder="First Name" name='Fname' onChange={inputChange}></input>
                        <input type="text" placeholder="Last Name" name='Lname' onChange={inputChange}></input>
                    </div>
                    <div class="input-box">
                        <input type="email" placeholder="Email" name='Email' onChange={inputChange}></input>
                        <input type="tel" placeholder="Phone Number" name='Contact' onChange={inputChange}></input>
                        <textarea placeholder="Your Message" cols="30" rows="8" name='Message' onChange={inputChange}></textarea>
                        <input type="button" value="Send " onClick={submit} class="btn"></input>
                    </div>
                </form>
            </div>
        </section>
        

            }
            
        </div>
        </>
    )
}
