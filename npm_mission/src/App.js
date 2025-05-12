// src/App.js
import React from 'react';
import './App.css';
import Button from './components/Button';  // 아까 만든 Button 컴포넌트를 가져옵니다

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App!</h1>
        <Button />
      </header>
    </div>
  );
}

export default App;