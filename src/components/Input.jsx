import React from "react";

function Input({ type, accept, onChange }) {
  return <input type={type} accept={accept} onChange={onChange} />;
}

export default Input;
