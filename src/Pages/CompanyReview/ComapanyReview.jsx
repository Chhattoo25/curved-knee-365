import {
  Box,
  Button,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./CompanyReview.module.css";
import HoverRating from "./HoveRating";
import PopularCompanies from "./PopularCompanies";
import CompanyWorking from "./ComapreWork";
import { borderRadius } from "@mui/system";
import { Footer } from "./Footer";
import writing_icon from '../../Images/writing_icon.png'
const ComapanyReview = () => {
  return (
    <>
      <Box sx={{ width: "100%", mt: "19vh" }}>
        <Box
          sx={{
            width: {sm:'100%',md:'80%',lg:'70%'},
            m: "auto",
            justifyContent: "center",
            p: "20px",
         
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "40px", fontWeight: "bold", color: "#414141" }}
          >
            Find great places to work
          </Typography>
          <Typography variant="h5" sx={{ mt: "15px", mb: "25px" }}>
            Get access to millions of company reviews
          </Typography>
          <Typography style={{ fontWeight: "bold" }}>
            Company name or job title
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
          >
            <TextField
              sx={{
                width: { sm: "100%", md: "80%", lg: "80%" },
                margin: "6px 3px 6px 3px",
                borderRadius: "40px",
              }}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <Button
              sx={{
                bgcolor: "#2557a7",

                color: "#babde5",
                width: { sm: "100%", md: "20%", lg: "20%" },
                m: { xs: "10px 10px", sm: "10px 10px", lg: "6px 3px" },
                height: "40px",
                fontWeight: "bold",
              }}
              size="small"
            >
              Find Companies
            </Button>
          </Box>
          <Link href="/salryguide" underline="always">
            Do you want to search for salaries?
          </Link>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: "40px", color: "#414141" }}
          >
            Popular Comapnies
          </Typography>
          <Box>
            <PopularCompanies />
          </Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mt: "40px", color: "#414141" }}
          >
            Compare working at
          </Typography>

          <Box>
            <CompanyWorking />
          </Box>

          <Box
            sx={{
              width: "100%",
              background: "#f5fbf9",
              height: {sm:'150px',md:'100px'},
              mt: "70px",
              borderRadius: "5px",
            }}
          >
            <Box
              sx={{
                w: "90%",
                m: "auto",
                height:{sm:'150px',md:'100px'},
                padding: "22px 6px 12px 6px",
                mt: "15px",
              }}
            >
              <Box display={"flex"} justifyContent="center" gap="15px">
                <img src={writing_icon} alt='writitng_icon' width={'40px'} margitRight='8%'/>
                <Typography variant="h6" fontWeight={"bold"}>
                  Rate Your Recent Comapny :
                </Typography>
                <Box>
                  <HoverRating />
                </Box>
              </Box>
            </Box>
          </Box>
        

        {/* footer  */}
        <Box mt='100px'>
          <Footer/>
        </Box>
        </Box>
      </Box>
    </>
  );
};

export default ComapanyReview;
