import React, { useState } from "react";
import Render from "./components/Render";
import Form from "./components/Form";
import Array from "./components/Array";
import List from "./components/useMemo/List";

const App = () => {
  const [count, setCount] = useState(0);
  const [isRender, setIsRender] = useState(true);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      {/* <Render count={[count, setCount]} />
      <Array /> */}

      <h3>useMemo</h3>
      <List />
    </div>
  );
};

export default App;
