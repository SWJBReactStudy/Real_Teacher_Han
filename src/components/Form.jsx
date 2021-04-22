import React from "react";
import useInputs from "./customHooks/useInputs";
import { useStudentsDispatch, useStudentId } from "../Context/StudentsProvider";
import { useTheme } from "styled-components";

const Form = () => {
  const initial = {
    name: "",
    content: "",
  };

  const idx = useStudentId();
  const dispatch = useStudentsDispatch();
  const [form, onChange, reset] = useInputs(initial);

  const [user, setUser] = useState({
    id: "arkc1009",
    password: "asdfgh",
    asdas: 12,
    asdaw: 12,
  });

  setUser({
    ...user,
    [key]: value,
  });

  const obj = {
    name: "HDJ",
    password: "asdsad",
  };

  const onChange = (e, id) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  };

  <input value={user.id} onChange={onChange} name="id" />;
  <input value={user.password} onChange={onChange} name="password" />;

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
