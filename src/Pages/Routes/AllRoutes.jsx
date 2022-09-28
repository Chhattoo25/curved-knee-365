import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SignIn from '../../Components/SignIn';
import Home from "../Home/Home"

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<SignIn/>} />

    
    </Routes>
  )
}
