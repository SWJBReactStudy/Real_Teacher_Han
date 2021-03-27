import React, { useState } from "react";

const Form = () => {
  const [student, setStudent] = useState({
    name: "asfas",
    hakbun: "safafa",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  return (
    <div>
      <label>이름</label>
      <input
        type="text"
        onChange={onChangeInput}
        value={student.name}
        name="name"
      />

      <br />

      <label>학번</label>
      <input
        type="text"
        onChange={onChangeInput}
        value={student.hakbun}
        name="hakbun"
      />

      <div>
        <p>이름 : </p>
        <p>학번 : </p>
      </div>
    </div>
  );
};

export default Form;
