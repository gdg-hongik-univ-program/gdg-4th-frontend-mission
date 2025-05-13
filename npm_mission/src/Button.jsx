import React from "react";

const Button = () => {
    const handleClick = () => {
        window.location.href = 'https://velog.io/@yj_y/posts';
    };

    return(
        <button onClick={handleClick}>블로그로 이동</button>
    );
};

export default Button;