import React, { useState } from "react";
import Render from "./components/Render";
import Form from "./components/Form";
import Array from "./components/Array";
import List from "./components/useMemo/List";
import Effect from "./components/Effect";
import Styled from "./components/Styled";
import { StudentsProvider } from "./Context/StudentsProvider";

const App = () => {
  const [count, setCount] = useState(0);
  const [isRender, setIsRender] = useState(true);

  return (
    <div>
      <StudentsProvider>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>

        {/* <Render count={[count, setCount]} />
      <Array /> */}

        {/*<h3>useMemo</h3>
      <List />
        
      <br/>

      <Effect />*/}
        <Array />
        <Styled />
      </StudentsProvider>
    </div>
  );
};

export default App;
