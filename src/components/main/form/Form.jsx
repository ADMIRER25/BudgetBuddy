import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { ExpenseTrackerContext } from "../../../context/context.jsx";
import { v4 as uuidv4 } from "uuid";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/categories.js";
import formatDate from "../../../utils/formatDate.js";
import CustomizedSnackbars from "../../snackbar/CustomizedSnackbars.jsx";

const Form = () => {
  const initialState = {
    type: "",
    category: "",
    amount: "",
    date: formatDate(new Date()),
  };
  console.log(initialState.date);
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const [formData, setFormData] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [severity, setSeverity] = useState("");
  const selectedCategories =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    if (
      transaction.type <= "" ||
      transaction.category <= "" ||
      transaction.amount <= 0
    ) {
      setMsg("Please fill all the sections correctly!!!");
      setSeverity("error");
      setOpen(true);
      return;
    }
    setMsg("Transaction Added Successfully.");
    setSeverity("success");
    setOpen(true);
    addTransaction(transaction);
    setFormData(initialState);
  };

  return (
    <Grid container spacing={2}>
      <CustomizedSnackbars
        open={open}
        setOpen={setOpen}
        msg={msg}
        severity={severity}
      />
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {selectedCategories.map((c) => (
              <MenuItem key={c.type} value={c.type}>
                {c.type}
              </MenuItem>
            ))}
            {/* <MenuItem value="business">Business</MenuItem>
            <MenuItem value="salary">Salary</MenuItem> */}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: formatDate(e.target.value) })
          }
        />
      </Grid>
      <Button
        sx={{ marginTop: "20px" }}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
