import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Button from './Button';

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} */
/* function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>블로그 버튼</h1>
      <Button />
    </div>
  );
} */
export default function App() {
  const [count, setCount] = useState(0); //count : 현재 숫자값값
  const [increment, setIncrement] = useState(1); // 몇씩 증가할지 나타내는 숫자 

  const handleIncrease = () => { // 증가 버튼 누를때 실행, count+increment 
    setCount(count + increment); 
  };

  const handleSetIncrement = (value) => { // 1,10,100 버튼 중 하나 누르면 버튼 값value=increment
    setIncrement(value);
  };

  return (
    <div style={styles.container}>
      <h1>GDG 카운터</h1>
      <h2>{count}</h2>
      <div style={styles.row}>
        {[1, 10, 100].map((num) => ( //배열을map으로 돌려서 버튼 3개 
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
    gap: "18px",
    marginBottom: "16px"
  }
};

