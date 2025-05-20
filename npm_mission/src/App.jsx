import { useState } from 'react';
import Button from './Button';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


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
    <div style={styles.container}>
      <h1>GDG 카운터 예제</h1>
      <h2>{count}</h2>
      <div style={styles.row}>
        {[1, 10, 100].map((num) => (
          <Button key={num} value={num} onClick={handleSetIncrement} />
        ))}
      </div>
      <Button value="증가" onClick={handleIncrease} />
    </div>
  );
}

const styles = {
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

