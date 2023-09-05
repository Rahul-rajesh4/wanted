import React from 'react'
import './home.css'
import Navbar from './Navbar'
import wanted from './Images/wanted.jpg'
import Display from './Display'
export default function Home() {
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
                            <div>
                                <input type="button" value="Add" class="button1" ></input>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <br></br>
            <Display/>



            {/* <!-- section contact --> */}
            <section class="contact pt-2" id="contact">
                <h2 class="heading1 text-white text-center ">Contact <span>Us!</span></h2>
                <div class="container">
                    <form action="#">
                        <div class="input-box">
                            <input type="text" placeholder="First Name"></input>
                            <input type="text" placeholder="Last Name"></input>
                        </div>
                        <div class="input-box">
                            <input type="email" placeholder="Email"></input>
                            <input type="number" placeholder="Phone Number"></input>
                            <textarea placeholder="Your Message" cols="30" rows="8"></textarea>
                            <input type="button" value="Send " class="btn"></input>
                        </div>
                    </form>
                </div>
            </section>
        </div>
        </>
    )
}
