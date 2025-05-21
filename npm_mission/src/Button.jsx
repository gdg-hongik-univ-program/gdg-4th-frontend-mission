import React from 'react';
import { useState } from 'react';

export function Button() {
    const handleClick = () => {
        window.open("https://velog.io/@jsyun219/posts")
    };
    
    return (
        <button onClick={handleClick} className="rounded bg-gray-400 hover:bg-yellow-500 px-2 py-1">
           블로그로 이동  
        </button>
    );
}


export function Counter() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 space-y-4">
            <h1 className="text-2xl font-bold text-black-700">GDG 카운터</h1>
            <h1 className="text-2xl font-bold text-black-700">값: {x}</h1>
            <p> 현재 증가량 : {y} </p>
            <div className="flex space-x-2">
            <button onClick={() => setY(y+1)} className=" rounded bg-gray-400 hover:bg-yellow-500 px-2 py-1">
                +1
            </button>
            <button onClick={() => setY(y+10)} className=" rounded bg-gray-400 hover:bg-yellow-500 px-2 py-1">
                +10
            </button>
            <button onClick={() => setY(y+100)} className=" rounded bg-gray-400 hover:bg-yellow-500 px-2 py-1">
                +100
            </button>
            </div>
            <div className="flex space-x-2">
            <button onClick={() => setY(0)} className="btn bg-red-500 hover:bg-red-600 rounded px-2 py-1">
                증가량 초기화
            </button>
            </div>
            <div className="flex space-x-2">
                <button onClick={() => setX(x+y)} className="btn bg-green-500 hover:bg-green-600 px-2 py-1 rounded">
                값 증가
            </button>
            <button onClick={() => setX(0)} className="btn bg-gray-500 hover:bg-gray-600 px-2 py-1 rounded">
                값 초기화
            </button>
            </div>
           

        </div>
    )
}