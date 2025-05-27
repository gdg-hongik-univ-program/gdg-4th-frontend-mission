// src/pages/UseEffectPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectPage = () => {
  const [posts, setPosts] = useState([]);

  // 컴포넌트가 처음 렌더링될 때 posts 데이터를 불러옴
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data); // 받아온 100개의 게시글 저장
      })
      .catch((err) => {
        console.error('데이터를 불러오는 데 실패했습니다:', err);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📄 useEffect로 불러온 게시글</h1>

      {/* 게시글 100개 박스 출력 */}
      <div className="grid gap-4">
        {posts.map(post => (
          <div key={post.id} className="border p-4 rounded shadow-sm bg-white">
            <h2 className="text-lg font-semibold mb-2">📌 {post.title}</h2>
            <p className="text-sm text-gray-600 mb-1"><strong>User ID:</strong> {post.userId}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Post ID:</strong> {post.id}</p>
            <p className="text-gray-800">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffectPage;
