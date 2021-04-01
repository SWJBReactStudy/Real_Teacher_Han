import React, { useState } from "react";

const Form = ({ students, setStudents, idx }) => {
  const [inputs, setInputs] = useState({
    name: "",
    num: 0,
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickCreateButton = () => {
    const { name, num } = inputs;
    setStudents([
      ...students,
      {
        name,
        num,
        id: idx.current,
      },
    ]);

    idx.current += 1;
    setInputs({
      name: "",
      num: "",
    });
  };

  const { name, num } = inputs;

  return (
    <div>
      <label>이름</label>
      <input type="text" onChange={onChangeInput} value={name} name="name" />

      <br />

      <label>번호</label>
      <input type="text" onChange={onChangeInput} value={num} name="num" />

      <br />

      <button onClick={onClickCreateButton}>Create</button>
      <br />
      <br />
    </div>
  );
};

export default Form;
