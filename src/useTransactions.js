import React, { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context.jsx";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories.js";

const useTransactions = (title) => {
  const { transactions } = useContext(ExpenseTrackerContext);
  const rightTransactions = transactions.filter((t) => t.type === title);
  const total = rightTransactions.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
    // console.log({ category });
  });
  const filteredCategories = categories.filter((sc) => sc.amount > 0);
  //console.log({ rightTransactions, total, categories, filteredCategories });
  const chartData = {
    labels: filteredCategories.map((c) => c.type),
    datasets: [
      {
        label: "My Transactions",
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
        borderColor: filteredCategories.map((c) => c.color),
      },
    ],
  };
  resetCategories();
  return { filteredCategories, total, chartData };
};

export default useTransactions;
