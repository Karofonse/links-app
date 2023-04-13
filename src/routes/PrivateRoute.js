import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'

const PrivateRoute = () => {
    return (
        <>
            <Routes>
                <Route element={<Home/>} path='/*'></Route>
            </Routes>         
        </>
    )
}

export default PrivateRoute