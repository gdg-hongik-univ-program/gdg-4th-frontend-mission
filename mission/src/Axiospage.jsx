import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
}
function AxiosPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);

  const handleSearch = () => {
    let found = false;
    
    for (let i = 0; i < users.length; i++) {
      if (users[i].name === searchName) {
        console.log('찾은 사용자:', users[i]);
        found = 1;
        break;
      }
    }
    
    if (!found) {
      console.log('해당 이름의 사용자를 찾을 수 없습니다.');
    }
  };

  return (
    <div>
      <h1>Axios 페이지</h1>
      <p>유저 데이터 받아오는 페이지.</p>
      <nav>
        <input 
          type="text" 
          placeholder="유저 이름" 
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button onClick={handleSearch}>입력 완료하기</button>
        <div>
          {users.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
        <Link to="/"><button>메인 페이지로 이동 (Link)</button></Link>
        <button onClick={() => navigate('/useeffect')}>UseEffect 페이지로 이동 (useNavigate)</button>
      </nav>
    </div>
  );
}

export default AxiosPage;