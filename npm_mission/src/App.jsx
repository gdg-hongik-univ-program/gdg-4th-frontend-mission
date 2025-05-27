import { useState } from 'react';
import Button from './Button';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'; 


export default function App() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const handleIncrease = () => {
    setCount(count + increment);
  };

  const handleSetIncrement = (value) => {
    setIncrement(value);
  }; 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-2">YJ 카운터 </h1>
      <h2 className="text-xl mb-4">{count}</h2>
      <div className="flex justify-center my-4 gap-2">
        {[1, 10, 100].map((num) => (
          <Button key={num} value={num} onClick={handleSetIncrement} />
        ))}
      </div>
      <Button value="증가" onClick={handleIncrease} />
    </div>
  );
}

/* const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px"
  },
  row: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "16px"
  }
};
*/
