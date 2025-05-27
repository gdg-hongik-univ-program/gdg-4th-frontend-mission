import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AxiosPage() {
  const [users, setUsers] = useState([]);          // 유저 전체 목록
  const [inputName, setInputName] = useState('');  // input 입력값

  // 페이지 열릴 때 API 호출
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data); // 응답 데이터 저장
      } catch (err) {
        console.error('요청 실패:', err);
      }
    }

    fetchUsers();
  }, []);

  // 버튼 누르면 유저 검색
  const handleSearch = () => {
    const found = users.find(
      user => user.name.toLowerCase() === inputName.toLowerCase()
    );

    if (found) {
      console.log('유저 정보:', found);
    } else {
      console.log('해당 이름의 유저가 없습니다.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Axios Page</h1>

      <input
        type="text"
        placeholder="유저 이름을 입력하세요"
        className="border p-2 rounded"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        유저 검색
      </button>

      <Link to="/" className="text-gray-600 underline">
        메인 페이지로
      </Link>
    </div>
  );
}

export default AxiosPage;