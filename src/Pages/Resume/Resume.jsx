import React, { useState } from 'react';
import styles from "./Resume.module.css";
import {UserAuth} from "../../Context/AuthContext";
import SignIn from '../../Components/SignIn';
import {Viewer} from "@react-pdf-viewer/core";
import {defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {Worker} from '@react-pdf-viewer/core';




function Resume() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();


    const {user} = UserAuth();
    const [pdfFile,setPdfFile] = useState(null);
    const [pdfFileError,setPdfFileError] = useState("");

    const [viewPdf,setViewPdf] = useState(null);

    const fileType = ['application/pdf'];
    const handlePdfFileChange = (e) => {
        let selectedFile = e.target.files[0];
        if(selectedFile){
            if(selectedFile && fileType.includes(selectedFile.type)){
                let render = new FileReader();
                render.readAsDataURL(selectedFile);
                render.onloadend = (e) =>{
                    setPdfFile(e.target.result);
                    setPdfFileError('');
                }
            }
            else{
                setPdfFile(null);
                setPdfFileError('Please select valid pdf file')
            }
        }
        else{
            alert("please select your file")
        }
    }

    const handlePdfFileSubmit = (e) => {
        e.preventDefault();
        if(pdfFile !== null){
            setViewPdf(pdfFile);
        }
        else{
            setViewPdf(null)
        }
    }


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
            <p style={{fontSize:"16px",marginBottom:"30px"}} >There are two ways to create an editable online resume. 
            When you upload a resume to start, your file will also be saved and available when you apply.
            </p>
            <div style={{display:"flex"}} >
                <label for="files" className={styles.upload}>Upload your resume</label>
                <input id='files'  style={{visibility:"hidden"}} type="file" onChange={handlePdfFileChange} />
                <button style={{fontSize:"16px",width:"70%"}} className={styles.upload} onClick={handlePdfFileSubmit} >Upload</button>
                
            </div>
            {pdfFileError && <div className={styles.errorMsg} >{pdfFileError}</div>}
            <p style={{fontSize:"12px",marginTop:"30px"}}>By continuing, you agree to create a public resume and agree to receiving job opportunities from employers.</p>
        </div>
        <div className={styles.pdfContainer} >
        {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
            <Viewer fileUrl={viewPdf}
            plugins={[defaultLayoutPluginInstance]} />
            </Worker></>}

            {/* if we dont have pdf or viewPdf state is null */}
            {!viewPdf&&<>No pdf file selected</>}
        </div>

    </div>
    ):(
        <SignIn/>
    )}
    
    </>
    
  )
}

export default Resume