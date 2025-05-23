import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>메인 페이지</h1>
      <p>이곳은 메인 페이지입니다.</p>
      <nav>
        <Link to="/axios"><button>Axios 페이지로 이동 (Link)</button></Link>
        <button onClick={() => navigate('/useeffect')}>UseEffect 페이지로 이동 (useNavigate)</button>
      </nav>
    </div>
  );
}

export default MainPage;