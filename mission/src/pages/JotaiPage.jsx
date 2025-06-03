import React , {useEffect} from 'react';
import {atom, useAtom} from 'jotai';
import axios from 'axios'


const countAtom = atom(0); // 아톰 초기값 설정

function Counter() {
    const [count, setCount] = useAtom(countAtom); // useState 처럼사용

    useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log(response.data);
      setCount(prev => prev+1) // user정보 출력 후 , 카운터 +1 
    }) // 
}, []);

return ( // 요청시 +1, 데이터 받아올 때 +1
    <div>
    <p>현재 요청 횟수: {count}</p>
    <button onClick={() => setCount(prev => prev+1)}> 
    요청
    </button>
    </div>
);
}

export default Counter

