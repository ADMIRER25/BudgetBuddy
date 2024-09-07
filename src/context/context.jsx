import React, { useReducer, createContext, useState } from "react";
import contextReducer from "./contextReducer.js";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  // console.log(transactions);
  //action creators
  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });

  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  const balance = transactions.reduce((acc, currVal) => {
    if (currVal.type === "Income") acc += currVal.amount;
    else acc -= currVal.amount;
    return acc;
  }, 0);
  console.log(balance);

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
