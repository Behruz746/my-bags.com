import React from "react";
import {
  MyList,
  ActionIconContainerDesktop,
  ActionIconContainerMobile,
} from "../../styles/appbar";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Colors } from "../../styles/theme";

function Actions({ matches }) {
  const Component = matches
    ? ActionIconContainerMobile
    : ActionIconContainerDesktop;

  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              color: matches && Colors.secondary,
              justifyContent: "center",
            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              color: matches && Colors.secondary,
              justifyContent: "center",
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              color: matches && Colors.secondary,
              justifyContent: "center",
            }}
          >
            <AccountCircleIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  );
}

export default Actions;
