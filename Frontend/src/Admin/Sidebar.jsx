import React from 'react';
import {Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";

const Sidebar = () => {
  return (
    <>
      <Drawer
      variant="permanent"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 350,
          background: "#111827",
          color: "#fff",
          borderRight: "none",
        },
      }}
    >
        <Typography variant='h6' align='center' sx={{my: 2, fontWeight: "bold"}}>
            Admin Panel
        </Typography>
        <List>
            {[
                { text: "Dashboard", icon: <DashboardIcon /> },
                { text: "Users", icon: <PeopleIcon /> },
            ].map((item) => {
                return(
                    <ListItem button key={item.text} sx={{"&:hover": { background: "#1f2937" }}}>
                        <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItem>
                )
            })}
        </List>
      </Drawer>
      
    </>
  )
}

export default Sidebar
