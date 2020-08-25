import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (ev) => {
    setValue(ev.target.value);
  };
  return { value, onChange, setValue };
};
