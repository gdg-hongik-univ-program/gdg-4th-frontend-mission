// src/Button.jsx
import React from 'react';

function Button({ onClick, children, className = '', type = 'button', ...rest }) {
  const baseStyle = "font-medium py-2 px-4 rounded-md shadow transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;