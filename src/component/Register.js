import React, { useState } from 'react'

import Api from '../api/Api.js';
import axios from 'axios';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import ApiSanctum from '../api/ApiSanctum.js';
import Cookies from 'js-cookie';


const Register = () => {

    const history = useNavigate();

    const [inpval, setINP] = useState({
        name: "",
        email: "",
        password: "",

    })

    const setdata = (e) => {
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const postData = async (e) => {
        e.preventDefault();
        const formData = {
            name: inpval.name,
            email: inpval.email,
            password: inpval.password
        }
        await axios.get(Api.sanctum).then(response => {
            axios.post(Api.AddUser, formData).then(res => {
                console.log(res);
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    history('/');
                } else {

                }

            });
        });
    }


    return (
        <div className="container d-flex justify-content-center">
            <NavLink to="/">home</NavLink>

            <hr></hr>


            <div className="card" style={{ width: '28rem', marginTop: '20%' }}>
                <h1 className='text-center'>Sign Up </h1>
                <div className="card-body d-flex justify-content-center">
                    <form className="mt-4" onSubmit={postData} >
                        <div className="row">
                            <div class="mb-3 col-lg-12 col-md-12 col-12">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 col-lg-12 col-md-12 col-12">
                                <label for="exampleInputPassword1" class="form-label">email</label>
                                <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
                            </div>
                            {/* <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">phone</label>
                        <input type="text" value={inpval.phone} onChange={setdata} name="phone" class="form-control" id="exampleInputPassword1" />
                    </div> */}
                            <div class="mb-3 col-lg-12 col-md-12 col-12">
                                <label for="exampleInputPassword1" class="form-label">password</label>
                                <input type="number" value={inpval.password} onChange={setdata} name="password" class="form-control" id="exampleInputPassword1" />
                            </div>



                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>

                </div>
            </div>



        </div>

    )
}

export default Register