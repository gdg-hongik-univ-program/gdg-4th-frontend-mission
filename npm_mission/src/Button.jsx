import React from 'react';

function Button({ onClick, label }) {
  return (
    <button onClick={onClick} style={{ margin: '8px', padding: '8px 16px' }}>
      {label}
    </button>
  );
}

export default Button;
