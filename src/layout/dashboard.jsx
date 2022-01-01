import * as React from "react";
import { styled } from "@mui/material/styles";
import Header from "./header/header";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Sidebar from "./sidebar/sidebar";
import Overview from "../views/overview";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={0}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Header />
          <Overview />
        </Grid>
      </Grid>
    </Box>
  );
}
