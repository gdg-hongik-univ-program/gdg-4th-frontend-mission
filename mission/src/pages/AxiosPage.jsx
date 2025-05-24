import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosPage() {
  const [users, setUsers] = useState([]);
  const [inputName, setInputName] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = () => {
    const foundUser = users.find((user) => user.name === inputName);
    if (foundUser) {
      console.log('찾은 유저:', foundUser);
    } else {
      console.log('유저를 찾을 수 없습니다.');
    }
  };

  return (
    <div>
      <h1>AxiosPage</h1>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="유저 이름 입력"/>
      <button onClick={handleSearch}>검색</button>

      <div>
        <button onClick={() => window.location.href = '/'}>홈으로</button>
      </div>
    </div>
  );
}

export default AxiosPage;
