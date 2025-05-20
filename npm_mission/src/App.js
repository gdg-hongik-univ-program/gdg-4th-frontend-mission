// App.jsx
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">GDG 카운터 예제</h1>
      <div className="text-6xl font-bold mb-8">{count}</div>

      <div className="flex gap-4 mb-6">
        {[1, 10, 100].map((val) => (
          <button
            key={val}
            onClick={() => setIncrement(val)}
            className="bg-black text-white px-6 py-2 rounded-2xl"
          >
            {val}
          </button>
        ))}
      </div>

      <button
        onClick={() => setCount(count + increment)}
        className="bg-black text-white px-24 py-2 rounded-2xl"
      >
        증가
      </button>
    </div>
  );
}

export default App;
