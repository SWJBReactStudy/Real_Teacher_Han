import React, {
  useRef,
  useState,
  useMemo,
  useEffect,
  useCallback,
  useReducer,
} from "react";
import User from "./User";

const countActiveUsers = (users) => {
  console.log("Counting...");
  return users.filter((user) => user.active).length;
};

const initialState = {
  inputs: {
    name: "",
    email: "",
  },
  users: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    default:
      return state;
  }
};

const List = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { name, email } = state.inputs;
  const { users } = state;

  const onChangeInput = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);

  const userID = useRef(1);

  const onClickCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        name,
        email,
        id: userID.current,
      },
    });

    userID.current += 1;
  };

  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
  }, []);

  const count = useMemo(() => {
    return countActiveUsers(users);
  }, [users]);

  return (
    <div>
      <label>이름</label>
      <input type="text" name="name" value={name} onChange={onChangeInput} />

      <br />

      <label>이메일</label>
      <input type="text" name="email" value={email} onChange={onChangeInput} />

      <br />

      <button onClick={onClickCreate}>Create</button>

      {users.map((user) => (
        <User user={user} onRemove={onRemove} onToggle={onToggle} />
      ))}
      <div>활성자 수 : {count}</div>
    </div>
  );
};

export default List;
