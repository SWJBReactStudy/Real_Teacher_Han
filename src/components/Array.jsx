import React, { useRef, useContext } from "react";
import Form from "./Form";
import {
  useStudentsDispatch,
  useStudentsState,
} from "../Context/StudentsProvider";

const Array = () => {
  const students = useStudentsState();
  const dispatch = useStudentsDispatch();

  const items = students.map((item) => (
    <div key={item.id}>
      <div>이름 : {item.name}</div>
      <div>번호 : {item.content}</div>
      <button
        onClick={() => {
          dispatch({ type: "DELETE", id: item.id });
        }}
      >
        X
      </button>
      <br />
      <br />
    </div>
  ));

  const arrayId = useRef(1);

  return (
    <div>
      <Form />
      {items}
    </div>
  );
};

export default Array;
