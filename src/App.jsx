import "./App.css";
import Main from "./components/main/Main.jsx";
import Details from "./components/details/Details.jsx";
import { Grid } from "@mui/material";
function App() {
  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "100vh",
          "& > *": {
            margin: "8px 8px 8px 8px",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            padding: "10px 10px 10px 10px",
            display: {
              xl: "inline-block",
              md: "inline-block",
              xs: "none",
              sm: "none",
            },
          }}
        >
          <Details title="Income" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            paddingBottom: {
              xs: "10px", // Convert spacing to pixels
              sm: "10px",
            },
          }}
        >
          <Main />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            padding: "10px 10px 10px 10px",
            display: {
              xl: "none",
              md: "none",
              xs: "inline-block",
              sm: "inline-block",
            },
          }}
        >
          <Details title="Income" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            // margin: "8px 12px 8px 12px",
            padding: "10px 10px 10px 10px", // Hardcoded value
          }}
        >
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
