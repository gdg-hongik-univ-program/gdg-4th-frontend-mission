import React, { useState } from 'react';
import axios from 'axios';

function Mission2() {
    const [data, setData] = useState([]); // 받아온 데이터를 저장할 변수
    const [inputUser, setinputUser] = useState(''); // input값을 저장할 변수

  const handleRequest = () => { // 클릭 시
    const option = {
      url : 'https://jsonplaceholder.typicode.com/users',
      method:'GET',
      headers: { 
        'Accept':'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
      }, // 받아올 사이트, 메소드
      data: {
        name: 'test'
      }
    };
  
    axios(option)
    .then(response => {
      console.log(response.data);
      setData(response.data)}) // 콘솔에 받아온 데이터 출력, 데이터 저장
    .catch(error => {
      {console.error(error)};
    });
  };

    const showUser = () => {
      const searchUser = data.find(user => user.name.toLowerCase().trim() === inputUser.toLowerCase().trim())
      // 소문자 + 공백제거로 확실하게 비교
      if (searchUser) {
        console.log(searchUser);
      }
      else {
        console.log('데이터 없음');
      }
    }
  return (
    <div>
    <h1> 미션2 페이지입니다!</h1>
        <p>
        <button value="데이터 요청" onClick={handleRequest} >
          데이터 받아오기
        </button> 
        {/* 버튼 클릭시 데이터 받아옴 */}
        </p>
        <input id="ipv" type = "text" onChange={(e) => setinputUser(e.target.value)}/>
        {/* 입력값이 바뀌는 이벤트 시 이벤트의 타겟 값 (Input값)으로 setinputUser 설정 */ }
        <input type="submit" value="비교" onClick={showUser} /> 
        {/* 비교 버튼 */}
    </div>
    )
}

export default Mission2;