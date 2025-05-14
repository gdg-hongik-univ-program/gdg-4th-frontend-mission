import React from 'react';

function Button() {
    const handleClick = () => {
        window.open("https://velog.io/@jsyun219/posts")
    };
    
    return (
        <button onClick={handleClick}>
            블로그로 이동
        </button>
    );
}

export default Button;