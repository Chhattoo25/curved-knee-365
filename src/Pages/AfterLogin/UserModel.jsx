import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { BsFillPersonFill } from "react-icons/bs";
import PersonIcon from "@mui/icons-material/Person";
import { UserAuth } from "../../Context/AuthContext";
import DescriptionIcon from '@mui/icons-material/Description';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReviewsIcon from '@mui/icons-material/Reviews';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';




export default function UserModel() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <BsFillPersonFill
              size={"30px"}
              color="black"
              style={{ marginTop: "-14px" }}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Box >
      <Menu
       
       anchorEl={anchorEl}
       id="account-menu"
       open={open}
       onClose={handleClose}
       onClick={handleClose}
       PaperProps={{
         elevation: 0,
         sx: {
           width:'370px',
           overflow: "visible",
           filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
           mt: 1.5,
           "& .MuiAvatar-root": {
             width: 32,
             height: 32,
             ml: -0.5,
             mr: 2,
           },
           "&:before": {
             content: '""',
             display: "block",
             position: "absolute",
             top: 0,
             right: 14,
             width: 10,
             height: 10,
             bgcolor: "background.paper",
             transform: "translateY(-50%) rotate(45deg)",
             zIndex: 0,
           },
         },
       }}
       transformOrigin={{ horizontal: "right", vertical: "top" }}
       anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
     >
       <MenuItem>
         <Typography fontWeight={'bold'}>{user.email}</Typography>
       </MenuItem>
      <Box mt={'20px'}>
      <MenuItem  >
        <DescriptionIcon mr='15px'/> 
        <Typography ml={'15px'}>Profile</Typography>
       </MenuItem>
      </Box>

      <Box mt={'20px'}>
      <MenuItem  >
        <FavoriteIcon mr='15px'/> 
        <Typography ml={'15px'}>My Jobs</Typography>
       </MenuItem>
      </Box>

      <Box mt={'20px'}>
      <MenuItem  >
        <ReviewsIcon mr='15px'/> 
        <Typography ml={'15px'}>My Reviews</Typography>
       </MenuItem>
      </Box>

      <Box mt={'20px'}>
      <MenuItem  >
        <MailIcon mr='15px'/> 
        <Typography ml={'15px'}>Email Setting</Typography>
       </MenuItem>
      </Box>

      <Box mt={'20px'}>
      <MenuItem  >
        <SettingsIcon mr='15px'/> 
        <Typography ml={'15px'}>Setting</Typography>
       </MenuItem>
      </Box>

      <Box mt={'20px'}>
      <MenuItem  >
        <HelpIcon mr='15px'/> 
        <Typography ml={'15px'}>Help Centre</Typography>
       </MenuItem>
      </Box>
       <Divider />
      
    <Box padding={'10px 0px 10px 0px'}>
    <MenuItem onClick={handleSignOut}>
         <ExitToAppIcon>
           <Logout fontSize="small" />
         </ExitToAppIcon>
        <Typography ml={'100px'} fontWeight='bold' color={'#4468aa'}> Sign Out</Typography>
       </MenuItem>
    </Box>
     </Menu>
      </Box>
      
    </React.Fragment>
  );
}
