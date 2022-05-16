import Chart from "../Chart/Chart";
import React from "react";

const ChartExpenses = (props) => {
  let chartArray = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const exp of props.expenses) {
    const expMonth = exp.date.getMonth();
    chartArray[expMonth].value += exp.amount;
  }
  return <Chart dataPoints = {chartArray} />;
};

export default ChartExpenses;
