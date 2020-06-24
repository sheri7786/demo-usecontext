import React, { useContext } from 'react';

import Counter from "./CounterContext";

function Child() {
  let counterValue = useContext(Counter);
  //console.log(counterValue)
  return (
    <div>
      <h2>this is first child</h2>
      <h3> value of CounterContext is:{counterValue[0]}</h3>
      <button onClick = {() => {counterValue[1](++counterValue[0])}}>increment Context</button>
    </div>
  );
}

export default Child;
