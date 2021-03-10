import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`field 1: ${val1}`);
  }, [val1]);

  useEffect(() => {
    console.log(`field 2: ${val2}`);
  }, [val1, val2]);

  return (
    <>
      <label>
        First Phase:
        <input value={val1} onChange={e => setVal1(e.target.value)}></input>
      </label>
      <br />
      <label>
        Second Phase:
        <input value={val2} onChange={e => setVal2(e.target.value)}></input>
      </label>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
