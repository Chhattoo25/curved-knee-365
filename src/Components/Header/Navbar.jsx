// import {
//   AppBar,
//   Box,
//   Button,
//   Divider,
//   Drawer,
//   Grid,
//   Tab,
//   Tabs,
//   Toolbar,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import React, { useState } from "react";
// import indeedlogo from "../../Images/indeedIcon.svg";
// import flowerIcon from "../../Images/flowerIcon.png";
// import DrawerCom from "./DrawerCom";
// import { Link, Route } from "react-router-dom";
// import { UserAuth } from "../../Context/AuthContext";
// import UserModel from "../../Pages/AfterLogin/UserModel";
// import { BsFillBellFill, BsFillChatLeftTextFill } from "react-icons/bs";

// const routes = ["/", "/findjobs", "/companyreview", "/salaryguide", "signin"];
// const Navbar = () => {
//   const theme = useTheme();
//   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
//   console.log(isMatch);
//   const [value, setValue] = useState();
//   const [value2, setValue2] = useState();
//   const { user } = UserAuth();
//   console.log("sahil", user);

//   return (
//     // <Route path='/' render={()=>{

//     // }} />
//     <AppBar

     
//       sx={{

//         bgcolor: "white",
//         color: "black",
//         boxShadow:
//           "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px",
//       }}
//     >
//       <Toolbar>
//         {isMatch ? (
//           <>
//             <Box display={"flex"} gap={"20px"}>
//               <Box mt={"10px"}>
//                 <img src={indeedlogo} alt="indeedLogo" />
//               </Box>
//               <Box>
//                 <img height={50} src={flowerIcon} alt="flowerIcon" />
//               </Box>
//             </Box>
//             <DrawerCom />
//           </>
//         ) : (
//           <Grid container>
//             <Grid itme xs={2}>
//               <Box display={"flex"} gap={"20px"}>
//                 <Link to="/">
//                   <Box mt={"10px"}>
//                     <img src={indeedlogo} alt="indeedLogo" />
//                   </Box>
//                 </Link>
//                 <Box>
//                   <img height={50} src={flowerIcon} alt="flowerIcon" />
//                 </Box>
//               </Box>
//             </Grid>



//             <Grid item xs={6} ml="-40px">

//               <Tabs
//                 indicatorColor="secondary"
//                 value={value2}
//                 onChange={(e, val) => setValue2(val)}
//                 textColor="inherit"
//               >
//                 <Tab
//                   label="Find Jobs"
//                   value={routes[1]}
//                   component={Link}
//                   to={routes[1]}
//                 />
//                 <Tab
//                   label="Company Review"
//                   value={routes[2]}
//                   component={Link}
//                   to={routes[2]}
//                 />
//                 <Tab
//                   label="Salary Guide"
//                   value={routes[3]}
//                   component={Link}
//                   to={routes[3]}
//                 />
//               </Tabs>
//             </Grid>
//             {/* <Grid item xs={1} /> */}

            

//             <Box itme xs={4}>

//               <Box>
//                 <Tabs
//                   indicatorColor="secondary"
//                   value={value}
//                   onChange={(e, val) => setValue(val)}
//                   textColor="inherit"
//                 >
//                   {user?.displayName ? (
//                     <>
//                       <Box mt={"15px"} mr="15px" display="flex" gap="30px">
//                         <Link style={{ color: "black" }} to="/notification">
//                           {" "}
//                           <BsFillChatLeftTextFill size={"25px"} />
//                         </Link>
//                         <Link style={{ color: "black" }} to="/message">
//                           <BsFillBellFill size={"25px"} />
//                         </Link>


      

//                    <Link style={{ color:'black'}} to='/notification'> <BsFillChatLeftTextFill size={'25px'}/></Link>
//                     <Link  style={{ color:'black'}}  to='/message'><BsFillBellFill size={'25px'}/></Link>

//                     <UserModel/>
//                 </Box>

//                         <UserModel />
//                       </Box>

//                     </>
//                   ) : (
//                     <>
//                       <Tab label="Post Your Resume" to="/" />
//                       <Tab
//                         label="Sign In"
//                         sx={{ color: "#3757a7" }}
//                         component={Link}
//                         to={routes[4]}
//                       >
//                         <Button>Sign In </Button>
//                       </Tab>
//                     </>
//                   )}

//                   <Divider orientation="vertical" flexItem></Divider>

//                   <Link style={{textDecoration:"none",color:"black"}} to="/postjobs" >

//                   <Link
//                     style={{ textDecoration: "none", color: "black" }}
//                     to="/postjobs"
//                   >

//                     <Tab label="Employers/Post Job" />
//                   </Link>
//                 </Tabs>
//               </Box>
//             </Box>
//           </Grid>
          
//         )}
    
//       </Toolbar>
//     </AppBar>
//   );
// };



import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import indeedlogo from "../../Images/indeedIcon.svg";
import flowerIcon from "../../Images/flowerIcon.png";
import DrawerCom from "./DrawerCom";
import { Link, Route } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import UserModel from "../../Pages/AfterLogin/UserModel";
import { BsFillBellFill, BsFillChatLeftTextFill } from "react-icons/bs";


const routes = ["/","/findjobs", "/companyreview", "/salaryguide","signin"];
const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const {user} = UserAuth();
 


  return (
    // <Route path='/' render={()=>{
      
    // }} />
    <Box
      sx={{
        flexWrap:"nowrap",
        width:"100%",
        display:"block",
        bgcolor: "white",
        color: "black",
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Box display={"flex"} gap={"20px"}>
              <Box mt={"10px"}>
                <img src={indeedlogo} alt="indeedLogo" />
              </Box>
              <Box>
                <img height={50} src={flowerIcon} alt="flowerIcon" />
              </Box>
            </Box>
            <DrawerCom />
          </>
        ) : (
          <Grid container>
            <Grid itme xs={2}>
              <Box display={"flex"} gap={"20px"}>
                <Link to='/'>
                  
                  <Box mt={"10px"}>
                  <img src={indeedlogo} alt="indeedLogo" />
                </Box>
                 
                </Link>
                <Box>
                  <img height={50} src={flowerIcon} alt="flowerIcon" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} >
              <Tabs
                indicatorColor="secondary"
                value={value2}
                onChange={(e, val) => setValue2(val)}
                textColor="inherit"
              >
                
                <Tab
                  label="Find Jobs"
                  value={routes[1]}
                  component={Link}
                  to={routes[1]}
                />
                <Tab
                  label="Company Review"
                  value={routes[2]}
                  component={Link}
                  to={routes[2]}
                />
                <Tab
                  label="Salary Guide"
                  value={routes[3]}
                  component={Link}
                  to={routes[3]}
                />
               

              </Tabs>
            </Grid>
            {/* <Grid item xs={1} /> */}
            <Box itme xs={4} >
              <Box>
                <Tabs
                  indicatorColor="secondary"
                  value={value}
                  onChange={(e, val) => setValue(val)}
                  textColor="inherit"
                >
                  {user?.displayName ? (
                    <>
                     <Box mt={'15px'} mr='15px' display='flex' gap='30px'>
                

      

                   <Link style={{ color:'black'}} to='/notification'> <BsFillChatLeftTextFill size={'25px'}/></Link>
                    <Link  style={{ color:'black'}}  to='/message'><BsFillBellFill size={'25px'}/></Link>

                    <UserModel/>
                </Box>
                    </>
                  ):(
                  <>
                  <Tab label="Post Your Resume" to="/" />
                  <Tab label="Sign In" sx={{ color: "#3757a7" }}  component={Link}
                  to={routes[4]}>
                    <Button>Sign In </Button>
                  </Tab>
                    </>
                  )}
  
                  
                  
                  
                  <Divider orientation="vertical" flexItem></Divider>
                  <Link style={{textDecoration:"none",color:"black"}} to="/postjobs" >
                    <Tab label="Employers/Post Job" />
                  </Link>
                  
                </Tabs>
              </Box>
            </Box>
          </Grid>
        )}
      </Toolbar>
    </Box>
  );
};

export default Navbar;