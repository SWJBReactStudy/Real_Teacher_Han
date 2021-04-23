import React, { useContext } from "react";
import CounterButton from "./CounterButton";
import { CountContext } from "../../Provider/CountProvider";

const Counter = () => {
  const count = useContext(CountContext);

  return (
    <div>
      {count}
      <CounterButton />
    </div>
  );
};

export default Counter;
