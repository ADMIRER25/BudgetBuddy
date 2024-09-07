import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions.js";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);
  console.log(chartData);
  return (
    <Card
      sx={{
        borderBottom:
          title === "Income"
            ? "10px solid rgba(0, 255, 0, 0.5)"
            : "10px solid rgba(255, 0, 0, 0.5)",
      }}
    >
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">&#8377;{total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
