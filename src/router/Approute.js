import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router'
import Register from '../component/Register.js'


import axios from 'axios';
import Login from '../component/Login.js';


axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

export default function Approuter() {
    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Fragment>
    )
}
