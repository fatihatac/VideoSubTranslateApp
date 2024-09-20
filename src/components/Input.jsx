import React from "react";
import Button from "@mui/material/Button";

function Input({ name, type, accept, onChange }) {
  return (
    <Button variant="outlined">
      {name}
      <input type={type} accept={accept} onChange={onChange} />
    </Button>
  );
}

export default Input;
