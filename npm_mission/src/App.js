// src/App.js
import React, {useState} from 'react';
import './App.css';
import Button from './components/Button';  // 아까 만든 Button 컴포넌트를 가져옵니다

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>mminn94's Counter</h1>
        <h1> {count} </h1>
        <div>
          <Button label="1" onClick = {()=>setStep(1)}/>
          <Button label="10" onClick = {()=>setStep(10)}/>
          <Button label="100" onClick = {()=>setStep(100)}/>
        </div>
        <Button label="증가" onClick = {()=> setCount(count+step)} style={{padding: "12px 115px"}}/>
      </header>
    </div>
  );
}

export default App;