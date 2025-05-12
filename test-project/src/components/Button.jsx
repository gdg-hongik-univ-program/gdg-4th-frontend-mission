import React from 'react';

const Button = () => {
  const handleClick = () => {
    window.open('https://gebalhoso.tistory.com/', '_blank');
  };

  return (
    <button 
      onClick={handleClick} 
      style={{ 
        padding: '10px 20px', 
        fontSize: '16px', 
        cursor: 'pointer',
        backgroundColor: '#4a90e2',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#357abd'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#4a90e2'}
    >
      내 블로그로 이동하기
    </button>
  );
};

export default Button;