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
import DrawerCom from "../../Components/Header/DrawerCom";
import { Link, Route } from "react-router-dom";
import { BsFillBellFill, BsFillChatLeftTextFill, BsFillPersonFill } from "react-icons/bs";
import AccountMenu from "./UserModel";

const routes = ["/", "/findjobs", "/companyreview", "/salaryguide", "signin"];
const AfterNavbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  return (
    // <Route path='/' render={()=>{

    // }} />
    <AppBar
      sx={{
        bgcolor: "white",
        mt:'15vh',
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
                <Link to="/">
                  <Box mt={"10px"}>
                    <img src={indeedlogo} alt="indeedLogo" />
                  </Box>
                </Link>
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
               
                  

                  <Divider orientation="vertical" flexItem></Divider>
                  <Tab label="Employers/Post Job" />
                </Tabs>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AfterNavbar;
