import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../Navigation";

export default function AxiosPage() {
  const [users, setUsers] = useState([]);
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setUsers(response.data);
        console.log("데이터 받아옴:", response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSearch = () => {
    const foundUser = users.find(user => user.name.toLowerCase() === inputName.toLowerCase());
    if (foundUser) {
      console.log("찾은 유저:", foundUser);
    } else {
      console.log("사용자를 찾을 수 없습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-4">
      <Navigation />
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">유저 검색</h1>
          <p className="text-gray-600 text-center mb-4">
            사용자 이름을 입력하면 해당 유저의 데이터를 <br /> console에 출력해줍니다.
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="예) Leanne Graham"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              className="flex-1 border border-purple-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              onClick={handleSearch}
              className="bg-purple-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-purple-600 transition"
            >
              검색
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-400 text-center">
            콘솔에서 검색 결과를 확인하세요 🔍
          </div>
        </div>
      </div>
    </div>
  );
}
