import React, { useState } from "react";
import Render from "./components/Render";
import Form from "./components/Form";

const App = () => {
  const [count, setCount] = useState(0);
  const [isRender, setIsRender] = useState(true);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <Render count={[count, setCount]} />
      <Form />
    </div>
  );
};

export default App;
