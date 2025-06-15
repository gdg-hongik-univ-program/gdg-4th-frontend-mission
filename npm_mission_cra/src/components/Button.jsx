import React from "react";

function Button({ label, onClick, className = "" }) {
  return (
    <button
      className={`bg-[#4CAF50] text-black px-6 py-3 m-3 rounded ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
