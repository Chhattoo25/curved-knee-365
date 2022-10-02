// import { Box, Typography } from '@mui/material'
// import React from 'react'

// const Apply2 = () => {
//   return (
//     <div>
// <Typography> Add a resume for NSEG Pvt Ltd</Typography>
// <Box >

// </Box>

//     </div>
//   )
// }

// export default Apply2


import  React , {useState} from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import {
  Button,
  Input,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { FaFileUpload } from "react-icons/fa";

import {Viewer} from "@react-pdf-viewer/core";
import {defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {Worker} from '@react-pdf-viewer/core';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const ApplyTwo = ({ toogle , data ,setData}) => {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();


    
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



  const navigate = useNavigate();
  return (
    <Stack spacing={6} padding={5}>

< Box >


<Box sx={{ display: "flex", justifyContent: "space-between", }}>
          <Button onClick={() => toogle("dec")} disableElevation disableRipple>
            <ArrowBackIcon  />{" "}
          </Button>
          <Button onClick={() => navigate("/")} disableElevation disableRipple>
            Exit
          </Button>
        </Box>
        <BorderLinearProgress variant="determinate" value={50} />
     
      <Typography>Application step 2 of 4</Typography>
      <Typography variant="h5" fontWeight={'bold'} mt='15px'> Add a resume for NSEG Pvt Ltd</Typography>
<Box border={'1px solid silver'} sx={{display:'flex',padding:'10px',borderRadius:'5px',gap:'15px',mt:'15px'}}>
<Box component={'button'} bgcolor='silver'> <FaFileUpload/></Box>


<Box>
  
  <input color={'darkblue'}fontWeight='bold' type="file" onChange={handlePdfFileChange}/>
<button style={{borderRadius:'0.5rem',color:"white",background:"#1976d2",fontWeight:"bolder",border:"none",padding:'0.5rem'}} onClick={handlePdfFileSubmit}>Preview</button>
<Typography >Use a pdf,docs,doc,rtf and text</Typography></Box>
</Box>
      
</Box>
  

      <Box>
        <Button  onClick={() => toogle("inc")} variant="contained">
          Continue
        </Button>
      </Box>
      <Box sx={{width:'100%',height:'500px',bgcolor:'#e4e4e4',overflowY: 'scroll',
}}>
         
        {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
            <Viewer fileUrl={viewPdf}
            plugins={[defaultLayoutPluginInstance]} />
            </Worker></>}

            {/* if we dont have pdf or viewPdf state is null */}
            {!viewPdf&&<>No pdf file selected</>}
        
      </Box>
    </Stack>
  );
};

export default ApplyTwo;
