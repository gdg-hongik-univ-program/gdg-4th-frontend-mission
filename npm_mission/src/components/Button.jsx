import React from "react";

function Button() {
  const handleClick = () => {
    window.location.href = "https://velog.io/@mminn94/posts";
  };

  const buttonStyle = {
    padding: "12px 24px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  };

  const hoverStyle = {
    backgroundColor: "#45a049",
  };

  return (
    <button
      style={buttonStyle}
      onMouseOver={(e) => (e.target.style.backgroundColor = hoverStyle.backgroundColor)}
      onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      onClick={handleClick}
    >
      블로그로 이동하기
    </button>
  );
}

export default Button;
