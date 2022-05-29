import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CommentIcon from "@mui/icons-material/Comment";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

import { Link } from "react-router-dom";

const drawerWidth = 240;
export default function DrawerComponent() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <PostAddIcon sx={{ marginRight: "8px" }} />
              <Link to="/Posts" sx={{ textUnderline: "none" }}>
                Posts
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <PhotoLibraryIcon sx={{ marginRight: "8px" }} />
              <Link to="/albums" sx={{ textUnderline: "none" }}>
                Albums
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <CommentIcon sx={{ marginRight: "8px" }} />
              <Link to="/comments" sx={{ textUnderline: "none" }}>
                Comments
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <AddAPhotoIcon sx={{ marginRight: "8px" }} />
              <Link to="/photos" sx={{ textUnderline: "none" }}>
                Photos
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListAltIcon sx={{ marginRight: "8px" }} />
              <Link to="/todos" sx={{ textUnderline: "none" }}>
                Todos
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <PersonOutlineIcon sx={{ marginRight: "8px" }} />
              <Link to="/users" sx={{ textUnderline: "none" }}>
                Users
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
