import React from 'react';
import { useState } from 'react';

export function Button() {
    const handleClick = () => {
        window.open("https://velog.io/@jsyun219/posts")
    };
    
    return (
        <button onClick={handleClick}>
            블로그로 이동
        </button>
    );
}


export function Counter() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    return (
        <div>
            <p>{x}</p>
            <p> 현재 증가량 : {y} </p>
            <button onClick={() => setY(y+1)}>
                1
            </button>
            <button onClick={() => setY(y+10)}>
                10
            </button>
            <button onClick={() => setY(y+100)}>
                100
            </button>
            <button onClick={() => setY(0)}>
                증가량 초기화
            </button>
            <p>
            
                <button onClick={() => setX(x+y)}>
                값 증가
            </button>
            <button onClick={() => setX(0)}>
                값 초기화
            </button>
            
            </p>

        </div>
    )
}