import React from 'react';

function Button({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
    >
      {text}
    </button>
  );
}

export default Button;

