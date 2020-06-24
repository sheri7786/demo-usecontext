import React, { useState } from 'react';
import './App.css';
import Parent from "./Parent";
import Counter from "./CounterContext";

function App() {
  let count = useState(1);
  return (
    <Counter.Provider value={count}>
      <Parent />
    </Counter.Provider>
  );
}

export default App;
