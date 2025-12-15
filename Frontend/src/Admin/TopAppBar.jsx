// components/dashboard/TopAppBar.jsx
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const TopAppBar = ({ onLogout }) => {
  return (
    <AppBar position="static" sx={{ background: "#000" }}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Admin Dashboard
        </Typography>
        <IconButton color="inherit" onClick={onLogout}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;
