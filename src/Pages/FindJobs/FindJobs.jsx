import React, { useState } from 'react'
import styled from 'styled-components'
import {BiSearch} from 'react-icons/bi'
import {MdLocationPin} from 'react-icons/md'
import { JobCard } from '../../Components/JobCard/JobCard'
import { UserAuth } from '../../Context/AuthContext'




const FindJobs = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const {user,logOut} = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <>
    <button onClick={handleSignOut}></button>
    <h2>{user.displayName}</h2>
    <COMPONENT>
      <SEARCHBAR_CONTAINER>
        <SEARCHBAR_CONTAINER_WRAPPER>
          <h4>What</h4>
          <div><input type='text' placeholder='Job title, keywords, or company' value={title} onChange={(e)=>setTitle(e.target.value)} /> </div>
          <div> <BiSearch style={{color:'grey', margin:'auto'}} /> </div>
        </SEARCHBAR_CONTAINER_WRAPPER>
        <SEARCHBAR_CONTAINER_WRAPPER>
          <h4>Where</h4>
          <div><input type='text' placeholder='City, state, or pin code' value={location} onChange={(e)=>setLocation(e.target.value)} /> </div>
          <div> <MdLocationPin style={{color:'grey', margin:'auto'}} /> </div>
        </SEARCHBAR_CONTAINER_WRAPPER>
        <SEARCHBUTTON_WRAPPER>
          <button>Find jobs</button>
        </SEARCHBUTTON_WRAPPER>
    
      </SEARCHBAR_CONTAINER>

      <POST_RESUME_CONTAINER>
        <div>
          <a href="">Post your resume</a> <span>-It only takes a few seconds</span>
        </div>
        <div>
          <a href="">Employers: Post a job</a> <span>- Your next hire is here</span>
        </div>
      </POST_RESUME_CONTAINER>
      
      <hr/>

       <FeedBar>
        <FeedBar_TABS>
          <div>
            <h3>Job feed <span>New</span></h3>
          </div>
          <div>
            <h3>Recent searches</h3>
          </div>
        </FeedBar_TABS>
        <div></div>
       </FeedBar>
      
      <JobCard></JobCard>
    </COMPONENT>
    </>

  )
  
}

export default FindJobs

const COMPONENT = styled.div`
border: 1px solid red;
 display:flex;
 flex-direction: column;
 width: 100%;
 justify-content: center;
 align-items: center;
 margin: auto;
 
 hr{
  width: 100%;
 }
`
const SEARCHBAR_CONTAINER = styled.div`
 display: flex;
 gap: 1.5rem;
 justify-content: center;
 align-items: center;

 @media screen and (min-width: 400px) and (max-width: 768px){
  flex-direction: column;
 }
`
const SEARCHBAR_CONTAINER_WRAPPER = styled.div`
border: 1px solid black;
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 0.5rem;
width: 22rem;
height: 2.5rem;
padding: 0 0.5rem;
h4{
  font-weight: bold;
}
div{
  display: flex; 
  input{
    width: 14rem;
    border-style: hidden;
    font-size: 14px;
    &:focus {
      outline: none;
    }
  }
  button{
    border:none;
    font-weight: 500;
    background-color: none;
    font-size: 16px;

    @media screen and (min-width: 400px) and (max-width: 768px){
     width: 90%;
     color: red;
    }
  }
}


`
// @media screen and (min-width: 400px) and (max-width: 768px){
  
// }
const SEARCHBUTTON_WRAPPER = styled.div`
 button{
   padding: 0.75rem 1rem;
   background-color: #2557a7;
   border: 1px solid transparent;
   border-radius: 0.5rem;
   color: white;
   font-weight: 700;
 }
`
const POST_RESUME_CONTAINER = styled.div`
 padding: 1.5rem;
 div{
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
  a{
    text-decoration: none;
    color: #2557a7;
    font-size: 16px;
    font-weight: bold;
  }
 }
`

//Jobfeed-Bar
const FeedBar = styled.div`
 display: flex;
 width: 100%;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 
`
const FeedBar_TABS= styled.div`
display: flex;
justify-content: center;
align-items: center;
div{

  width: 17rem;
  display: flex;
  justify-content: center;
  border-bottom: 5px solid #2557a7;
  h3{
    display: block;
    span{
      padding: 0.5rem;
      background-color: black;
      color: white;
      margin-left: 0.25rem;
      font-weight: 400;
      border-radius: 0.75rem;
    }
  }
}

`

{/* <FeedBar>
  <FeedBar_TABS>
    <div>
      <h3>Job feed</h3>
      <span>New</span>
    </div>
    <div>
      <h3>Recent searches</h3>
    </div>
  </FeedBar_TABS>
</FeedBar> */}