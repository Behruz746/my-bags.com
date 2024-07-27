import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import AppBarMobile from "./AppBarMobile";
import AppBarDesktop from "./appBarDesktop";

export default function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
        <AppBarMobile matches={matches} />
      ) : (
        <AppBarDesktop matches={matches} />
      )}
    </>
  );
}
