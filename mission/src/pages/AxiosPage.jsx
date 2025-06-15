import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../httpCount';

function AxiosPage() {
  const [users, setUsers] = useState([]);
  const [inputName, setInputName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get('https://jsonplaceholder.typicode.com/users')
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
      <button onClick={() => navigate("/")}>Go to Main Page</button>
      <button onClick={() => navigate("/useeffect")}>Go to UseEffect Page</button>
      </div>
    </div>
  );
}

export default AxiosPage;
