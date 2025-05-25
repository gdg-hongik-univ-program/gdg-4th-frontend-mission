// UseEffectPage.js (PostBox 사용하지 않는 버전)

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function UseEffectPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostsData = async () => {
        setLoading(true);
        setError(null);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
    };

    fetchPostsData();
  }, []); 

  return (
    <div className="use-effect-page">
      <h1>UseEffect 페이지</h1>
      <p>이곳은 미션3을 진행할 UseEffect 페이지입니다.</p>
      <nav className="page-navigation">
        <Link to="/"><button>메인 페이지로 이동 (Link)</button></Link>
        <button onClick={() => navigate('/axios')}>Axios 페이지로 이동 (useNavigate)</button>
      </nav>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-box"> 
            <h3>{post.title}</h3>
            <p><strong>User ID:</strong> {post.userId}</p>
            <p><strong>Post ID:</strong> {post.id}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseEffectPage;