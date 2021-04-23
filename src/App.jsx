import React, { useState } from "react";
import Render from "./components/Render";
import Form from "./components/Form";
import Array from "./components/Array";
import List from "./components/useMemo/List";
import Effect from "./components/Effect";
import Styled from "./components/Styled";
import Counter from "./components/Counter";
import { CountProvider, SetCountProvider } from "./Provider/CountProvider";

const App = () => {
  return (
    <div>
      <CountProvider>
        <SetCountProvider>
          <Counter />
        </SetCountProvider>
      </CountProvider>
    </div>
  );
};

export default App;
