import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { FullDetailedCard } from '../../Components/FullDetailedCard/FullDetailedCard';
import SignIn from '../../Components/SignIn';
import AfterLogin from '../AfterLogin/AfterLogin';
import { ApplyNow } from '../ApplyNow/ApplyNow';
import { ApplyNowSubmit } from '../ApplyNow/ApplyNowSubmit';
import ComapanyReview from '../CompanyReview/ComapanyReview';
import FindJobs from '../FindJobs/FindJobs';
import Home from "../Home/Home"
import PostJob from '../PostJob/PostJob';
import Resume from '../Resume/Resume';


import Byjus from '../SalaryGuide/Byjus';
import Capegemini from '../SalaryGuide/Capegemini';
import Message from '../SalaryGuide/Message';
import Notification from '../SalaryGuide/Notification';

import SalaryGuide from '../SalaryGuide/SalaryGuide';
import Tcs from '../SalaryGuide/Tcs';
import UserRoute from './userRoute';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/findjobs' element={<FindJobs/>} />
      <Route path='/companyreview' element={<ComapanyReview/>} />
      <Route path='/salaryguide' element={<SalaryGuide/>} />

      {/* <Route path='/:id' element={<FullDetailedCard/>} /> */}

      <Route path='/home/:id' element={<FullDetailedCard/>} />
      <Route path='/applynow' element={<ApplyNow/>} />
      <Route path='/applynowsubmit' element={<ApplyNowSubmit/>} />
      <Route path='/postjobs' element={<PostJob/>} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/notification' element={<Notification/>} />
      <Route path='/message' element={<Message/>} />

      {/* dummy pages salary guides */}
      <Route path='/capegemini' element={<Capegemini/>} />
      <Route path='/Tcs' element={<Tcs/>} />
      <Route path="/Byjus" element={<Byjus/>}/>


    </Routes>
  )
}
