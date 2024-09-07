// import { styled } from "@mui/system";

const SPACING_UNIT = 8; // Set your own spacing unit here

const useStyles = () => ({
  desktop: {
    display: {
      xs: "none",
      sm: "block",
    },
  },
  mobile: {
    display: {
      xs: "block",
      sm: "none",
    },
  },
  main: {
    paddingBottom: {
      xs: `${5 * SPACING_UNIT}px`, // Convert spacing to pixels
      sm: 0,
    },
  },
  last: {
    marginBottom: {
      xs: `${3 * SPACING_UNIT}px`, // Convert spacing to pixels
      sm: 0,
    },
    paddingBottom: {
      xs: "200px", // Hardcoded value
      sm: 0,
    },
  },
  grid: {
    "& > *" :{
      margin: `${2 * SPACING_UNIT}px`, // Convert spacing to pixels
    },
  },
});

export default useStyles;
