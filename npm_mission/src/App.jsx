import React, { useState } from 'react';
import Button from './Button';

function App() {
  const [value, setValue] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState(1);

  const increase = () => {
    setValue(value + incrementAmount);
  };

  const changeIncrement = (amount) => {
    setIncrementAmount(amount);
  };

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Counter</h1>
      <h2 className="text-2xl mb-2">현재 값: {value}</h2>
      <h3 className="text-lg text-gray-600 mb-6">현재 증가량: {incrementAmount}</h3>

      <Button onClick={increase} text={`+${incrementAmount} 만큼 증가`} />

      <div className="mt-6 flex justify-center gap-4">
        <Button onClick={() => changeIncrement(1)} text="1로 설정" />
        <Button onClick={() => changeIncrement(5)} text="5로 설정" />
        <Button onClick={() => changeIncrement(10)} text="10으로 설정" />
      </div>
    </div>
  );
}

export default App;
