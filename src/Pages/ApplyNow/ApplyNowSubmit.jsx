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
    <Box sx={{width:{sm:'90%',md:'80%',lg:'70%'},m:'auto',mt:'25vh',display:'flex', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',alignItems:'center',padding:'25px',justifyContent:'center',alignItems:'left',borderRadius:'10px'}}>


<Box sx={{h:'100%',background:"#6ecde3",borderRadius:"10px 0px 0px 10px"}}>
      <img style={{marginTop:"50px",marginRight:"20px",borderRadius:"50%",border:'2px solid black',width:'200px'}} src={user.photoURL}/>
      </Box>
      


      <Box sx={{background:"#6ecde3",padding:"10px 0px 0px 10px",}}>
        <Typography sx={{textDecoration:'underline'}} variant='h7'fontWeight={'bold'}>Name</Typography>
        <Box>
            {data.firstName+' '}
            {data.lastName}
        </Box>
        <Typography sx={{textDecoration:'underline'}} variant='h7'fontWeight={'bold'}>E-Mail</Typography>
        <Box>
            {data.email}
        </Box>
        <Typography sx={{textDecoration:'underline'}} variant='h7'fontWeight={'bold'}>E-JobTitle</Typography>

        <Box>
            {data.jobTitle}
        </Box>
        <Typography sx={{textDecoration:'underline'}} variant='h7'fontWeight={'bold'}>Phone</Typography>

        <Box>
            {data.phone}
        </Box>
        <Box mt={'10px'} >
            <button style={{borderRadius:'0.5rem',color:"white",background:"#2557a7",fontWeight:"bolder",border:"none",padding:"1rem"}} onClick={()=>{ navigate('/') }} > Go to home </button>
        </Box>
      </Box>

      <Box >
      <img width="100%" height="100%" style={{borderRadius:'0px 10px 10px 0px' }}src='https://gideonssoldiers.com/what-should-i-say-in-an-interview-thank-you-letter/thank-you/
'/>
      </Box>
        
    </Box>
  )
}