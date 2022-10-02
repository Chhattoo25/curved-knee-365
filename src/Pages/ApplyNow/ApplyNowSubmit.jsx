import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext'
export const ApplyNowSubmit = () => {

const {user} = UserAuth()
console.log(user,'applysubmit')
    let data = JSON.parse(localStorage.getItem("Applied_Data"))

    const navigate = useNavigate()

  return (
    <Box sx={{width:{sm:'90%',md:'70%',lg:'50%'},m:'auto',mt:'25vh',display:'flex', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',alignItems:'center',padding:'25px',flexDirection:'column',justifyContent:'center',alignItems:'left',borderRadius:'10px'}}>
      <Box>
        <img src={user.photoURL}/>
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