import React from "react";

function Button({label, onClick, style={}}) {
 
  const buttonStyle = {
    padding: "12px 24px",
    margin: "12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
    ...style,
  };

  const hoverStyle = {
    backgroundColor: "#45a049",
  };

  return (
    <button
      style={buttonStyle}
      onMouseOver={(e) => (e.target.style.backgroundColor = hoverStyle.backgroundColor)}
      onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
