import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";


import { useNavigate } from "react-router-dom";
import Apply1 from "./Apply1";
import Apply2 from "./Apply2";
import Apply3 from "./Apply3";
import Apply4 from "./Apply4";
import { ApplyNowSubmit } from "./ApplyNowSubmit";



export const ApplyNow = () => {


  const [page, setPage] = React.useState(0);
  const navigate = useNavigate()

  const toogle = (arg) => {
    if(arg === 'inc'){
        setPage(p => p+1)
    }else if(arg === 'dec'){
        setPage((p) => p-1)
    }
  };

  const [data , setData] = React.useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    education:"",
    totalExp:"",
    softwareExp:"",
    reactExp:"",
    jobTitle:"",
    company:""
  })
  const handleChange = (e) => {
    let {name  , value } = e.target
    setData({...data , [name]:value})
  }
  const handleSubmit = () => {
    navigate('/applynowsubmit')
    localStorage.setItem("Applied_Data" , JSON.stringify(data))
  }
  return (
    <Box
      width="auto"
      height="900px"aaa
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Box width="35%" height="90%">
        {page === 0  && <Apply1 data={data} setData={handleChange}  toogle={toogle} /> }
        {page === 1  && <Apply2 data={data} setData={handleChange}  toogle={toogle} /> }
        {page === 2  && <Apply3 data={data} setData={handleChange}  toogle={toogle} /> }
        {page === 3  && <Apply4 data={data} setData={handleSubmit}  toogle={toogle} /> }
        {page === 4  && <ApplyNowSubmit data={data} setData={handleSubmit}  toogle={toogle} /> }
      </Box>
      <Box width="30%" height="90%">
        
      </Box>
    </Box>
  );
};
