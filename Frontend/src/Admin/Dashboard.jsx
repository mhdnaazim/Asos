import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  Button,
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
import axios from "axios";

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

  const MenuItems = [
    { text: "Manage Users", icon: <PeopleIcon /> },
    { text: "Manage Products", icon: <InventoryIcon /> },
    { text: "Manage Womens", icon: <InventoryIcon /> },
  ];

  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };





  const URL = import.meta.env.VITE_API_URL;
  const fileRef = useRef();
  const { id } = useParams();
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [userList, setUserList] = useState([]);
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({
    name: "",
    image: null,
    price: "",
    color: "",
    size: "",
    quantity: ""
  });
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    price: "",
    color: "",
    size: "",
    quantity: "",
    image: ""
  });


  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${URL}/user/fetchUsers`);
      setUserList(response.data);
    } catch (error) {
    };
  };


  const handleProducts = async () => {
    try {
      const response = await axios.get(`${URL}/product/getProduct`);
      setProducts(response.data)
    } catch (error) {
    };
  };




  const handleOpenEdit = async (productId) => {
    try {
      const res = await axios.get(`${URL}/product/editProduct/${productId}`);
      const p = res.data;

      setEditData({
        id: p.id,
        name: p.name,
        price: p.price,
        color: p.color,
        size: p.size,
        quantity: p.quantity,
        image: p.image
      });

      setOpenEdit(true);
    } catch (error) {
      console.log(error);
    };
  };


  const handleUpdateProduct = async () => {
    const { name, price, color, size, quantity, image } = editData;

    if (!name || !price || !color || !size || !quantity) {
      alert("All fields required!");
      return;
    }

    try {
      const form = new FormData();

      form.append("name", name);
      form.append("price", price);
      form.append("color", color);
      form.append("size", size);
      form.append("quantity", quantity);

      const response = await axios.put(`${URL}/product/updateProduct/${editData.id}`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Product updated successfully");
        handleProducts();
        setOpenEdit(false)
      } else {
        console.log(error);
      }

    } catch (error) {

    }

  };


  const handleEditChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setEditData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setEditData((prev) => ({ ...prev, [name]: value }));
    }
  };


  const handleDelete = async (userid) => {
    try {
      await axios.delete(`${URL}/user/delUser/${userid}`);
      fetchUsers()
      return;
    } catch (error) {
    }
  }


  const handleDeleteProduct = async (id) => {
    try {
      const res = await axios.delete(`${URL}/product/deleteProduct/${id}`);

      if (res.status === 200) {
        alert("Product deleted Successfully")
      }
      handleProducts();
      return;

    } catch (error) {
    }
  }

  const handleUpload = async () => {
    try {
      const form = new FormData();
      form.append("name", data.name);
      form.append("price", data.price);
      form.append("color", data.color);
      form.append("size", data.size);
      form.append("quantity", data.quantity);

      if (data.image) {
        form.append("file", data.image);
      }

      const response = await axios.post(`${URL}/product/addProduct`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        alert("Product Successfully Added");

        // reset
        setData({
          name: "",
          image: null,
          price: "",
          color: "",
          size: "",
          quantity: ""
        });
        if (fileRef.current) fileRef.current.value = "";
      }
      handleProducts();
      return;

    } catch (error) {
      console.log(error);
    }
  };


  const handleChangeUpload = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setData((prev) => ({ ...prev, image: files && files[0] ? files[0] : null }))
      console.log("selected file:", files && files[0]);
    } else {
      setData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleEdit = (userid) => {
    navigate(`/edit/${userid}`)
  }


  JSON.parse(localStorage.getItem("loggedUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedUser")
    navigate("/login");
  };



  // WOMENS SERVICES

  const [openEditWomen, setOpenEditWomen] = useState(false)
  const [womenList, setWomenList] = useState([]);
  const [womenData, setWomenData] = useState({
    name: "",
    image: null,
    price: "",
    color: "",
    size: "",
    quantity: ""
  });
  const [editWomen, setEditWomen] = useState({
    id: "",
    name: "",
    price: "",
    color: "",
    size: "",
    quantity: "",
    image: ""
  })

  const handleChangeWomen = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setWomenData((prev) => ({ ...prev, image: files && files[0] ? files[0] : null }))
      console.log("selected file:", files && files[0]);
    } else {
      setWomenData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const fetchWomenProducts = async () => {
    try {
      const res = await axios.get(`${URL}/women/getWomens`);
      setWomenList(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteWomens = async (id) => {
    const res = await axios.delete(`${URL}/women/deleteWomen/${id}`);
    if (res.status === 200) {
      alert("Product Deleted Successfully");
      fetchWomenProducts();
    } else {
      alert("DELETION FAILED");
    };
  };

  const handleAddWomen = async () => {
    try {
      const form = new FormData();
      form.append("name", womenData.name);
      form.append("price", womenData.price);
      form.append("color", womenData.color);
      form.append("size", womenData.size);
      form.append("quantity", womenData.quantity);

      if (womenData.image) {
        form.append("file", womenData.image);
      };

      const response = await axios.post(`${URL}/women/addWomens`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      if (response.status === 200) {
        alert("Product Added Successfully")
      }

      setWomenData({
        name: "",
        image: null,
        price: "",
        color: "",
        size: "",
        quantity: ""
      });

      if (fileRef.current) {
        fileRef.current.value = "";
      };

      fetchWomenProducts();
      return;

    } catch (error) {
      console.log(error);
    };
  };


  const handleEditWomen = async (id) => {
    try {
      const response = await axios.get(`${URL}/women/editWomen/${id}`);
      const p = response.data;

      setEditWomen({
        id: p.id,
        name: p.name,
        price: p.price,
        color: p.color,
        size: p.size,
        quantity: p.quantity,
        image: p.image
      });

      setOpenEditWomen(true);

    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdateWomen = async (id) => {
    const { name, price, color, size, quantity } = editWomen;

    if (!name || !price || !color || !size || !quantity) {
      alert("All fields required!");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("price", price);
      formData.append("color", color);
      formData.append("size", size);
      formData.append("quantity", quantity);

      const res = await axios.put(`${URL}/women/updateWomen/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )

      if (res.status === 200) {
        alert("Product Updated Successfully");
        fetchWomenProducts();
        setOpenEditWomen(false);
      } else {
        console.log(error);
      }

    } catch (error) {

    }

  }

  const handleEditWomenChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setEditWomen((prev) => ({ ...prev, image: files[0] }));
    } else {
      setEditWomen((prev) => ({ ...prev, [name]: value }));
    }
  }


  useEffect(() => {
    fetchUsers();
    handleProducts();
    fetchWomenProducts();
  }, []);

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
              <ChevronRightIcon />
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
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>
                        Id
                      </TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>
                        Email
                      </TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>
                        Password
                      </TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>
                        Interest
                      </TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>
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
                    {userList
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((item) => (
                        <TableRow
                          sx={{
                            "&:hover": {
                              backgroundColor: "#f9f9f9",
                            },
                          }}
                        >
                          <TableCell>{item.userid}</TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.password}</TableCell>
                          <TableCell>{item.interest}</TableCell>
                          <TableCell>{item.usertype}</TableCell>
                          <TableCell align="center">
                            <IconButton onClick={() => handleEdit(item.userid)} color="primary" size="small" title="Edit" sx={{ mr: 1 }}>
                              <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => handleDelete(item.userid)} color="error" size="small" title="Delete">
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
                  count={userList.length}
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
              {/* Heading + Button Row */}
              <Box
                sx={{
                  height: "min-content",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontFamily: "Poppins" }}
                >
                  MENS
                </Typography>

                <Button
                  variant="contained"
                  onClick={() => setShowAddProduct(true)}
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    textTransform: "none",
                    borderRadius: "7px",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  ADD PRODUCT
                </Button>

              </Box>

              {/* Table */}
              <TableContainer
                component={Paper}
                sx={{
                  borderRadius: "15px",
                  boxShadow: "0 3px 15px rgba(0,0,0,0.05)",
                }}
              >
                <Table>
                  <TableHead sx={{ backgroundColor: "black" }}>
                    <TableRow>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>Id</TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>Name</TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>Price</TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>Color</TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>Size</TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>Quantity</TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>Image</TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff", fontWeight: "bold" }}
                      >
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((item) => (
                        <TableRow
                          sx={{
                            "&:hover": {
                              backgroundColor: "#f9f9f9",
                            },
                          }}
                        >
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.price}</TableCell>
                          <TableCell>{item.color}</TableCell>
                          <TableCell>{item.size}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>{item.image}</TableCell>
                          <TableCell align="center">
                            <IconButton
                              color="primary"
                              size="small"
                              sx={{ mr: 1 }}
                              onClick={() => handleOpenEdit(item.id)}
                            >
                              <EditIcon />
                            </IconButton>

                            <IconButton onClick={() => handleDeleteProduct(item.id)} color="error" size="small">
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
                  count={products.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableContainer>

              {showAddProduct && (
                <Box
                  sx={{
                    mt: 4,
                    p: 3,
                    borderRadius: "12px",
                    bgcolor: "#fafafa",
                    border: "1px solid #ddd",
                    boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                    fontFamily: "Poppins",
                    maxWidth: 500
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Add New Product
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

                    {/* Name */}
                    <input
                      type="text"
                      placeholder="Product Name"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: "1px solid #bbb",
                        fontFamily: "Poppins",
                        outline: "none",
                      }}
                      name="name"
                      value={data.name}
                      onChange={handleChangeUpload}
                    />

                    {/* Price */}
                    <input
                      type="text"
                      placeholder="Price"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: "1px solid #bbb",
                        fontFamily: "Poppins",
                        outline: "none",
                      }}
                      name="price"
                      value={data.price}
                      onChange={handleChangeUpload}
                    />

                    {/* Color */}
                    <input
                      type="text"
                      placeholder="Color"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: "1px solid #bbb",
                        fontFamily: "Poppins",
                        outline: "none",
                      }}
                      name="color"
                      value={data.color}
                      onChange={handleChangeUpload}
                    />

                    {/* Size */}
                    <select
                      name="size"
                      value={data.size}
                      onChange={handleChangeUpload}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: "1px solid #bbb",
                        fontFamily: "Poppins",
                        outline: "none",
                      }}
                    >
                      <option value="">Select Size</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>


                    {/* Quantity */}
                    <input
                      type="text"
                      placeholder="Quantity"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: "1px solid #bbb",
                        fontFamily: "Poppins",
                        outline: "none",
                      }}
                      name="quantity"
                      value={data.quantity}
                      onChange={handleChangeUpload}
                    />

                    {/* Image upload */}
                    <input
                      type="file"
                      ref={fileRef}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: "1px solid #bbb",
                        fontFamily: "Poppins",
                        outline: "none",
                      }}
                      name="image"
                      onChange={handleChangeUpload}
                    />

                    {/* Submit */}
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                        color: "white",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "#333" },
                      }}
                      onClick={handleUpload}
                    >
                      Submit Product
                    </Button>

                    {/* Cancel */}
                    <Button
                      variant="outlined"
                      onClick={() => setShowAddProduct(false)}
                      sx={{
                        borderColor: "black",
                        color: "black",
                        textTransform: "none",
                      }}
                    >
                      Cancel
                    </Button>

                  </Box>
                </Box>

              )}


            </Box>

          )}

          {selected === "Manage Womens" && (
            <Box
              sx={{
                p: 3,
                bgcolor: "#fff",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                fontFamily: "Poppins",
              }}
            >
              {/* Heading + Button Row */}
              <Box
                sx={{
                  height: "min-content",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontFamily: "Poppins" }}
                >
                  WOMENS
                </Typography>

                <Button
                  variant="contained"
                  onClick={() => setShowAddProduct(true)}
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    textTransform: "none",
                    borderRadius: "7px",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  ADD PRODUCT
                </Button>

              </Box>

              {/* Table */}
              <TableContainer
                component={Paper}
                sx={{
                  borderRadius: "15px",
                  boxShadow: "0 3px 15px rgba(0,0,0,0.05)",
                }}
              >
                <Table>
                  <TableHead sx={{ backgroundColor: "black" }}>
                    <TableRow>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>Id</TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>Name</TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>Price</TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>Color</TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>Size</TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>Quantity</TableCell>
                      <TableCell sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "1px" }}>Image</TableCell>
                      <TableCell
                        align="center"
                        sx={{ color: "#fff", fontWeight: "bold" }}
                      >
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {womenList
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((item) => (
                        <TableRow
                          sx={{
                            "&:hover": {
                              backgroundColor: "#f9f9f9",
                            },
                          }}
                        >
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.price}</TableCell>
                          <TableCell>{item.color}</TableCell>
                          <TableCell>{item.size}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>
                            {item.image}

                          </TableCell>
                          <TableCell align="center">
                            <IconButton
                              color="primary"
                              size="small"
                              sx={{ mr: 1 }}
                              onClick={() => handleEditWomen(item.id)}
                            >
                              <EditIcon />
                            </IconButton>

                            <IconButton onClick={() => handleDeleteWomens(item.id)} color="error" size="small">
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
                  count={products.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableContainer>

              {showAddProduct && (
                <Box
                  sx={{
                    mt: 4,
                    p: 3,
                    borderRadius: "12px",
                    bgcolor: "#fafafa",
                    border: "1px solid #ddd",
                    boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                    fontFamily: "Poppins",
                    maxWidth: 500
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Add New Product
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

                    {/* Name */}
                    <input
                      type="text"
                      placeholder="Product Name"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: "1px solid #bbb",
                        fontFamily: "Poppins",
                        outline: "none",
                      }}
                      name="name"
                      value={womenData.name}
                      onChange={handleChangeWomen}
                    />

                    {/* Price */}
                    <input
                      type="text"
                      placeholder="Price"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: "1px solid #bbb",
                        fontFamily: "Poppins",
                        outline: "none",
                      }}
                      name="price"
                      value={womenData.price}
                      onChange={handleChangeWomen}
                    />

                    {/* Color */}
                    <input
                      type="text"
                      placeholder="Color"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: "1px solid #bbb",
                        fontFamily: "Poppins",
                        outline: "none",
                      }}
                      name="color"
                      value={womenData.color}
                      onChange={handleChangeWomen}
                    />

                    {/* Size */}
                    <select
                      name="size"
                      value={womenData.size}
                      onChange={handleChangeWomen}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: "1px solid #bbb",
                        fontFamily: "Poppins",
                        outline: "none",
                      }}
                    >
                      <option value="">Select Size</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>


                    {/* Quantity */}
                    <input
                      type="text"
                      placeholder="Quantity"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: "1px solid #bbb",
                        fontFamily: "Poppins",
                        outline: "none",
                      }}
                      name="quantity"
                      value={womenData.quantity}
                      onChange={handleChangeWomen}
                    />

                    {/* Image upload */}
                    <input
                      type="file"
                      ref={fileRef}
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        borderRadius: "6px",
                        border: "1px solid #bbb",
                        fontFamily: "Poppins",
                        outline: "none",
                      }}
                      name="image"
                      onChange={handleChangeWomen}
                    />

                    {/* Submit */}
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                        color: "white",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "#333" },
                      }}
                      onClick={handleAddWomen}
                    >
                      Submit Product
                    </Button>

                    {/* Cancel */}
                    <Button
                      variant="outlined"
                      onClick={() => setShowAddProduct(false)}
                      sx={{
                        borderColor: "black",
                        color: "black",
                        textTransform: "none",
                      }}
                    >
                      Cancel
                    </Button>

                  </Box>
                </Box>

              )}


            </Box>

          )}
        </Box>
      </Box>
      {openEdit && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              width: 400,
              p: 4,
              bgcolor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Edit Product
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleEditChange}
                placeholder="Product Name"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #bbb",
                  fontFamily: "Poppins",
                  outline: "none",
                }}
              />
              <input
                type="text"
                name="price"
                value={editData.price}
                onChange={handleEditChange}
                placeholder="Price"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #bbb",
                  fontFamily: "Poppins",
                  outline: "none",
                }}
              />
              <input
                type="text"
                name="color"
                value={editData.color}
                onChange={handleEditChange}
                placeholder="Color"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #bbb",
                  fontFamily: "Poppins",
                  outline: "none",
                }}
              />
              <select
                name="size"
                value={editData.size}
                onChange={handleEditChange}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #bbb",
                  fontFamily: "Poppins",
                  outline: "none",
                }}
              >
                <option value="">Select Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>

              <input
                type="text"
                name="quantity"
                value={editData.quantity}
                onChange={handleEditChange}
                placeholder="Quantity"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #bbb",
                  fontFamily: "Poppins",
                  outline: "none",
                }}
              />

              <input
                type="file"
                name="image"
                onChange={(e) =>
                  setEditData((prev) => ({ ...prev, image: e.target.files[0] }))
                }
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #bbb",
                  fontFamily: "poppins",
                  outline: "none"
                }}
              />

              <Button
                variant="contained"
                sx={{ background: "black" }}
                onClick={handleUpdateProduct}
              >
                Update
              </Button>

              <Button
                variant="outlined"
                sx={{ borderColor: "black", color: "black" }}
                onClick={() => setOpenEdit(false)}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      )}


      {openEditWomen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              width: 400,
              p: 4,
              bgcolor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Edit Product
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <input
                type="text"
                name="name"
                value={editWomen.name}
                onChange={handleEditWomenChange}
                placeholder="Product Name"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #bbb",
                  fontFamily: "Poppins",
                  outline: "none",
                }}
              />
              <input
                type="text"
                name="price"
                value={editWomen.price}
                onChange={handleEditWomenChange}
                placeholder="Price"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #bbb",
                  fontFamily: "Poppins",
                  outline: "none",
                }}
              />
              <input
                type="text"
                name="color"
                value={editWomen.color}
                onChange={handleEditWomenChange}
                placeholder="Color"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #bbb",
                  fontFamily: "Poppins",
                  outline: "none",
                }}
              />
              <select
                name="size"
                value={editWomen.size}
                onChange={handleEditWomenChange}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #bbb",
                  fontFamily: "Poppins",
                  outline: "none",
                }}
              >
                <option value="">Select Size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>

              <input
                type="text"
                name="quantity"
                value={editWomen.quantity}
                onChange={handleEditWomenChange}
                placeholder="Quantity"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #bbb",
                  fontFamily: "Poppins",
                  outline: "none",
                }}
              />

              <input
                type="file"
                name="image"
                onChange={(e) =>
                  setEditWomen((prev) => ({ ...prev, image: e.target.files[0] }))
                }
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid #bbb",
                  fontFamily: "poppins",
                  outline: "none"
                }}
              />

              <Button
                variant="contained"
                sx={{ background: "black" }}
                onClick={() => handleUpdateWomen(editWomen.id)}
              >
                Update
              </Button>

              <Button
                variant="outlined"
                sx={{ borderColor: "black", color: "black" }}
                onClick={() => setOpenEditWomen(false)}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      )}

    </Box>
  );
};

export default Dashboard;
