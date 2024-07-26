import styled from "@emotion/styled";
import { Typography, Box, List } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez";

// container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

// header
export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontFamily: "'Montez', 'cursive'",
  fontSize: "4em",
  color: Colors.secondary,
}));

// list
export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));
