import React from "react";
import useInputs from "./customHooks/useInputs";
import { useStudentsDispatch, useStudentId } from "../Context/StudentsProvider";

const Form = () => {
  const initial = {
    name: "",
    content: "",
  };

  const idx = useStudentId();
  const dispatch = useStudentsDispatch();
  const [form, onChange, reset] = useInputs(initial);

  const onClickCreateButton = () => {
    const { name, content } = form;
    dispatch({
      type: "CREATE",
      name,
      content,
      id: idx.current,
    });

    idx.current += 1;
    reset();
  };

  const { name, content } = form;

  return (
    <div>
      <label>이름</label>
      <input
        type="text"
        onChange={(e) => onChange(e)}
        value={name}
        name="name"
      />

      <br />

      <label>내용</label>
      <input
        type="text"
        onChange={(e) => onChange(e)}
        value={content}
        name="content"
      />

      <br />

      <button onClick={onClickCreateButton}>Create</button>
      <br />
      <br />
    </div>
  );
};

export default Form;
