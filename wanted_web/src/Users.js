import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './user.css'
import axios from 'axios'
export default function Users() {




    const [state, setState] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Display').then((responce) => {
            console.log(responce);
            setState(responce.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <>
            <Navbar />
            <div className='main5'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Id</th>
                        </tr>
                    </thead>
                    <tbody>

                        {state?.map((data, key) =>

                            <tr>
                                <th scope="row">{key+1}</th>
                                <td>{data.Fname}{data.Lname}</td>
                                <td>{data.Contact}</td>
                                <td>{data.id}</td>
                            </tr>

                        )}
                    </tbody>
                </table>

            </div>
        </>

    )
}
