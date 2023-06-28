import React, { useEffect } from "react";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import StickyHeader from "./Header";
import Box from "@mui/material/Box";
import { Grid, Hidden } from "@mui/material";
import { useTheme } from "@mui/system";
import { useDispatch } from "react-redux";

export default function Layout({ children , wallet}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: theme.breakpoints.values.lg,
        margin: "0 auto",
      }}
    >
      <StickyHeader wallet={wallet}/>
      <Grid container spacing={2}>
        <Grid item xs={1} lg={2}>
          <LeftSidebar />
        </Grid>
        <Grid item xs={11} lg={10}>
          <Grid container>
            <Grid item xs={12} lg={8}>
              <Box
                sx={{
                  height: "100vh",
                  margin: "0 1rem",
                  borderLeft: "1px solid #ccc",
                  borderRight: "1px solid #ccc",
                }}
              >
                {children}
              </Box>
            </Grid>
            <Hidden lgDown>
              <Grid item lg={4} sx={{ height: "100vh" }}>
                <RightSidebar />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}