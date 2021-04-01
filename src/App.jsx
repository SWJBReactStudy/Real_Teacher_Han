import React, { useState } from "react";
import Render from "./components/Render";
import Form from "./components/Form";
import Array from "./components/Array";

const App = () => {
  const [count, setCount] = useState(0);
  const [isRender, setIsRender] = useState(true);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <Render count={[count, setCount]} />
      <Array />
    </div>
  );
};

export default App;
