// components/dashboard/SideDrawer.jsx
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";

const menuItems = [
  { text: "Manage Users", icon: <PeopleIcon /> },
  { text: "Manage Products", icon: <InventoryIcon /> },
];

const SideDrawer = ({ open, selected, setSelected }) => {
  return (
    <Drawer variant="permanent" open={open}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton selected={selected === item.text} onClick={() => setSelected(item.text)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
