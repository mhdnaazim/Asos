import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LogoutIcon from "@mui/icons-material/Logout";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import asos from "../assets/Logo.svg";
import "../App.css";

const drawerWidth = 250;

// Drawer open mixin
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

// Drawer closed mixin
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// Drawer header for alignment
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

// Styled Drawer component
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Dashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Manage Users");
  
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  
  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleLogout = () => {
    navigate("/login");
  };

  const MenuItems = [
    { text: "Manage Users", icon: <PeopleIcon /> },
    { text: "Manage Products", icon: <InventoryIcon /> },
  ];

  // Sample user data
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Sarah Smith", email: "sarah@example.com", role: "User" },
    { id: 3, name: "Michael Lee", email: "michael@example.com", role: "User" },
    { id: 4, name: "Emma Brown", email: "emma@example.com", role: "Moderator" },
    { id: 5, name: "David Miller", email: "david@example.com", role: "User" },
    { id: 6, name: "Sophia Wilson", email: "sophia@example.com", role: "User" },
    { id: 7, name: "James Anderson", email: "james@example.com", role: "Admin" },
    { id: 8, name: "Olivia Taylor", email: "olivia@example.com", role: "Moderator" },
    { id: 9, name: "William Scott", email: "william@example.com", role: "User" },
    { id: 10, name: "Ava Thomas", email: "ava@example.com", role: "User" },
    { id: 11, name: "Lucas Clark", email: "lucas@example.com", role: "User" },
    { id: 12, name: "Mia White", email: "mia@example.com", role: "Moderator" },
  ];


  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{ display: "flex", bgcolor: "#f4f6f8" }}>
      {/* Sidebar */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <img
            style={{
              height: "25px",
              width: "80px",
              objectFit: "contain",
              marginRight: "100px",
            }}
            src={asos}
            alt="logo"
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />
        <List>
          {MenuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                selected={selected === item.text}
                onClick={() => setSelected(item.text)}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    transition: "all 0.3s ease",
                  },
                  open
                    ? { justifyContent: "initial" }
                    : { justifyContent: "center" },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                      color: selected === item.text ? "#000" : "#666",
                    },
                    open ? { mr: 2 } : { mr: "auto" },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                        opacity: 1,
                        color: selected === item.text ? "#000" : "#444",
                      }
                      : { opacity: 0 },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f4f6f8",
          minHeight: "100vh",
        }}
      >
        {/* Navigation Bar */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            background: "#000",
            color: "#fff",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <ChevronRightIcon />/
            </IconButton>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ fontFamily: "Poppins", flexGrow: 1, letterSpacing: "2px" }}
            >
              Admin Dashboard
            </Typography>

            {/* Logout button */}
            <IconButton
              color="inherit"
              onClick={handleLogout}
              aria-label="logout"
              edge="end"
              title="Logout"
            >
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Box sx={{ p: 4 }}>
          {selected === "Manage Users" && (
            <Box
              sx={{
                p: 3,
                bgcolor: "#fff",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                fontFamily: "Poppins",
              }}
            >
              <Typography variant="h6" gutterBottom
                sx={{
                  fontFamily: "Poppins",
                }}
              >
                Manage Users
              </Typography>

              {/* User Table with Pagination */}
              <TableContainer
                component={Paper}
                sx={{
                  borderRadius: "15px",
                  boxShadow: "0 3px 15px rgba(0,0,0,0.05)",
                  marginTop: "20px"
                }}
              >
                <Table>
                  <TableHead sx={{ backgroundColor: "black" }}>
                    <TableRow>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                        ID
                      </TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                        Email
                      </TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                        Password
                      </TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                        Usertype
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff", fontWeight: "bold" }}
                      >
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((user) => (
                        <TableRow
                          key={user.id + user.email}
                          sx={{
                            "&:hover": {
                              backgroundColor: "#f9f9f9",
                            },
                          }}
                        >
                          <TableCell>{user.id}</TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell align="center">
                            <IconButton color="primary" size="small" sx={{ mr: 1 }}>
                              <EditIcon />
                            </IconButton>
                            <IconButton color="error" size="small">
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 15]}
                  component="div"
                  count={users.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableContainer>
            </Box>
          )}

          {selected === "Manage Products" && (
            <Box
              sx={{
                p: 3,
                bgcolor: "#fff",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                fontFamily: "Poppins",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Manage Products
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manage all product details, categories, and stock.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
