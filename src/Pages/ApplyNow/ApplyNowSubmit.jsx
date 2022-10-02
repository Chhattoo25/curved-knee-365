import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ApplyNowSubmit = () => {


    let data = JSON.parse(localStorage.getItem("Applied_Data"))

    const navigate = useNavigate()

  return (
    <Box sx={{width:{sm:'90%',md:'70%',lg:'50%'},m:'auto',mt:'25vh',display:'flex', boxShadow:'4px 4px 5px 1px gray',alignItems:'center',padding:'25px',flexDirection:'column',justifyContent:'center',alignItems:'left'}}>
      <Box>
        <img src=''/>
      </Box>
      <Typography variant='h7'fontWeight={'bold'}>Name</Typography>
        <Box>
            {data.firstName+' '}
            {data.lastName}
        </Box>
        <Typography variant='h7'fontWeight={'bold'}>E-Mail</Typography>
        <Box>
            {data.email}
        </Box>
        <Typography variant='h7'fontWeight={'bold'}>E-JobTitle</Typography>

        <Box>
            {data.jobTitle}
        </Box>
        <Typography variant='h7'fontWeight={'bold'}>Phone</Typography>

        <Box>
            {data.phone}
        </Box>
        <Box mt={'10px'} borderRadius='5px'>
            <button style={{borderRadius:'5px'}} onClick={()=>{ navigate('/') }} > Go to home </button>
        </Box>
        
    </Box>
  )
}