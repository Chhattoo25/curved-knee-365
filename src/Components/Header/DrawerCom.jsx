import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const DrawerCom = () => {
                    
const[open,setOpen] = useState(false)
  return (
    <>
<Drawer anchor='right' open={open} onClose={()=>setOpen(false)}>

<List>

<ListItemButton onClick={()=>setOpen(false)} divider>
<ListItemIcon>
<ListItemText>Find Jobs</ListItemText>
</ListItemIcon>
</ListItemButton>

<ListItemButton onClick={()=>setOpen(false)} divider>
<ListItemIcon>
<ListItemText>Company Review</ListItemText>
</ListItemIcon>
</ListItemButton>

<ListItemButton onClick={()=>setOpen(false)} divider>
<ListItemIcon>
<ListItemText>Salary Guide</ListItemText>
</ListItemIcon>
</ListItemButton>
</List>
</Drawer>
<IconButton sx={{marginLeft:'auto'}} onClick={()=>setOpen(!open)}>
<MenuRoundedIcon/>
</IconButton>
    </>
  )
}

export default DrawerCom