import { Grid } from "@mui/material";
import React from "react";
import Cards from "../components/card/cards";
import { Chart } from "../components/charts/charts";
import { PieChart } from "../components/charts/pieChart";
import DataTable from "../components/table/table";
import Heading from "../layout/heading/heading";

const Overview = () => {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Heading/>
      </Grid>
      <Grid item container spacing={2}>
          <Cards />
      </Grid>

      <Grid item container spacing={6}>
      <Grid item xs lg={6}>
      <Chart />
      </Grid>
      <Grid item xs lg={3}>
      <PieChart />
      </Grid>
      <Grid item xs lg={3}>
      <PieChart />
      </Grid>
      </Grid>
      <Grid item>
          <DataTable />
      </Grid>
    </Grid>
  );
};

export default Overview;
