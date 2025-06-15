import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../httpCount';

function UseEffectPage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>UseEffect Page</h1>
      <div>
        <div>
          {posts.map((post) => (
            <div key={post.id} className='border p-4 m-2'>
              <p>유저번호 {post.userId}</p>
              <p>글번호 {post.id}</p>
              <p>제목 {post.title}</p>
              <p>내용 {post.body}</p>
              <hr/>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => navigate("/")}>Go to Main Page</button>
      <button onClick={() => navigate("/axios")}>Go to Axios Page</button>
    </div>
  );
}

export default UseEffectPage;
