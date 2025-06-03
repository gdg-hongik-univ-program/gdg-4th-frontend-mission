import React, { useState,useEffect } from 'react' 
import axios from 'axios';


function ShowPost({ post }) {
  return (
    <div style={{
      padding: '15px', // 여백
    }}> {/* 스타일 속성은 객체 형태로 사용 */}
      <p>
      <strong>유저번호</strong>  : {post.userId} <br/>
      <strong>글번호</strong> : {post.id} <br/>
      <strong>제목</strong> : {post.title} <br/>
      <strong>내용</strong> : {post.body} <br/>
      </p>
    </div>
  );
}
function Mission3() {
    const [data, setData] = useState([]); 

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      setData(response.data)})
    .catch(error => {
      console.error(error);
    });
  }, []); // 화면 바뀔 시 데이터 받아오기 및 저장


  // HTML에서 받아온 데이터를 표시
  return (
  <div>
    <h1> 미션3 페이지입니다! </h1>
    <div style = {{  

      padding: '15px',
      display: 'grid', 
      gridTemplateColumns: 'repeat(4,1fr)',
      maxWidth: '100%',
      
     }}>
      {data.map(post => (
        <ShowPost key ={post.id} post={post}/>
        ))}
  </div>
  </div>
  )
}

export default Mission3;