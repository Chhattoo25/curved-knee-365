import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./CompanyReview.module.css";
const ComapanyReview = () => {
  return (
    <>
      <Box sx={{ width: "70%", margin: "auto", m: "150px 400px 0px 00px" }}>
        <Box sx={{}}>
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
        </Box>
        <Box display={"flex"}>
          <TextField
            sx={{ width: "860px", margin: "6px 0 0 3px" }}
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
            variant="contained"
            sx={{
              width: "300px",
              margin: "5.3px 0 0 50px",
              height: "40px",
              fontWeight: "bold",
            }}
            size="small"
          >
            Find Companies
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ComapanyReview;
