import * as React from "react";
import { useHistory} from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Colors, DrawerWidth } from "../styles/theme";
import Appbar from "./Appbar";
import { Dashboard, Group, Mail, Receipt, Settings } from "@mui/icons-material";
import { Typography } from "@mui/material";



const MyListItemButton = ({
  selected,
  icon,
  text,
  handleNavbarItemClicked,
}) => {
  return (
    <ListItemButton
      onClick={() => handleNavbarItemClicked(text)}
      sx={{
        ...(selected && {
          background: Colors.white,
          borderRadius: 2,
          fontWeight: "bold",
          color: Colors.black,
        }),
      }}
    >
      <ListItemIcon sx={{ color: selected && Colors.primary }}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function NavDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavbarItemClicked = (item) => {
    setSelectedItem(item);
    history.push(`/${item}`);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        sx={{
          width: DrawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DrawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        {open && <Typography variant="h6" noWrap component="div" color={Colors.black} fontWeight={'bold'}>
       Admin Dashboard
          </Typography>}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <MyListItemButton
              text={"dashboard"}
              icon={<Dashboard />}
              handleNavbarItemClicked={handleNavbarItemClicked}
              selected={selectedItem.includes('dashboard')}
            />
          </ListItem>
          <ListItem disablePadding>
            <MyListItemButton
              text={"products"}
              icon={<Receipt />}
              handleNavbarItemClicked={handleNavbarItemClicked}
              selected={selectedItem.includes('products')}
            />
          </ListItem>
          <ListItem disablePadding>
            <MyListItemButton
              text={"messages"}
              icon={<Mail />}
              handleNavbarItemClicked={handleNavbarItemClicked}
              selected={selectedItem.includes('messages')}
            />
          </ListItem>

          <ListItem disablePadding>
            <MyListItemButton
              text={"customers"}
              icon={<Group />}
              handleNavbarItemClicked={handleNavbarItemClicked}
              selected={selectedItem.includes('customers')}
            />
          </ListItem>

          <ListItem disablePadding>
            <MyListItemButton
              text={"settings"}
              icon={<Settings />}
              handleNavbarItemClicked={handleNavbarItemClicked}
              selected={selectedItem.includes('settings')}
            />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
