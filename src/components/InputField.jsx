import React from "react";

import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const InputField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.primary.dark,
      fontSize: "1rem !important",
      fontWeight: "bold !important",
    },
    "& label": {
      color: theme.palette.primary.main,
      fontWeight: "bold",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldSet": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldSet": {
        borderColor: theme.palette.primary.dark,
      },
      "&.Mui-focused fieldSet": {
        borderColor: theme.palette.primary.dark,
      },
    },
  },
}))(TextField);

export default InputField;
