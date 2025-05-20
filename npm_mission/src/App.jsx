import React from 'react';
import './App.css';
import {Button, Counter} from './Button';
function App() {
  return (
    <div className="App">
      <h1> 블로그로 이동 </h1>
      <Button /> 
    <div className="Button">
      <h1> GDG 카운터 </h1>
      <Counter /> 
    </div>
    </div>
  );
}

export default App;
