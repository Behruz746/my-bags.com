import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar/";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Actions from "./Actions";

function AppBarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>My Bags</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Caregories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}

export default AppBarDesktop;
