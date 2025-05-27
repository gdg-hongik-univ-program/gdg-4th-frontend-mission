// src/pages/AxiosPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosPage = () => {
  const [users, setUsers] = useState([]); // 유저 데이터 배열
  const [inputName, setInputName] = useState(''); // 사용자 입력값

  // 컴포넌트가 처음 마운트될 때 API 요청
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data); // 유저 정보 저장
      })
      .catch((err) => {
        console.error('유저 데이터를 불러오는 데 실패했습니다.', err);
      });
  }, []);

  // 버튼 클릭 시 유저 검색
  const handleSearch = () => {
    const foundUser = users.find(user => user.name.toLowerCase() === inputName.toLowerCase());
    if (foundUser) {
      console.log('유저 찾음:', foundUser);
    } else {
      console.log('해당 유저를 찾을 수 없습니다.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📦 Axios 유저 검색</h2>
      
      <input
        type="text"
        value={inputName}
        placeholder="유저 이름을 입력하세요"
        onChange={(e) => setInputName(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      
      <button onClick={handleSearch} className="bg-blue-500 text-white px-3 py-1 rounded">
        유저 검색
      </button>
    </div>
  );
};

export default AxiosPage;