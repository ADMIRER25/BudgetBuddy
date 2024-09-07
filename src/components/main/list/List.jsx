import React, { useContext, useState } from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  IconButton,
  Slide,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { ExpenseTrackerContext } from "../../../context/context.jsx";
import CustomizedSnackbars from "../../snackbar/CustomizedSnackbars.jsx";

const List = () => {
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);
  const [open, setOpen] = useState(false);
  const severity = "success";
  return (
    <>
      <CustomizedSnackbars
        open={open}
        setOpen={setOpen}
        msg="Transaction Deleted Successfully"
        severity={severity}
      />
      <MUIList
        dense={false}
        sx={{
          maxHeight: "150px",
          overflow: "auto",
        }}
      >
        {transactions.map((transaction) => (
          <Slide
            direction="down"
            in
            mountOnEnter
            unmountOnExit
            key={transaction.id}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    backgroundColor:
                      transaction.type === "Income" ? "#4caf50" : "#f44336",
                  }}
                >
                  <CurrencyRupeeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={transaction.category}
                secondary={`₹${transaction.amount} - ${transaction.date}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => (
                    setOpen(true), deleteTransaction(transaction.id)
                  )}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </MUIList>
    </>
  );
};

export default List;
