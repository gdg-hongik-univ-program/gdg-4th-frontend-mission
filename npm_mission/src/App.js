import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  return (
    <div className="container">
      <div className="title">GDG 카운터 예제</div>
      <div className="count">{count}</div>

      <div className="increment-buttons">
        {[1, 10, 100].map((val) => (
          <button
            key={val}
            className="round-button"
            onClick={() => setIncrement(val)}
          >
            {val}
          </button>
        ))}
      </div>

      <button className="full-width-button" onClick={() => setCount(count + increment)}>
        증가
      </button>
    </div>
  );
}

export default App;
