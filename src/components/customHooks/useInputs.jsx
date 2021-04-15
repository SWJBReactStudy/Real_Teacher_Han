import { useState } from "react";

const useInputs = (initial) => {
  const [form, setForm] = useState(initial);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const reset = () => setForm(initial);

  return [form, onChange, reset];
};

export default useInputs;
