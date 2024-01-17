import { TextField } from "@mui/material";
import { FormsData } from "../types";

const TextFields = ({
  label,
  variant,
  color,
  required,
  type,
  fullWidth,
  name,
  onChangeHandler,
}: FormsData) => {
  return (
    <TextField
      onChange={onChangeHandler}
      label={label}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      required={required}
      type={type}
      name={name}
    />
  );
};

export default TextFields;
