import React, { useState, useEffect, useMemo, useCallback } from "react";

const Effect = () => {
  const [inputs, setInput] = useState("");
  const [array, setArray] = useState([
    {
      id: 1,
      active: false,
    },
    {
      id: 2,
      active: true,
    },
    {
      id: 3,
      active: true,
    },
    {
      id: 4,
      active: false,
    },
  ]);

  useEffect(() => {}, []);

  return (
    <div>
      <input
        type="text"
        value={inputs}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Effect;
