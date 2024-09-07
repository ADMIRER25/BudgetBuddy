import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import Form from "./form/Form.jsx";
import List from "./list/List.jsx";
import { ExpenseTrackerContext } from "../../context/context.jsx";

const Main = () => {
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card
      sx={{
        padding: "20px",
        margin: "20px 10px 20px 10px",
      }}
    >
      <CardHeader title="Budget Buddy💰" subheader="Made With Love By Subha❣️" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance &#8377;{balance}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            lineHeight: "1.5em",
            marginTop: "20px",
          }}
        >
          {/* Info Card Component */}
          {/* Try saying: Add income for $100 in Category Salary for Monday */}
          Now You Can Manage <br />
          Your Money Using <br />
          Me :)
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent
        sx={{
          paddingTop: 0,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
