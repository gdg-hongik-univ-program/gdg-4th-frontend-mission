import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosPage() {
  const [users, setUsers] = useState([]); // 전체 유저 목록 저장
  const [nameInput, setNameInput] = useState(''); // input 입력값

  // 페이지 로딩 시 유저 데이터 fetch
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
        console.log('유저 데이터 불러옴:', response.data);
      })
      .catch((error) => {
        console.error('유저 데이터 불러오기 실패:', error);
      });
  }, []);

  // 버튼 클릭 시 유저 검색
  const handleSearch = () => {
    const user = users.find(
      (u) => u.name.toLowerCase() === nameInput.trim().toLowerCase()
    );

    if (user) {
      console.log('유저 찾음:', user);
    } else {
      console.log('해당 이름의 유저가 존재하지 않음');
    }
  };

return (
  <div className="p-4">
    <h1 className="text-xl font-bold mb-4">유저 검색</h1>
    <input
      type="text"
      value={nameInput}
      onChange={(e) => setNameInput(e.target.value)}
      placeholder="유저 이름을 입력하세요"
      className="border border-gray-400 p-2 mr-2"
    />
    <button
      onClick={handleSearch}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      검색
    </button>
  </div>
);
}

export default AxiosPage;