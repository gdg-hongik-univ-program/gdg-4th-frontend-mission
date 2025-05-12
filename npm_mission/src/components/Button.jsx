// src/components/Button.jsx
import React from 'react';

export default function Button() {
  const goToBlog = () => {
    window.location.href = 'https://velog.io/@myjxjx813/posts';
  };

  return (
    <button
      type="button"
      onClick={goToBlog}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '4px',
        border: '1px solid #333'
      }}
    >
      내 블로그로 이동
    </button>
  );
}
