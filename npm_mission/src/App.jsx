import React from 'react';
import './App.css';
import {Button, Counter} from './Button';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 space-y-4">
      <Button /> 
    <div className="Button">
      <Counter /> 
    </div>
    </div>
  );
}

export default App;
