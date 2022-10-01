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


import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import {
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { FaFileUpload } from "react-icons/fa";

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


<Box><Typography color={'darkblue'}fontWeight='bold'>Upload resume</Typography>
<Typography >Use a pdf,docs,doc,rtf and text</Typography></Box>
</Box>
      
</Box>
  

      <Box>
        <Button onClick={() => toogle("inc")} variant="contained">
          Continue
        </Button>
      </Box>
    </Stack>
  );
};

export default ApplyTwo;
