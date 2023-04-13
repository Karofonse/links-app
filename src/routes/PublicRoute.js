import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from '../components/Login'
import RegisterForm from '../components/RegisterForm'
import Home from '../components/Home'

const PublicRoute = () => {
  return (
    <>
    <Routes>
        <Route element={<LoginForm/>} path='/*'></Route>
        <Route element={<RegisterForm/>} path='/registro'></Route>
    </Routes>         
    </>
  )
}

export default PublicRoute