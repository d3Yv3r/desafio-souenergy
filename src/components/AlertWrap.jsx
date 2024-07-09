import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export const AlertWrap = ({ type, text }) => {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity={type}>
      {text}
    </Alert>
  );
};
