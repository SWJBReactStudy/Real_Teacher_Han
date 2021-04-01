import React, {
  useRef,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import User from "./User";

const countActiveUsers = (users) => {
  console.log("Counting...");
  return users.filter((user) => user.active).length;
};

const List = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const [users, setUsers] = useState([]);

  const [count, setCount] = useState(0);

  const { name, email } = inputs;

  const onChangeInput = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [users]
  );

  const userID = useRef(1);

  const onClickCreate = () => {
    const user = {
      name,
      email,
      id: userID.current,
      active: false,
    };
    setUsers([...users, user]);

    userID.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  useEffect(() => {
    setCount(countActiveUsers(users));
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
