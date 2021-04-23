import React, { useContext } from "react";
import { CountContext, SetCountContext } from "../../Provider/CountProvider";

const CounterButton = () => {
  const count = useContext(CountContext);
  const setCount = useContext(SetCountContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default CounterButton;
