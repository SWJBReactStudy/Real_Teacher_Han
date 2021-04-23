import React, { useState, useRef } from "react";
import Form from "./Form";

const Array = () => {
  const [students, setStudents] = useState([
    {
      name: "",
      num: 0,
      id: 1,
    },
  ]);

  const items = students.map((item) => (
    <div key={item.id}>
      <div>이름 : {item.name}</div>
      <div>번호 : {item.num}</div>
      <button
        onClick={() => {
          onRemove(item.id);
        }}
      >
        X
      </button>
      <br />
      <br />
    </div>
  ));

  const onRemove = (id) => {
    setStudents(students.filter((item) => item.id !== id));
  };

  const arrayId = useRef(2);

  return (
    <div>
      <Form students={students} setStudents={setStudents} idx={arrayId} />
      {items}
    </div>
  );
};



export default Array;
