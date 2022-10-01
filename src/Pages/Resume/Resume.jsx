import React from 'react';
import styles from "./Resume.module.css";
import {UserAuth} from "../../Context/AuthContext";
import SignIn from '../../Components/SignIn';



function Resume() {
    const {user} = UserAuth();

  return (
    <>
    {user?.displayName ? (
        <div className={styles.resume} >
        <div className={styles.resume1} >
            <img src="https://my.indeed.com/static/images/indeed.svg" alt="resume" />
        </div>
        <div className={styles.resume2} >
            <p style={{fontWeight:"bolder",fontSize:"20px"}} >Create an Indeed Resume</p>
            <p style={{fontSize:"14px"}} >{user.email}</p>
            <p style={{fontSize:"16px"}} >There are two ways to create an editable online resume. 
            When you upload a resume to start, your file will also be saved and available when you apply.
            </p>
            <div className={styles.upload}>Upload your resume</div>
            <p style={{fontSize:"12px"}}>By continuing, you agree to create a public resume and agree to receiving job opportunities from employers.</p>
        </div>

    </div>
    ):(
        <SignIn/>
    )}
    
    </>
    
  )
}

export default Resume