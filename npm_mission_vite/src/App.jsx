import React, { useState } from 'react';
import Button from './components/Button';

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="p-8 text-center bg-white rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">mminn94's Counter</h1>
        <h2 className="text-4xl mb-6">{count}</h2>

        <div className="flex justify-center space-x-4 mb-4">
          <Button label="1" onClick={() => setStep(1)} />
          <Button label="10" onClick={() => setStep(10)} />
          <Button label="100" onClick={() => setStep(100)} />
        </div>

        <Button label="증가" onClick={() => setCount(count + step)} className="w-[200px]" />
      </div>
    </div>
  );
}

export default App;
