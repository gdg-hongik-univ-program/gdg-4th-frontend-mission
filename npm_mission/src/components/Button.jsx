// src/components/Button.jsx
import React from 'react';

function Button({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        margin: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px'
      }}
    >
      {text}
    </button>
  );
}

export default Button;

