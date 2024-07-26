import React from "react";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar/";
import { ListItemText } from "@mui/material";

function AppBarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>My Bags</AppbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Caregories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
      </MyList>
    </AppbarContainer>
  );
}

export default AppBarDesktop;
