import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseEffectPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data); // 100개 포스트 저장
      })
      .catch((err) => {
        console.error('데이터 불러오기 실패:', err);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">게시글 목록</h1>
      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow">
            <p><strong>유저번호:</strong> {post.userId}</p>
            <p><strong>글번호:</strong> {post.id}</p>
            <p><strong>제목:</strong> {post.title}</p>
            <p><strong>내용:</strong> {post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseEffectPage;
