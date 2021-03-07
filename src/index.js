import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  React.createElement("div", { style: { color: "blue"}}, React.createElement("h2", null, "Ola!")),
  document.getElementById('root')
);

