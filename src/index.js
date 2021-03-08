import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello({ library, message, number }) {
  return (
    <div>
      <h2>
        Hello {library}!
      </h2>
      <p>
        {message}
      </p>
      <p>
        Total number using props: {number} <br/>
      </p>
    </div>
  );
}

ReactDOM.render(
  <Hello library="React" message="Add dynamic data!" number={3} />,
  document.getElementById('root')
);

