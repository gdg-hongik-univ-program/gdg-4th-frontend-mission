import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function UseEffectPage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => setPosts(res.data))
    .catch((err) => console.error(err));
}, []);


    return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">UseEffect + Axios</h1>

      {/* 페이지 이동 버튼 */}
      <div className="mb-6 space-x-2">
        <button
          className="rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-gray-200 hover:border-gray-400 transition" onClick={() => navigate("/")}>Main Page</button>
        <button
          className="rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-gray-200 hover:border-gray-400 transition" onClick={() => navigate("/axios")}>Axios Page</button>
      </div>

      {/* 게시글 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
  <div key={post.id} className="border rounded p-4 mb-4 s">
    <p><strong>유저번호</strong> {post.userId}</p>
    <p><strong>글번호</strong> {post.id}</p>
    <p><strong>제목</strong> {post.title}</p>
    <p className="whitespace-pre-line"><strong>내용</strong> {post.body}</p>
  </div>
))}

   

      </div>

    </div>
  );
}

export default UseEffectPage;