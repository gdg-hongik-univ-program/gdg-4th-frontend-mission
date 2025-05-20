/* import React from "react";

const Button = () => {
    const handleClick = () => {
        window.location.href = 'https://velog.io/@yj_y/posts';
    };

    return(
        <button onClick={handleClick}>블로그로 이동</button>
    );
};

export default Button; */

export default function Button({ value, onClick }) {
  return (
    <button onClick={() => onClick(value)} style={styles.button}>
      {value}
    </button>
  );
}

const styles = {
  button: {
    margin: '8px',
    padding: '16px 32px',
    fontSize: '18px',
    borderRadius: '20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  }
};