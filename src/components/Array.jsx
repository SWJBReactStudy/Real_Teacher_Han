import React from "react";

const Array = () => {
  const array = [
    {
      name: "a",
      num: 1,
    },
    {
      name: "b",
      num: 2,
    },
  ];

  const render = array.map((item, i) => (
    <div key={i}>
      <div>{item.name}</div>
      <div>{item.num}</div>
    </div>
  ));

  return <div>{render}</div>;
};

export default Array;
