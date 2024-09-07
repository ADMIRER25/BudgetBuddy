import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const CustomizedSnackbars = ({ open, setOpen, msg, severity }) => {
  const handleClose = (event, reason) => {
    //console.log(reason); //if you click on the cross before autoHideDuration then the reason will be undefined but after the autoHideDuration it will be timeout
    console.log({ msg, severity });
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          elevation={6}
          sx={{ width: "100%" }}
        >
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbars;
