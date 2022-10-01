import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { FullDetailedCard } from '../../Components/FullDetailedCard/FullDetailedCard';
import SignIn from '../../Components/SignIn';
import AfterLogin from '../AfterLogin/AfterLogin';
import ComapanyReview from '../CompanyReview/ComapanyReview';
import FindJobs from '../FindJobs/FindJobs';
import Home from "../Home/Home"
import SalaryGuide from '../SalaryGuide/SalaryGuide';
import UserRoute from './userRoute';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/findjobs' element={<FindJobs/>} />
      <Route path='/companyreview' element={<ComapanyReview/>} />
      <Route path='/salaryguide' element={<SalaryGuide/>} />
      <Route path='/home/:id' element={<FullDetailedCard/>} />

    </Routes>
  )
}
