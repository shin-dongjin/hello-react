import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake() {
  return <h1>Lake!</h1>
}

function SkiResort() {
  return <h1>SkiResort!</h1>
}

/*
function App() {
  return (
    <div>
      <Lake />
      <SkiResort />
    </div>
  );
}
*/
/*
function App() {
  return (
    <React.Fragment>
      <Lake />
      <SkiResort />
    </React.Fragment>
  );
}
*/

function App() {
  return (
    <>
      <Lake />
      <SkiResort />
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
