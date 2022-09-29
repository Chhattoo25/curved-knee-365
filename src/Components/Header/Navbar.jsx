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
  useTheme
} from "@mui/material";
import React, { useState } from "react";
import indeedlogo from "../../Images/indeedIcon.svg";
import flowerIcon from "../../Images/flowerIcon.png";
import DrawerCom from "./DrawerCom";


const links = ['Find Jobs','Comapny Review', 'Salary Guide']
const Navbar = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  console.log(isMatch);
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  return (
    <AppBar sx={{bgcolor:'white',color:'black',boxShadow:'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px'}}>
      <Toolbar>

        {
          isMatch?<>
           <Box display={"flex"} gap={"20px"}>
              <Box mt={"10px"}>
                <img src={indeedlogo} alt="indeedLogo" />
              </Box>
              <Box>
                <img height={50} src={flowerIcon} alt="flowerIcon" />
              </Box>
            </Box>
          <DrawerCom/>
          </>
          : <Grid container >
          <Grid itme xs={2}>
            <Box display={"flex"} gap={"20px"}>
              <Box mt={"10px"}>
                <img src={indeedlogo} alt="indeedLogo" />
              </Box>
              <Box>
                <img height={50} src={flowerIcon} alt="flowerIcon" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Tabs
              indicatorColor="secondary"
              value={value2}
              onChange={(e, val) => setValue2(val)}
              textColor="inherit"
            >
              <Tab label="Find Jobs" />
              <Tab label="Company Review" />
              <Tab label="Salary Guide" />
              {/* {
  links.map((link,index)=>{
    <Tab key={index} label={link} />
  })
} */}
            </Tabs>
          </Grid>
          {/* <Grid item xs={1} /> */}
          <Grid itme xs={4}>
            <Box>
              <Tabs
                indicatorColor="secondary"
                value={value}
                onChange={(e, val) => setValue(val)}
                textColor="inherit"
              >
                <Tab label="Post Your Resume" />
               <Tab as={Button} label="Sign In" sx={{color:'#3757a7'}}>
                 <Button>Sign In </Button>
                </Tab>
                <Divider orientation="vertical" flexItem>
  
  </Divider>
                <Tab label="Employers/Post Job" />
  
              </Tabs>
            </Box>
          </Grid>
        </Grid>
        }
       
    
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import indeedlogo from "../../Images/indeedIcon.svg";
// import flowerIcon from "../../Images/flowerIcon.png";
// import { Flex } from "@chakra-ui/react";
// import { NavLink } from "react-router-dom";
// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" border="2px solid red" bg="white">
//       <Container maxWidth="100%">
//         <Toolbar
//           sx={{
//             backgroundColor: "white",
//             color: "black",
//             borderBottom: 1,
//             borderColor: "divider",
//           }}
//         >
//           <Box display={'flex'} gap={"20px"}>
//             <Box mt={"10px"}>
//               <img src={indeedlogo} alt="indeedLogo" />
//             </Box>
//             <Box>
//               <img height={50} src={flowerIcon} alt="flowerIcon" />
//             </Box>
//           </Box>

//           <Box sx={{display:'flex',gap:{xs:"10px" , sm:"10px" , md:"10px" , lg:"20px" , xl:"20px"} , fontSize:{xs:"10px" , sm:"10px" , md:"10px" , lg:"18px" , xl:"16px"} ,marginLeft:'30px'}} >
//             <Box>
//               <Typography variant="body1">Find Jobs</Typography>
//             </Box>

//             <Box>
//               <Typography variant="body1">Company Reviews</Typography>
//             </Box>

//             <Box>
//               <Typography variant="body1">Salary Guide</Typography>
//             </Box>
//           </Box>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>

//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import indeedlogo from "../../Images/indeedIcon.svg";
// import flowerIcon from "../../Images/flowerIcon.png";
// const pages = [
//   {
//     name: "Home",
//     path: "/",
//   },
//   {
//     name: "Find Jobs",
//     path: "/findjobs",
//   },
//   {
//     name: "Comapny Review",
//     path: "/companyreview",
//   },
//   {
//     name: "Salary Guide",
//     path: "/salaryguide",
//   },
// ];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" back>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Box display={"flex"} gap={"20px"}>
//             <Box mt={"10px"}>
//               <img src={indeedlogo} alt="indeedLogo" />
//             </Box>
//             <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
//               <img height={50} src={flowerIcon} alt="flowerIcon" />
//             </Box>{" "}
//           </Box>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map(({ name, path }) => (
//                 <MenuItem key={path} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{name}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map(({ name, path }) => (
//               <Button
//                 key={path}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {name}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>

//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;
